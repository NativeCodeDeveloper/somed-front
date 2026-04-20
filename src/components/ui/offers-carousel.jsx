'use client';

import * as React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// Sub-component: individual item card
const ItemCard = ({ item }) => (
  <motion.div
    className="group w-64 flex-shrink-0"
    whileHover={{ y: -5 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white text-slate-800 shadow-sm">
      <div className="relative">
        <img
          src={item.imageUrl}
          alt={item.title}
          width={256}
          height={160}
          className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = item.fallbackUrl || '/ac3.png';
          }}
        />
        {item.badge && (
          <div
            className="absolute bottom-2 right-2 rounded-full px-3 py-1 text-xs font-semibold text-white"
            style={{ backgroundColor: '#4DBFBF' }}
          >
            {item.badge}
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold leading-snug text-slate-900 line-clamp-2">
            {item.title}
          </h3>
          <div
            className="ml-1 flex flex-shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold text-white"
            style={{ backgroundColor: '#4DBFBF' }}
          >
            <Eye className="h-3 w-3" />
          </div>
        </div>
        {item.subtitle && (
          <p className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-2">
            {item.subtitle}
          </p>
        )}
      </div>
    </div>
  </motion.div>
);

// Main OffersCarousel component
export const OffersCarousel = React.forwardRef(
  ({ offerIcon, offerTitle, offerSubtitle, ctaText, onCtaClick, items, className }, ref) => {
    const carouselRef = React.useRef(null);
    const controls = useAnimation();
    const [isAtStart, setIsAtStart] = React.useState(true);
    const [isAtEnd, setIsAtEnd] = React.useState(false);

    const scroll = (direction) => {
      if (carouselRef.current) {
        const scrollAmount = carouselRef.current.clientWidth * 0.8;
        const newScrollLeft =
          carouselRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
        controls.start({
          x: -newScrollLeft,
          transition: { type: 'spring', stiffness: 300, damping: 30 },
        });
        carouselRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
      }
    };

    const checkScrollPosition = React.useCallback(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        setIsAtStart(scrollLeft < 10);
        setIsAtEnd(scrollWidth - scrollLeft - clientWidth < 10);
      }
    }, []);

    React.useEffect(() => {
      const currentCarousel = carouselRef.current;
      if (currentCarousel) {
        currentCarousel.addEventListener('scroll', checkScrollPosition);
        checkScrollPosition();
      }
      return () => {
        if (currentCarousel) {
          currentCarousel.removeEventListener('scroll', checkScrollPosition);
        }
      };
    }, [checkScrollPosition, items]);

    return (
      <div
        ref={ref}
        className={cn(
          'w-full rounded-3xl border border-slate-100 bg-white p-6 shadow-sm md:p-8',
          className
        )}
      >
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Left: Info Section */}
          <div className="flex flex-col items-center text-center lg:col-span-3 lg:items-start lg:text-left">
            <div className="flex items-center gap-2 mb-4">
              {offerIcon || (
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ backgroundColor: '#e8f9f9' }}
                >
                  <Eye className="h-5 w-5" style={{ color: '#4DBFBF' }} />
                </div>
              )}
            </div>
            <h2 className="text-2xl font-bold text-slate-900">{offerTitle}</h2>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">{offerSubtitle}</p>
            <Button
              variant="outline"
              className="mt-6 w-full max-w-xs rounded-full font-bold lg:w-auto border-slate-200 hover:border-[#4DBFBF] hover:text-[#4DBFBF] transition-colors"
              onClick={onCtaClick}
            >
              {ctaText}
            </Button>
          </div>

          {/* Right: Carousel */}
          <div className="relative lg:col-span-9">
            <div
              ref={carouselRef}
              className="overflow-x-auto"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <motion.div className="flex gap-4 px-1 py-2" animate={controls}>
                {items.map((item, i) => (
                  <ItemCard key={item.id ?? i} item={item} />
                ))}
              </motion.div>
            </div>

            {/* Nav: Left */}
            {!isAtStart && (
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden rounded-full shadow-md md:flex border-slate-200 h-9 w-9"
                onClick={() => scroll('left')}
                aria-label="Desplazar izquierda"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            )}

            {/* Nav: Right */}
            {!isAtEnd && (
              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-10 hidden rounded-full shadow-md md:flex border-slate-200 h-9 w-9"
                onClick={() => scroll('right')}
                aria-label="Desplazar derecha"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }
);

OffersCarousel.displayName = 'OffersCarousel';
