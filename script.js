// Constants
const WHATSAPP_NUMBER = "919876543210"; 

// Handle Package Bookings
function bookViaWhatsApp(packageName, price) {
    const message = `Hi Andamanvibe team! I am interested in booking the "${packageName}" package priced at ₹${price}. Can you please share more details and availability?`;
    
    // Encode the URI to ensure spaces and special characters are handled correctly
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');
}

// Handle General Contact Form
function sendGeneralInquiry(event) {
    event.preventDefault(); // Prevent page reload
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const tripDetails = document.getElementById('message').value;
    
    // Construct message
    const message = `*New Inquiry via Website* \n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Trip Plans:* ${tripDetails}`;
    
    // Redirect to WhatsApp
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Optional: Reset form after submission
    document.getElementById('whatsappForm').reset();
}

// Navbar shadow effect on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('header');
    if (window.scrollY > 0) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
});
