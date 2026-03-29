import havelockImg from "@/assets/package-havelock.jpg";
import neilImg from "@/assets/package-neil.jpg";
import scubaImg from "@/assets/package-scuba.jpg";
import rossImg from "@/assets/package-ross.jpg";
import { Clock, MapPin, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    title: "Havelock Island Escape",
    image: havelockImg,
    duration: "4 Nights / 5 Days",
    location: "Havelock Island",
    price: "₹14,999",
    rating: 4.9,
    groupSize: "2-8",
    highlights: ["Radhanagar Beach", "Elephant Beach Snorkeling", "Glass Bottom Boat Ride", "Sunset Cruise"],
  },
  {
    title: "Neil Island Retreat",
    image: neilImg,
    duration: "3 Nights / 4 Days",
    location: "Neil Island",
    price: "₹11,499",
    rating: 4.8,
    groupSize: "2-6",
    highlights: ["Natural Rock Bridge", "Laxmanpur Beach Sunset", "Scuba Diving", "Coral Reef Walk"],
  },
  {
    title: "Underwater Adventure",
    image: scubaImg,
    duration: "5 Nights / 6 Days",
    location: "Havelock & Neil",
    price: "₹19,999",
    rating: 5.0,
    groupSize: "2-10",
    highlights: ["Certified Scuba Diving", "Night Kayaking", "Jet Ski Ride", "Mangrove Safari"],
  },
  {
    title: "Heritage & History Tour",
    image: rossImg,
    duration: "3 Nights / 4 Days",
    location: "Port Blair & Ross Island",
    price: "₹9,999",
    rating: 4.7,
    groupSize: "2-12",
    highlights: ["Cellular Jail Light Show", "Ross Island Ruins", "Corbyn's Cove Beach", "Anthropological Museum"],
  },
];

const PackagesSection = () => {
  return (
    <section id="packages" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-2">Our Packages</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Popular Tour Packages
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {pkg.price}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {pkg.title}
                </h3>

                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {pkg.duration}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {pkg.location}</span>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  <Star className="w-4 h-4 fill-coral text-coral" />
                  <span className="text-sm font-semibold text-foreground">{pkg.rating}</span>
                  <span className="text-xs text-muted-foreground ml-1 flex items-center gap-1">
                    <Users className="w-3 h-3" /> {pkg.groupSize}
                  </span>
                </div>

                <ul className="text-xs text-muted-foreground space-y-1 mb-4">
                  {pkg.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <a href="https://wa.me/919876543210?text=Hi!%20I%20am%20interested%20in%20the%20" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-ocean text-primary-foreground" size="sm">
                    Book via WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
