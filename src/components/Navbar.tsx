import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Rooms', path: '/rooms' },
  { name: 'Facilities', path: '/facilities' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Testimonials', path: '/testimonial' },
  { name: 'Contact Us', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <Waves className={cn(
              "w-8 h-8 transition-colors duration-300",
              isScrolled ? "text-secondary" : "text-white"
            )} />
            <span className={cn(
              "font-display text-2xl font-bold transition-colors duration-300",
              isScrolled ? "text-foreground" : "text-white"
            )}>
              Sagar Pare
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'font-medium transition-all duration-300 relative group',
                  location.pathname === item.path
                    ? isScrolled
                      ? 'text-secondary'
                      : 'text-white'
                    : isScrolled
                    ? 'text-foreground hover:text-secondary'
                    : 'text-white/90 hover:text-white'
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                  isScrolled ? "bg-secondary" : "bg-white"
                )} />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-foreground w-6 h-6' : 'text-white w-6 h-6'} />
            ) : (
              <Menu className={isScrolled ? 'text-foreground w-6 h-6' : 'text-white w-6 h-6'} />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={cn(
            "md:hidden my-2 p-5 rounded-2xl shadow-2xl backdrop-blur-xl border animate-fade-in",
            isScrolled
              ? "bg-background/95 border-border text-foreground"
              : "bg-ocean-deep/95 border-white/10 text-white"
          )}>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'font-medium transition-colors duration-200 px-4 py-2.5 rounded-lg flex items-center justify-between',
                    location.pathname === item.path
                      ? isScrolled
                        ? 'bg-secondary/15 text-secondary font-semibold'
                        : 'bg-white/15 text-secondary font-semibold'
                      : isScrolled
                      ? 'text-foreground/90 hover:bg-muted hover:text-secondary'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                  )}
                >
                  <span>{item.name}</span>
                  {location.pathname === item.path && (
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
