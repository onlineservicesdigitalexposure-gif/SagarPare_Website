import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Waves, ArrowLeft, Home, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("404 Error: Non-existent route requested:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-ocean-deep via-primary to-ocean-medium text-white px-4 py-24">
      <div className="text-center max-w-lg mx-auto animate-fade-in-up">
        <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
          <Waves className="w-10 h-10 text-secondary" />
        </div>
        <p className="text-secondary font-semibold uppercase tracking-wider text-sm mb-2">Error 404</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
          Lost at Sea?
        </h1>
        <p className="text-lg text-white/80 mb-8 leading-relaxed">
          The page you are looking for might have been moved or does not exist. Let's guide you back to calm shores.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-medium">
            <Link to="/">
              <Home className="mr-2 w-4 h-4" />
              Return Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-primary">
            <Link to="/rooms">
              View Our Rooms
            </Link>
          </Button>
          <Button asChild size="lg" variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
            <Link to="/contact">
              <Phone className="mr-2 w-4 h-4" />
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
