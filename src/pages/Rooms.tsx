import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import { Check, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import doubleBedRoom from '@/assets/doublebed.jpeg';
import fourBedRoom from '@/assets/room-4bed.jpg';
import heroRoom from '@/assets/hero-room.jpg';
import balconySunset from '@/assets/balcony.jpg';
import balcony2 from '@/assets/balcony2.jpg';
import room1 from '@/assets/room1.jpeg';
import room2 from '@/assets/room2.jpeg';
import dinning from '@/assets/dinning.jpg';

const rooms = [
  {
    id: 'deluxe-sea-facing-double',
    name: 'Deluxe Sea-Facing Double Room',
    badge: 'Most Popular',
    description: 'Wake up to panoramic views of the Bay of Bengal with your own private sea-facing balcony and dedicated kitchenette.',
    images: [doubleBedRoom, balcony2],
    features: [
      'Direct Bay of Bengal View',
      'Private Sea-Facing Balcony',
      'Air Conditioning',
      'Equipped Kitchenette',
      'Hot Water Geyser',
      'High-Speed Wi-Fi',
      'Daily Housekeeping',
      'Attached Clean Washroom',
    ],
    rates: [
      { guests: 1, price: '₹3,455' },
      { guests: 2, price: '₹4,085' },
    ],
  },
  {
    id: 'four-bed-family-room',
    name: 'Four Bed Executive Family Room',
    badge: 'Family Favorite',
    description: 'Generously spaced multi-bed suite ideal for families or group travelers seeking comfort, kitchen access, and coastal scenery.',
    images: [fourBedRoom, balconySunset],
    features: [
      'Spacious Multi-Bed Layout',
      'Direct Ocean & Sunrise View',
      'Dining & Kitchen Access',
      'Private Panoramic Balcony',
      'Air Conditioning',
      'Family Friendly Ambience',
      'High-Speed Wi-Fi',
      'Complimentary Secure Parking',
    ],
    rates: [
      { guests: 2, price: '₹4,085' },
      { guests: 3, price: '₹4,715' },
      { guests: 4, price: '₹5,345' },
    ],
  },
  {
    id: 'premium-ocean-view-suite',
    name: 'Premium Ocean View Balcony Suite',
    badge: 'Luxury View',
    description: 'Elevated luxury accommodation featuring expansive ocean vistas, elegant seaside decor, and premium amenities.',
    images: [heroRoom, room2],
    features: [
      'Unobstructed Oceanfront Horizon',
      'Large Sit-out Balcony',
      'Air Conditioning & Ceiling Fan',
      'Modular Kitchenette Access',
      'Geyser & Modern Bath Amenities',
      'Tea / Coffee Dining Setup',
      'Free High-Speed Wi-Fi',
      '24/7 Room Assistance',
    ],
    rates: [
      { guests: 1, price: '₹3,850' },
      { guests: 2, price: '₹4,480' },
    ],
  },
  {
    id: 'classic-sea-breeze-room',
    name: 'Classic Sea Breeze Double Room',
    badge: 'Great Value',
    description: 'Comfortable, serene, and well-appointed room offering refreshing sea breezes and quick walking access to Swargadwar beach.',
    images: [room1, dinning],
    features: [
      'Pleasant Coastal Cross-Breeze',
      'Air Conditioning',
      'Attached Bathroom with Geyser',
      'Dining Space Access',
      'Free Wi-Fi Internet',
      'Daily Clean Linens & Towels',
      'Power Backup',
      '3-Min Walk to Sea Beach',
    ],
    rates: [
      { guests: 1, price: '₹3,150' },
      { guests: 2, price: '₹3,650' },
    ],
  },
];

const Rooms = () => {
  return (
    <div className="min-h-screen">
      {/* Header Banner with high contrast ocean theme */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-ocean-deep via-primary to-ocean-medium text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in-up">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-secondary/30 text-white border border-white/20 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Accommodations
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 text-white">
              Our Luxury Rooms
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
              Choose from our elegantly designed sea-facing rooms with private balconies, kitchenette access, and panoramic Bay of Bengal views.
            </p>
          </div>
        </div>
      </section>

      {/* Rooms List */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl space-y-16">
          {rooms.map((room, index) => (
            <Card key={room.id} className="overflow-hidden border border-border/60 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in">
              <div className="grid md:grid-cols-2">
                {/* Image Gallery */}
                <div className="relative h-80 md:h-auto bg-muted">
                  <div className="grid grid-cols-2 h-full gap-2 p-3">
                    {room.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`relative overflow-hidden rounded-lg ${
                          imgIndex === 0 ? 'col-span-2 min-h-[220px]' : 'col-span-1 min-h-[140px]'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${room.name} - View ${imgIndex + 1}`}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Room Details */}
                <CardContent className="p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-secondary/15 text-secondary border border-secondary/20">
                        {room.badge}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl md:text-3xl font-bold mb-3 text-foreground">
                      {room.name}
                    </h2>

                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {room.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="font-semibold text-base mb-3 text-foreground">Features & Amenities</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {room.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                            <span className="text-sm text-foreground/90">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold text-base mb-3 text-foreground">Tariff Rates</h3>
                      <div className="space-y-2">
                        {room.rates.map((rate, rateIndex) => (
                          <div
                            key={rateIndex}
                            className="flex justify-between items-center px-4 py-2.5 bg-muted/70 rounded-lg border border-border/40"
                          >
                            <span className="text-sm font-medium">
                              {rate.guests} Guest{rate.guests > 1 ? 's' : ''}
                            </span>
                            <span className="font-bold text-secondary text-lg">
                              {rate.price} <span className="text-xs font-normal text-muted-foreground">/ night</span>
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button asChild size="lg" className="w-full mt-4 bg-primary hover:bg-primary/90 text-white font-medium">
                    <Link to={`/contact?room=${encodeURIComponent(room.name)}`}>
                      Book This Room
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Check-in/Check-out Info */}
      <section className="py-16 px-4 bg-muted/60">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 border border-border/60 shadow-md animate-fade-in bg-card">
            <div className="flex items-center justify-around gap-8 flex-wrap">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/15 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-medium text-sm text-muted-foreground">Standard Check-in</p>
                  <p className="text-2xl font-bold text-foreground">2:00 PM</p>
                </div>
              </div>

              <div className="w-px h-16 bg-border hidden md:block" />

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/15 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-medium text-sm text-muted-foreground">Standard Check-out</p>
                  <p className="text-2xl font-bold text-foreground">11:00 AM</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <SectionTitle subtitle="Ready to experience the perfect coastal getaway with private sea view balconies?">
            Book Your Stay Today
          </SectionTitle>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8">
              <Link to="/contact">Contact for Reservations</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="tel:+917980037544">Call +91 7980037544</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
