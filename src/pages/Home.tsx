import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import { ArrowRight, Waves, UtensilsCrossed, Bed, Sun, Coffee, Wind, Wifi, Car, Star } from 'lucide-react';
import heroImage from '@/assets/hero-room.jpg';
import aboutImage from '@/assets/about.jpg';
import room1 from '@/assets/room1.jpeg';
import room2 from '@/assets/room2.jpeg';

const Home = () => {
  const facilities = [
    { icon: Waves, text: 'Sea-Facing Rooms' },
    { icon: UtensilsCrossed, text: 'Kitchen Access' },
    { icon: Bed, text: 'Double & Four Bed Options' },
    { icon: Sun, text: 'Personal Balcony' },
    { icon: Coffee, text: 'Dining Area' },
    { icon: Wind, text: 'Laundry Service' },
    { icon: Car, text: 'Free Parking' },
    { icon: Wifi, text: 'Free Wi-Fi' },
  ];

  const testimonials = [
    {
      name: 'Supratim Haldar',
      rating: 4,
      text: 'The hotel is off the Marine Drive, just a short distance from the beach. Reasonably priced, rooms are moderately comfortable.'
    },
    {
      name: 'Anindya Banerjee',
      rating: 3,
      text: 'Fabulous room with a fantastic sea view from a wide balcony. Great location for beach lovers.'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center parallax"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0" style={{ background: 'var(--hero-overlay)' }} />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            Wake up to the sound of waves
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Experience comfort, calm, and class at Sagar Pare, Puri
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-semibold">
              <Link to="/contact">
                Book Now <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/80 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary font-medium">
              <Link to="/rooms">View Rooms</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-wave">
          <Waves className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-display text-4xl font-bold mb-6">
                Your Peaceful Retreat by the Bay
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A 3-minute walk from Swargadwar Sea Beach, Sagar Pare offers peaceful stays with stunning sea views, modern comfort, and unmatched convenience. Perfect for families, couples, and solo travelers seeking the serenity of the Bay of Bengal.
              </p>
              <Button asChild variant="outline">
                <Link to="/about">
                  Learn More <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl animate-fade-in border border-border/40">
              <img
                src={aboutImage}
                alt="Sagar Pare sea view"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle subtitle="Choose from our comfortable, sea-facing accommodations">
            Our Rooms
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 animate-fade-in border border-border/50">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room1}
                  alt="Double Bed Room"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-display text-2xl font-semibold mb-3">Double Bed Room</h3>
                <p className="text-muted-foreground mb-4">
                  AC, Sea View, Private Balcony, Kitchenette, Geyser
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-secondary">From ₹3,455</span>
                  <Button asChild>
                    <Link to="/rooms">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 animate-fade-in border border-border/50">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room2}
                  alt="Four Bed Family Room"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-display text-2xl font-semibold mb-3">Four Bed Family Room</h3>
                <p className="text-muted-foreground mb-4">
                  Spacious, Sea Facing, Dining & Kitchen Access, Balcony
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-secondary">From ₹4,085</span>
                  <Button asChild>
                    <Link to="/rooms">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle subtitle="Everything you need for a comfortable stay">
            Our Facilities
          </SectionTitle>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <facility.icon className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <p className="font-medium">{facility.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 px-4 bg-muted/60 border-y border-border/40">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle subtitle="What our guests say about their experience">
            Guest Reviews
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 animate-fade-in border border-border/50 bg-card">
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
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/testimonial">
                Read More Reviews <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle subtitle="Find us on New Marine Drive Road, Puri">
            Location
          </SectionTitle>

          <div className="rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.121953254803!2d85.8138984!3d19.792426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19c431ebd74f4b%3A0xcd2bcd7701773ffd!2sSagar%20Pare!5e0!3m2!1sen!2sin!4v1761802411855!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Sagar Pare Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
