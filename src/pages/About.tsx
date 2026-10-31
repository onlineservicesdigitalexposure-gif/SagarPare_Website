import { Card } from '@/components/ui/card';
import SectionTitle from '@/components/SectionTitle';
import { MapPin, Heart, Award, Users, Sparkles, Compass } from 'lucide-react';
import aboutImg from '@/assets/about.jpg';
import storyImg from '@/assets/story1.jpg';
import doubleBedRoom from '@/assets/doublebed.jpeg';
import fourBedRoom from '@/assets/dinning.jpg';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Header Banner */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-ocean-deep via-primary to-ocean-medium text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in-up">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-secondary/30 text-white border border-white/20 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Coastal Heritage
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 text-white">
              About Sagar Pare
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
              Your peaceful coastal retreat and home away from home by the Bay of Bengal, Puri.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Heritage</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-6 text-foreground">
                A Haven of Peace by the Bay of Bengal
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Located just a short 3-minute stroll from the pristine Swargadwar Sea Beach, <strong>Sagar Pare</strong> offers a unique blend of serene tranquility and seaside charm in the heart of Puri.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Nestled on New Marine Drive Road, our property provides guests with an authentic coastal experience. Whether you are traveling with family, planning a romantic holiday by the ocean, or taking a refreshing solo vacation, Sagar Pare surrounds you with cool sea breezes and spectacular sunrise views over the Bay of Bengal.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With fully equipped kitchenettes, private sea-view balconies, and cordial hospitality, we strive to make every moment of your Puri stay relaxing, memorable, and filled with warmth.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl animate-fade-in border border-border/40">
              <img
                src={aboutImg}
                alt="Sagar Pare coastal view"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Image Collage */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 animate-fade-in">
            {[storyImg, doubleBedRoom, fourBedRoom].map((image, index) => (
              <div
                key={index}
                className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-border/40 group"
              >
                <img
                  src={image}
                  alt={`Sagar Pare accommodation ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-4 bg-muted/60">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle subtitle="The hospitality values that define every guest experience at Sagar Pare">
            Our Core Values
          </SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: 'Guest Comfort First',
                description: 'Personalized care, hygienic rooms, and attentive service to make you feel right at home.',
              },
              {
                icon: MapPin,
                title: 'Prime Marine Drive Location',
                description: 'Steps away from Swargadwar Beach with uninterrupted ocean breezes and sunrise vistas.',
              },
              {
                icon: Award,
                title: 'Honest & Transparent Tariff',
                description: 'Clear pricing with no hidden charges, delivering great value for couples and families.',
              },
              {
                icon: Users,
                title: 'Family & Group Friendly',
                description: 'Spacious four-bed family suites and kitchen facilities designed for family vacations.',
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-xl transition-all duration-300 animate-fade-in border border-border/60 bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary/15 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 md:p-10 border border-border/60 shadow-lg animate-fade-in bg-card">
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-1 text-secondary font-semibold text-sm uppercase tracking-wider mb-2">
                <Compass className="w-4 h-4" /> Strategic Destination
              </span>
              <h2 className="font-display text-3xl font-bold text-foreground">Location & Accessibility</h2>
              <p className="text-muted-foreground mt-2">
                Discover the best of Puri right at your doorstep
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1 text-foreground">Our Address</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    New Marine Drive Road<br />
                    Puri, Odisha 752001<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0 mt-1">
                  <Compass className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1 text-foreground">Nearby Highlights</h3>
                  <ul className="text-muted-foreground text-sm space-y-1.5">
                    <li>• Swargadwar Sea Beach — 3 mins walk</li>
                    <li>• Puri Golden Beach — 5 mins walk</li>
                    <li>• Jagannath Temple — 2 km (~10 mins)</li>
                    <li>• New Marine Drive — Direct road access</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
