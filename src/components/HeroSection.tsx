import heroImg from "@/assets/hero-andaman.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToPackages = () => {
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Aerial view of Andaman Islands turquoise beach"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/30 to-foreground/70" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="text-primary-foreground/80 font-body text-sm tracking-[0.3em] uppercase mb-4 animate-fade-up">
          Welcome to Paradise
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          Explore the Andaman <br className="hidden md:block" /> Islands
        </h1>
        <p className="text-primary-foreground/80 font-body max-w-xl mx-auto text-base md:text-lg mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Crystal clear waters, pristine beaches, and adventures that last a lifetime. Book your dream Andaman trip today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.45s" }}>
          <Button size="lg" className="bg-gradient-ocean text-primary-foreground text-base px-8" onClick={scrollToPackages}>
            View Packages
          </Button>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 w-full sm:w-auto">
              WhatsApp Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
