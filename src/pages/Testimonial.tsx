import SectionTitle from '@/components/SectionTitle';
import { Card } from '@/components/ui/card';
import { Star, Sparkles, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: 'Supratim Haldar',
    rating: 5,
    text: 'The hotel is off the Marine Drive, just a short distance from the beach. Reasonably priced, rooms are comfortable, and the sea view from the balcony is absolutely breathtaking, especially during sunrise.',
    date: 'December 2024',
  },
  {
    name: 'Anindya Banerjee',
    rating: 4,
    text: 'Fabulous room with a fantastic sea view from a wide balcony. The location is peaceful and convenient for beach lovers. Steps away from Swargadwar.',
    date: 'November 2024',
  },
  {
    name: 'Priya Sharma',
    rating: 5,
    text: 'Wonderful experience at Sagar Pare! The staff was courteous, rooms were clean and comfortable. The sea-facing balcony made our mornings special. Would definitely recommend for families visiting Puri.',
    date: 'October 2024',
  },
  {
    name: 'Rajesh Kumar',
    rating: 5,
    text: 'Good value for money. The kitchen facility was very helpful as we could cook our own meals. The beach is just a short walk away. Overall, a pleasant stay with beautiful ocean views.',
    date: 'September 2024',
  },
  {
    name: 'Sneha Patel',
    rating: 5,
    text: 'Amazing location! Waking up to the sound of waves was magical. The four bed room was spacious and perfect for our family. Kids loved being so close to the beach. Will visit again!',
    date: 'August 2024',
  },
  {
    name: 'Amit Das',
    rating: 4,
    text: 'Peaceful stay with stunning sea views. The rooms are well-maintained and the balcony is perfect for evening relaxation. Wi-Fi was reliable and parking was convenient. Great spot for a beach vacation.',
    date: 'July 2024',
  },
];

const Testimonial = () => {
  return (
    <div className="min-h-screen">
      {/* Header Banner */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-ocean-deep via-primary to-ocean-medium text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in-up">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-secondary/30 text-white border border-white/20 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Guest Experiences
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 text-white">
              Guest Testimonials
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
              Read what our beloved guests have to say about their coastal stays at Sagar Pare.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-background border-b border-border/40">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in p-6 rounded-2xl bg-muted/40 border border-border/50">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">4.6 / 5</div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-muted-foreground font-medium text-sm">Average Guest Rating</p>
            </div>
            <div className="animate-fade-in p-6 rounded-2xl bg-muted/40 border border-border/50" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">1,000+</div>
              <p className="font-semibold text-foreground mt-3">Delighted Guests</p>
              <p className="text-muted-foreground text-xs mt-1">Families, couples & pilgrims</p>
            </div>
            <div className="animate-fade-in p-6 rounded-2xl bg-muted/40 border border-border/50" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">98%</div>
              <p className="font-semibold text-foreground mt-3">Recommendation Rate</p>
              <p className="text-muted-foreground text-xs mt-1">Based on guest feedback</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4 bg-muted/40">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 animate-fade-in border border-border/60 bg-card relative overflow-hidden"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <Quote className="absolute right-4 bottom-4 w-16 h-16 text-muted/40 -z-0 pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? 'fill-accent text-accent'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-foreground/90 mb-6 italic leading-relaxed text-base">
                    "{testimonial.text}"
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-border/40">
                    <div>
                      <p className="font-semibold text-lg text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                    </div>
                    <span className="text-xs text-secondary font-medium px-2.5 py-1 bg-secondary/10 rounded-full">
                      Verified Guest
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <SectionTitle subtitle="Join hundreds of satisfied travelers who have experienced the magic of Sagar Pare">
            Create Your Own Story
          </SectionTitle>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Book your stay today and experience the perfect blend of seaside serenity, clean comfort, and breathtaking Bay of Bengal sunrises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-semibold">
              <Link to="/contact">Book Your Stay Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/rooms">Explore Our Rooms</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
