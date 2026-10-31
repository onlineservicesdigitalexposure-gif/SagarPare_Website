// components/FloatingContactButtons.tsx
import { Phone, MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const FloatingContactButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919830852640', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+917980037544', '_blank');
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-16 right-6 z-50 flex flex-col items-end space-y-3">
      {/* Expanded Buttons */}
      {isExpanded && (
        <div className="space-y-3 animate-in fade-in-0 zoom-in-95 duration-200">
          {/* WhatsApp Button */}
          <Button
            onClick={handleWhatsAppClick}
            aria-label="Chat with us on WhatsApp at 9830852640"
            className={cn(
              "h-14 px-6 rounded-full shadow-lg",
              "bg-green-500 hover:bg-green-600 text-white",
              "flex items-center gap-3",
              "animate-in slide-in-from-right-4 duration-300"
            )}
            size="lg"
          >
            <MessageCircle className="w-5 h-5" />
            <div className="text-left">
              <div className="text-sm font-semibold">WhatsApp</div>
              <div className="text-xs opacity-90">9830852640</div>
            </div>
          </Button>

          {/* Call Button */}
          <Button
            onClick={handleCallClick}
            aria-label="Call hotel at 7980037544"
            className={cn(
              "h-14 px-6 rounded-full shadow-lg",
              "bg-blue-600 hover:bg-blue-700 text-white",
              "flex items-center gap-3",
              "animate-in slide-in-from-right-4 duration-300 delay-100"
            )}
            size="lg"
          >
            <Phone className="w-5 h-5" />
            <div className="text-left">
              <div className="text-sm font-semibold">Call Now</div>
              <div className="text-xs opacity-90">7980037544</div>
            </div>
          </Button>
        </div>
      )}

      {/* Main Floating Button */}
      <div className="flex items-center gap-2">
        {/* Close Button */}
        {isExpanded && (
          <Button
            onClick={handleClose}
            variant="outline"
            size="icon"
            aria-label="Hide floating buttons"
            className={cn(
              "h-12 w-12 rounded-full shadow-lg bg-white hover:bg-gray-50",
              "animate-in fade-in-0 duration-200"
            )}
          >
            <X className="w-4 h-4 text-foreground" />
          </Button>
        )}

        {/* Toggle Button */}
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? "Close quick contact menu" : "Open quick contact options"}
          className={cn(
            "h-14 w-14 rounded-full shadow-lg relative",
            "bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white",
            "transition-all duration-300"
          )}
          size="lg"
        >
          {!isExpanded ? (
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 absolute animate-pulse" />
              <MessageCircle className="w-4 h-4 absolute -bottom-1 -right-1 bg-white text-green-600 rounded-full p-0.5" />
            </div>
          ) : (
            <X className="w-6 h-6 transition-transform duration-300" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default FloatingContactButtons;