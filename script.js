document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Sticky Header Glassmorphism Toggle ---
    const header = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        // Toggle 'scrolled' class based on Y scroll position
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- 2. Smooth Scrolling for Anchor Links ---
    // (CSS smooth scroll handles most, but this guarantees consistency for JS triggers)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip if it's just "#"
            if(targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                // Offset for fixed header
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 3. Contact Form WhatsApp Interception ---
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent traditional form submission
            
            // Gather input values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const plans = document.getElementById('plans').value.trim();
            
            // Ensure data exists
            if (!name || !phone || !plans) {
                alert('Please fill out all required fields.');
                return;
            }

            // Construct the WhatsApp message
            const message = `Hello Andamanvibe! I'd like to plan a trip.\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n\n*My Plans/Requirements:*\n${plans}`;
            
            // Encode the message for URL compatibility
            const encodedMessage = encodeURIComponent(message);
            
            // Target WhatsApp Number (Replace with your actual business number, including country code, no + or spaces)
            const whatsappNumber = "919876543210"; 
            
            // Generate WhatsApp URL
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            
            // Open WhatsApp in a new tab/window
            window.open(whatsappUrl, '_blank');
            
            // Optional: Reset form after opening
            contactForm.reset();
        });
    }
});
