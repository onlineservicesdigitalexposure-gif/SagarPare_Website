import { useState, useEffect, useCallback } from 'react';
import SectionTitle from '@/components/SectionTitle';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import heroImage from '@/assets/story1.jpg';
import corridorImg from '@/assets/coridor.jpg';
import fourBedRoom from '@/assets/room-4bed.jpg';
import balconySunset from '@/assets/balcony.jpg';
import washroom from '@/assets/washroom.jpg';
import washroom2 from '@/assets/bathroom.jpg';
import washroom3 from '@/assets/bathroom2.jpg';
import dinning from '@/assets/dinning.jpg';
import room2 from '@/assets/room2.jpeg';
import room3 from '@/assets/room3.jpeg';
import room4 from '@/assets/room4.jpeg';
import table from '@/assets/table.jpg';
import balcony2 from '@/assets/balcony2.jpg';
import ceilling from '@/assets/ceilling.jpeg';

const images = [
  { src: heroImage, caption: 'Luxurious Sea-Facing Room' },
  { src: corridorImg, caption: 'Spacious Guest Corridor' },
  { src: fourBedRoom, caption: 'Spacious Four Bed Family Room' },
  { src: balconySunset, caption: 'Evening Sky over Bay of Bengal' },
  { src: washroom, caption: 'Modern Bathroom Amenities' },
  { src: washroom2, caption: 'Clean & Elegant Washroom' },
  { src: washroom3, caption: 'Spacious Bathroom Area' },
  { src: dinning, caption: 'Family Dining Area' },
  { src: room2, caption: 'Cozy Room with Sea View' },
  { src: room3, caption: 'Well-Furnished Guest Room' },
  { src: room4, caption: 'Bright and Airy Coastal Room' },
  { src: table, caption: 'Dining Setup & Living Comfort' },
  { src: balcony2, caption: 'Private Balcony with Wave Panorama' },
  { src: ceilling, caption: 'Decorated Room Interiors & Ceiling' },
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
  }, [selectedIndex]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext]);

  return (
    <div className="min-h-screen">
      {/* Header Banner */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-ocean-deep via-primary to-ocean-medium text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in-up">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-secondary/30 text-white border border-white/20 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Visual Tour
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 text-white">
              Photo Gallery
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
              Explore the elegance, rooms, balconies, and coastal beauty of Sagar Pare through our lens.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative h-72 rounded-xl overflow-hidden shadow-md cursor-pointer animate-fade-in hover:shadow-2xl transition-all duration-300 border border-border/50"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedIndex(index)}
                role="button"
                tabIndex={0}
                aria-label={`View ${image.caption}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedIndex(index);
                  }
                }}
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-5 w-full">
                    <p className="text-white font-medium text-base drop-shadow-md">{image.caption}</p>
                    <span className="text-xs text-secondary mt-1 inline-block">Click to enlarge</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog
        open={selectedIndex !== null}
        onOpenChange={(open) => !open && setSelectedIndex(null)}
      >
        <DialogContent className="max-w-5xl w-full p-0 bg-black/95 border-none text-white overflow-hidden">
          {/* Close button */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 z-50 text-white/80 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-6 h-6" />
          </button>

          {selectedIndex !== null && (
            <div className="relative flex flex-col items-center justify-center min-h-[50vh] max-h-[85vh] p-2">
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].caption}
                className="w-auto h-auto max-h-[75vh] max-w-full object-contain mx-auto rounded"
              />

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Caption and counter bar */}
              <div className="w-full bg-gradient-to-t from-black/90 to-transparent pt-4 pb-3 px-6 text-center">
                <p className="text-white text-base md:text-lg font-medium">
                  {images[selectedIndex].caption}
                </p>
                <p className="text-xs text-white/60 mt-1">
                  {selectedIndex + 1} of {images.length}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Additional Info */}
      <section className="py-20 px-4 bg-muted/60">
        <div className="container mx-auto max-w-4xl text-center">
          <SectionTitle subtitle="Experience the authentic serenity and luxury of Puri's coastline">
            See It to Believe It
          </SectionTitle>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every sunrise in Puri brings fresh colours and gentle waves. From comfortable air-conditioned suites to breezy balconies overlooking the sea, Sagar Pare is ready to welcome you.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
