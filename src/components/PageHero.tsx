import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  img: string;
  backLink?: string;
  backText?: string;
}

export default function PageHero({ eyebrow, title, subtitle, img, backLink, backText }: PageHeroProps) {
  return (
    <section className="relative bg-navy-800 overflow-hidden min-h-[300px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 select-none">
        <Image
          src={img}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover object-[center_32%] opacity-25 saturate-[0.55]"
          priority
        />
      </div>

      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-800/80 to-navy-900/95" />

      {/* Content */}
      <div className="relative max-w-3xl mx-auto px-6 py-16 text-center flex flex-col items-center">
        {backLink && backText && (
          <Link
            href={backLink}
            className="inline-flex items-center gap-1.5 font-display font-bold text-[11px] uppercase tracking-widest text-red-500 hover:text-red-400 mb-6 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to {backText}
          </Link>
        )}
        <div className="font-display font-bold tracking-[0.18em] uppercase text-red-500 text-[12.5px] mb-4.5">
          {eyebrow}
        </div>
        <h1 className="text-white font-display font-black text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight max-w-2xl">
          {title}
        </h1>
        <div className="w-14 h-1 bg-red-600 rounded-full mt-5.5 mb-5.5" />
        <p className="text-white/80 font-body text-[16px] sm:text-[17.5px] leading-relaxed max-w-xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
