import { Card, CardContent } from '@/components/ui/card';
import {
  Waves,
  UtensilsCrossed,
  Sun,
  Bed,
  Wind,
  Car,
  Wifi,
  Baby,
  Coffee,
  Sparkles,
} from 'lucide-react';

const facilities = [
  {
    icon: Waves,
    title: 'Sea-Facing Rooms',
    description:
      'Wake up to breathtaking views of the Bay of Bengal from your room. Every window and private balcony frames the endless ocean horizon.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Kitchen & Kitchenette Access',
    description:
      'Fully equipped kitchenette space with modern appliances. Prepare your favorite home-style meals with fresh local ingredients.',
  },
  {
    icon: Sun,
    title: 'Private Ocean Balcony',
    description:
      'Your personal outdoor space to enjoy morning tea, breathtaking sunrise views, and the soothing sound of coastal waves.',
  },
  {
    icon: Bed,
    title: 'Double & Four Bed Options',
    description:
      'Choose from cozy double bed rooms for couples or spacious four bed family rooms for groups, all furnished with plush bedding.',
  },
  {
    icon: Wind,
    title: 'Air Conditioning & Laundry',
    description:
      'Climate-controlled rooms for ultimate comfort along with reliable laundry services to keep your wardrobe fresh throughout your stay.',
  },
  {
    icon: Car,
    title: 'Free Secure Parking',
    description:
      'Complimentary on-site parking space for your car or two-wheeler, giving you total peace of mind during your coastal getaway.',
  },
  {
    icon: Wifi,
    title: 'High-Speed Wi-Fi',
    description:
      'Fast, reliable internet connectivity throughout the premises for seamless browsing, streaming, and staying connected.',
  },
  {
    icon: Baby,
    title: 'Family & Child Friendly',
    description:
      'Welcoming family environment with safe corridors, wide room spaces, and attentive staff catering to guests of all generations.',
  },
  {
    icon: Coffee,
    title: 'Dining Area',
    description:
      'Comfortable dining space setup where you can share leisurely meals together with family and traveling companions.',
  },
  {
    icon: Sparkles,
    title: '3-Min Beach Access',
    description:
      'Just a 3-minute stroll to Swargadwar Sea Beach. Step right out onto Puri’s golden sands and azure waters whenever you wish.',
  },
];

const Facilities = () => {
  return (
    <div className="min-h-screen">
      {/* Header Banner */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-ocean-deep via-primary to-ocean-medium text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in-up">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-secondary/30 text-white border border-white/20 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Hospitality & Comfort
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 text-white">
              Our Facilities & Amenities
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
              Everything you need for an unforgettable coastal getaway by the Bay of Bengal in Puri.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 border border-border/60 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/15 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    <facility.icon className="w-8 h-8 text-secondary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h2 className="font-display text-xl font-bold mb-3 text-foreground">
                    {facility.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Highlights */}
      <section className="py-20 px-4 bg-muted/60">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center animate-fade-in">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
              More Than Just a Stay
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
              At Sagar Pare, we believe in providing not just accommodation, but a peaceful seaside home. Our facilities are curated to ensure complete ease, hygiene, and warmth throughout your Puri holiday.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-8 bg-card rounded-xl border border-border/60 shadow-sm">
                <p className="text-4xl font-bold text-secondary mb-2">24/7</p>
                <p className="font-semibold text-foreground">Guest Assistance</p>
                <p className="text-xs text-muted-foreground mt-1">Dedicated hospitality on call</p>
              </div>
              <div className="p-8 bg-card rounded-xl border border-border/60 shadow-sm">
                <p className="text-4xl font-bold text-secondary mb-2">3 Min</p>
                <p className="font-semibold text-foreground">Walk to Sea Beach</p>
                <p className="text-xs text-muted-foreground mt-1">Direct path to Swargadwar</p>
              </div>
              <div className="p-8 bg-card rounded-xl border border-border/60 shadow-sm">
                <p className="text-4xl font-bold text-secondary mb-2">100%</p>
                <p className="font-semibold text-foreground">Sea View Experience</p>
                <p className="text-xs text-muted-foreground mt-1">Unmatched ocean atmosphere</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
