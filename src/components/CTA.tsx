import Link from 'next/link';
import Image from 'next/image';

export default function CTA() {
  return (
    <section className="bg-red-600 relative overflow-hidden">
      {/* Faint Background Image Texture */}
      <div className="absolute inset-0 select-none pointer-events-none opacity-10">
        <Image
          src="/images/AIN30-1-1024x684.jpeg"
          alt="CTA background texture"
          fill
          sizes="100vw"
          className="object-cover object-center filter grayscale"
        />
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-[-80px] left-[-40px] w-72 h-72 rounded-full bg-white/5 pointer-events-none z-10" />
      <div className="absolute bottom-[-100px] right-[-30px] w-80 h-80 rounded-full bg-white/5 pointer-events-none z-10" />

      <div className="relative max-w-4xl mx-auto px-6 py-16 md:py-20 text-center z-10">
        <h2 className="text-white font-display font-black text-2xl sm:text-3xl md:text-[36px] leading-tight tracking-tight">
          Support a Boy, Shape a Future
        </h2>
        <p className="text-white/90 text-[16.5px] sm:text-[18px] mt-3.5 max-w-md mx-auto">
          Your support can transform lives. Join the movement today.
        </p>
        <div className="flex flex-wrap gap-4.5 justify-center mt-8">
          <Link
            href="/support"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white hover:bg-gray-100 text-red-600 font-display font-bold text-[14px] tracking-wider uppercase shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
          >
            Support Us
          </Link>
          <Link
            href="/support"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border-2 border-white/60 hover:border-white text-white font-display font-bold text-[14px] tracking-wider uppercase transition-colors cursor-pointer"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
}
