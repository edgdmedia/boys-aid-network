'use client';

import { useState } from 'react';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import { galleryImages } from '@/data/content';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import CTA from '@/components/CTA';

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIdx !== null) {
      setLightboxIdx((lightboxIdx - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIdx !== null) {
      setLightboxIdx((lightboxIdx + 1) % galleryImages.length);
    }
  };

  return (
    <div className="animate-ban-fade">
      {/* Page Hero */}
      <PageHero
        eyebrow="Gallery"
        title="Moments &amp; Milestones"
        subtitle="Faces of the movement — conferences, bootcamps and mentorship in action."
        img="/images/AIN116-1024x684.jpeg"
      />

      {/* Masonry-style/Multi-column Photo Grid */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
            {galleryImages.map((src, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className="break-inside-avoid relative overflow-hidden rounded-xl cursor-pointer group shadow-sm hover:shadow-md hover:scale-[1.02] transition-all select-none"
              >
                <img
                  src={src}
                  alt={`Boys Aid Network Event ${idx + 1}`}
                  className="w-full h-auto object-cover rounded-xl transition-all duration-300 group-hover:brightness-90"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />

      {/* Interactive Lightbox Overlay */}
      {lightboxIdx !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-navy-950/95 flex items-center justify-center p-6 animate-ban-fade"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation controls */}
          <button
            onClick={prevImage}
            aria-label="Previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Active Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-[85vw] max-h-[80vh] aspect-auto shadow-2xl rounded-lg overflow-hidden select-none"
          >
            <img
              src={galleryImages[lightboxIdx]}
              alt={`Boys Aid Network Fullscreen Event`}
              className="object-contain max-h-[80vh] rounded-lg"
            />
          </div>

          <button
            onClick={nextImage}
            aria-label="Next"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>
      )}
    </div>
  );
}
