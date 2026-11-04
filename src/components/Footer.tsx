import { Link } from 'react-router-dom';
import { Waves, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Rooms', path: '/rooms' },
  { name: 'Facilities', path: '/facilities' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Testimonials', path: '/testimonial' },
  { name: 'Contact Us', path: '/contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ocean-deep text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <Waves className="w-8 h-8 text-secondary transition-transform group-hover:scale-110" />
              <span className="font-display text-2xl font-bold">Sagar Pare</span>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed">
              Experience luxury beachfront living with stunning Bay of Bengal views. Your perfect coastal getaway in Puri awaits.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-white/80 hover:text-secondary transition-colors duration-300 inline-block py-0.5"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div className="text-white/80 text-sm space-y-1">
                  <a href="https://wa.me/919830852640" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors block">
                    +91 9830852640 (WhatsApp)
                  </a>
                  <a href="tel:+917980037544" className="hover:text-secondary transition-colors block">
                    +91 7980037544 (Call)
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <a 
                  href="mailto:pankaj61.pd@gmail.com"
                  className="text-white/80 hover:text-secondary transition-colors duration-300 text-sm"
                >
                  pankaj61.pd@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  New Marine Drive Rd,<br />Puri, Odisha 752001
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10">
              <p className="text-white/90 text-sm font-medium">
                Check-in: 8:00 AM<br />
                Check-out: 7:00 AM
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} Sagar Pare, Puri. Designed with ❤️ by{' '}
            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/80 hover:text-secondary underline-offset-4 hover:underline transition-colors duration-200"
            >
              Digital Exposure Online Services
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
