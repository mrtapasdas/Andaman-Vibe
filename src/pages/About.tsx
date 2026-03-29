import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import aboutImg from "@/assets/about-andaman.jpg";
import { Shield, Heart, Users, Award } from "lucide-react";

const values = [
  { icon: Shield, title: "Trust & Safety", desc: "Licensed and government-approved tour operators with 10+ years of experience." },
  { icon: Heart, title: "Passion for Travel", desc: "We love the Andamans as much as you will. Every trip is crafted with care." },
  { icon: Users, title: "Personalized Service", desc: "Custom itineraries tailored to your preferences, budget, and group size." },
  { icon: Award, title: "Best Price Guarantee", desc: "Competitive pricing with no hidden costs. Best value for your Andaman trip." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <img src={aboutImg} alt="Andaman sunset" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1200} height={800} />
          <div className="absolute inset-0 bg-foreground/50" />
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-3">About Us</h1>
            <p className="text-primary-foreground/80 text-base">Your trusted Andaman travel partner since 2015</p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-2">Our Story</p>
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Andamanvibe.com was born out of a deep love for the Andaman Islands. Founded in 2015 by a team of local travel enthusiasts, we set out to share the magic of these islands with travelers from across India and the world.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Over the years, we've helped thousands of families, couples, and solo travelers create unforgettable memories. From pristine beaches and vibrant coral reefs to historic landmarks and thrilling water sports, we curate every trip to perfection.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-2">Why Choose Us</p>
              <h2 className="text-3xl font-display font-bold text-foreground">Our Values</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {values.map((v) => (
                <div key={v.title} className="bg-card rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-ocean-light flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
