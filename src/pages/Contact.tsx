import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import SectionTitle from '@/components/SectionTitle';
import { Phone, Mail, MapPin, MessageCircle, Send, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const roomParam = searchParams.get('room');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    if (roomParam) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message || `Hello! I would like to inquire about booking the ${roomParam}. Please share availability and details.`,
      }));
    }
  }, [roomParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all required fields.');
      return;
    }

    // Format WhatsApp message cleanly
    const lines = [
      `*New Booking Inquiry - Sagar Pare, Puri*`,
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.phone ? `Phone: ${formData.phone}` : null,
      roomParam ? `Requested Room: ${roomParam}` : null,
      `Message: ${formData.message}`,
    ].filter(Boolean);

    const whatsappMessage = encodeURIComponent(lines.join('\n\n'));
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/919830852640?text=${whatsappMessage}`, '_blank');
    
    toast.success('Opening WhatsApp to send your inquiry!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Header Banner */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-ocean-deep via-primary to-ocean-medium text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in-up">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-secondary/30 text-white border border-white/20 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Direct Reservations & Inquiry
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 text-white">
              Contact Sagar Pare
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
              Reach out to us to book your room, inquire about seasonal tariffs, or ask any questions. We are here to assist you 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="animate-fade-in border border-border/60 shadow-xl bg-card">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    Send an Inquiry
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Fill out the form below to message us directly on WhatsApp for instantaneous assistance.
                  </p>
                  {roomParam && (
                    <div className="mt-3 p-3 bg-secondary/10 border border-secondary/20 rounded-lg text-xs font-medium text-secondary">
                      Inquiry for: <span className="font-semibold">{roomParam}</span>
                    </div>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name" className="text-foreground font-medium">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1.5"
                      placeholder="e.g. Ramesh Kumar"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1.5"
                      placeholder="e.g. ramesh@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-foreground font-medium">Phone / WhatsApp Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1.5"
                      placeholder="+91 9876543210"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground font-medium">Booking Requirements & Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1.5 min-h-[140px] leading-relaxed"
                      placeholder="Specify your check-in dates, number of guests, or special requirements..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>Send Inquiry via WhatsApp</span>
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in">
              <Card className="border border-border/60 shadow-lg bg-card">
                <CardContent className="p-8">
                  <h2 className="font-display text-2xl font-bold mb-6 text-foreground">
                    Contact Details
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base mb-1 text-foreground">Direct Calling & WhatsApp</h3>
                        <a
                          href="https://wa.me/919830852640"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/90 hover:text-secondary transition-colors block text-sm font-medium"
                        >
                          +91 9830852640 <span className="text-xs text-muted-foreground font-normal">(WhatsApp Available)</span>
                        </a>
                        <a
                          href="tel:+917980037544"
                          className="text-foreground/90 hover:text-secondary transition-colors block text-sm font-medium mt-1"
                        >
                          +91 7980037544 <span className="text-xs text-muted-foreground font-normal">(Direct Phone Call)</span>
                        </a>
                        <p className="text-xs text-muted-foreground mt-1">
                          Property Manager: Pankaj Datta
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base mb-1 text-foreground">Email Support</h3>
                        <a
                          href="mailto:pankaj61.pd@gmail.com"
                          className="text-foreground/90 hover:text-secondary transition-colors text-sm font-medium block"
                        >
                          pankaj61.pd@gmail.com
                        </a>
                        <p className="text-xs text-muted-foreground mt-1">
                          Inquiries replied to within 24 hours
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base mb-1 text-foreground">Hotel Address</h3>
                        <p className="text-foreground/90 text-sm leading-relaxed">
                          New Marine Drive Road<br />
                          Puri, Odisha 752001<br />
                          India (3-min walk from Swargadwar Sea Beach)
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Fast Action Card */}
              <Card className="bg-gradient-to-br from-ocean-deep to-primary text-white border-none shadow-xl">
                <CardContent className="p-8">
                  <h3 className="font-display text-xl font-bold mb-2">Need Instant Help?</h3>
                  <p className="text-sm text-white/80 mb-6 leading-relaxed">
                    Have questions regarding availability or early check-in? Speak directly with our front desk team.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white font-medium">
                      <a href="tel:+917980037544">
                        <Phone className="mr-2 w-4 h-4" />
                        Call Now
                      </a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="w-full border-white/30 text-white hover:bg-white hover:text-primary">
                      <a href="https://wa.me/919830852640" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 w-4 h-4" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-muted/50 border-t border-border/40">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle subtitle="Prime beachfront accessibility on New Marine Drive Road, Puri">
            Our Location on the Map
          </SectionTitle>

          <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/60 animate-fade-in bg-card">
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

export default Contact;
