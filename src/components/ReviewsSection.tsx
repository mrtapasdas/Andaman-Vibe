import { Star } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    text: "An absolutely magical experience! The beaches were stunning and the scuba diving was the highlight of our trip. Andamanvibe made everything seamless.",
  },
  {
    name: "Rahul Mehta",
    location: "Mumbai",
    rating: 5,
    text: "Best vacation we've ever had. The Havelock package was perfectly planned. Our guide was knowledgeable and the stay was comfortable. Highly recommended!",
  },
  {
    name: "Ananya Patel",
    location: "Bangalore",
    rating: 4,
    text: "The Heritage Tour was informative and beautiful. Cellular Jail light show moved us to tears. Great value for money and wonderful hospitality.",
  },
  {
    name: "Vikram Singh",
    location: "Jaipur",
    rating: 5,
    text: "We went for our honeymoon and it was perfect. The sunset cruise was romantic, the food was great, and the team was incredibly helpful throughout.",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            What Our Travelers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-secondary rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating ? "fill-coral text-coral" : "text-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed mb-4 italic">
                "{review.text}"
              </p>
              <div>
                <p className="font-semibold text-sm text-foreground">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
