import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi! I'm ${form.name}. ${form.message} (Email: ${form.email}, Phone: ${form.phone})`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Contact Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h3 className="font-display text-xl font-semibold text-foreground">
              Let's Plan Your Dream Andaman Trip
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Reach out to us via WhatsApp, phone, or email. We respond within minutes and help you create a customized Andaman itinerary.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-foreground/80">
                <div className="w-10 h-10 rounded-full bg-ocean-light flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                +91 98765 43210
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/80">
                <div className="w-10 h-10 rounded-full bg-ocean-light flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                info@andamanvibe.com
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/80">
                <div className="w-10 h-10 rounded-full bg-ocean-light flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                Port Blair, Andaman & Nicobar Islands
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-lg p-6 shadow-sm space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <textarea
              placeholder="Tell us about your trip plans..."
              rows={4}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
            />
            <Button type="submit" className="w-full bg-gradient-ocean text-primary-foreground gap-2" size="lg">
              <MessageCircle className="w-4 h-4" /> Send via WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
