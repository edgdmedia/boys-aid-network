'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, ArrowRight, X, Heart, Shield, Users, GraduationCap, Scale, Megaphone } from 'lucide-react';
import { stats, programs, blogPosts, galleryImages } from '@/data/content';
import CTA from '@/components/CTA';

// Icon Map helper to map icon names from database to Lucide elements
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  HeartHandshake: Heart,
  Shield: Shield,
  Users: Users,
  GraduationCap: GraduationCap,
  Scale: Scale,
  Megaphone: Megaphone,
};

const slideshowImages = [
  '/images/AIN30-1-1024x684.jpeg',
  '/images/AIN6-1-1024x684.jpeg',
  '/images/AIN116-1024x684.jpeg',
];

export default function Home() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [slideIdx, setSlideIdx] = useState(0);

  // Background slideshow logic
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % slideshowImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="animate-ban-fade">
      {/* Hero Section */}
      <section className="relative bg-navy-800 overflow-hidden min-h-[500px] flex items-center">
        {/* Ken Burns Slideshow Background */}
        {slideshowImages.map((src, idx) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out select-none pointer-events-none ${
              idx === slideIdx ? 'opacity-30 z-0' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={src}
              alt="Slideshow Background"
              fill
              priority={idx === 0}
              className="object-cover object-center animate-kenburns"
            />
          </div>
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/85 to-navy-900/95 z-0" />

        {/* Glow decoration */}
        <div className="absolute top-[-120px] right-[-120px] w-[420px] h-[420px] rounded-full bg-radial from-red-600/35 to-transparent blur-3xl pointer-events-none z-10" />

        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
          <div className="md:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 font-display font-bold tracking-widest uppercase text-red-500 text-[12.5px] mb-5">
              <span className="w-6 h-[2px] bg-red-500 inline-block" />
              Boy Child Advocacy
            </div>
            <h1 className="text-white font-display font-black text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight">
              Empowering Boys for a <span className="text-red-500">Better Tomorrow</span>
            </h1>
            <p className="text-white/80 font-body text-[17px] sm:text-[19px] leading-relaxed max-w-lg mt-5 mb-8">
              Teaching, mentoring and helping the boychild find himself, enjoy inclusion, live a godly life, and contribute to societal development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-display font-bold text-[14px] uppercase tracking-wider shadow-md transition-all hover:scale-[1.02] cursor-pointer"
              >
                Our Programs
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-white hover:bg-white/10 text-white font-display font-bold text-[14px] uppercase tracking-wider transition-colors cursor-pointer"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* Hero Image Block */}
          <div className="md:col-span-5 relative">
            <div className="absolute inset-4 -right-4 -bottom-4 border-3 border-red-600 rounded-2xl pointer-events-none" />
            <div className="relative h-72 sm:h-96 md:h-110 w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/AIN30-1-1024x684.jpeg"
                alt="Boys at the International Boys' Day Conference"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            {/* Float badge */}
            <div className="absolute -left-4 -bottom-6 bg-white rounded-xl p-4 shadow-xl hidden sm:flex items-center gap-3.5">
              <div className="font-display font-black text-3xl md:text-[34px] text-navy-800 leading-none">
                500<span className="text-red-600">+</span>
              </div>
              <div className="text-[11.5px] font-bold text-gray-500 uppercase tracking-wider leading-snug">
                Boys
                <br />
                Reached
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center flex flex-col items-center justify-center bg-gray-50/50 border border-gray-100 rounded-xl p-5 shadow-sm">
                <div className="font-display font-black text-3xl md:text-4xl text-navy-800 leading-none">
                  {stat.value}
                  <span className="text-red-600">{stat.suffix}</span>
                </div>
                <div className="text-[13px] font-semibold text-gray-500 uppercase tracking-wider mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Blurb Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 relative">
            <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/AIN6-1-1024x684.jpeg"
                alt="Boys arriving at a Boys Aid Network event"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Overlapping small image */}
            <div className="absolute right-[-14px] bottom-[-24px] w-[46%] aspect-video rounded-xl overflow-hidden border-6 border-white shadow-xl hidden sm:block">
              <Image
                src="/images/AIN60-1-1024x684.jpeg"
                alt="Mentorship session"
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-6 flex flex-col items-start text-left">
            <div className="font-display font-bold tracking-widest uppercase text-red-600 text-[12.5px] mb-3">
              Who We Are
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-[40px] leading-tight text-navy-800 tracking-tight mb-5">
              A network standing with the boychild
            </h2>
            <p className="text-[16px] sm:text-[17px] leading-relaxed text-gray-600 mb-4">
              Boys Aid Network is a boy-child advocacy organisation based in Nigeria. We teach, mentor and help boys find themselves, enjoy inclusion, live godly lives and contribute meaningfully to society.
            </p>
            <p className="text-[16px] sm:text-[17px] leading-relaxed text-gray-600 mb-7">
              Formerly Boy-King International, we rebranded in 2025 with a renewed mission — to raise a generation of purpose-driven young men who rise beyond their limits.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-navy-800 hover:bg-navy-700 text-white font-display font-bold text-[13px] uppercase tracking-wider transition-colors cursor-pointer"
            >
              More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Video Modal Trigger Section */}
      <section className="relative bg-navy-900 overflow-hidden">
        {/* Background photo preview */}
        <div className="absolute inset-0 select-none">
          <Image
            src="/images/AIN116-1024x684.jpeg"
            alt="Mentorship"
            fill
            sizes="100vw"
            className="object-cover object-[center_35%] opacity-20 saturate-[0.6]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 to-navy-900/95" />

        <div className="relative max-w-3xl mx-auto px-6 py-24 md:py-28 text-center flex flex-col items-center z-10">
          <div className="font-display font-bold tracking-widest uppercase text-red-500 text-[12.5px] mb-4.5">
            Our Story in Motion
          </div>
          <h2 className="text-white font-display font-black text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight mb-6">
            See the movement we're building
          </h2>
          <button
            onClick={() => setVideoOpen(true)}
            aria-label="Play video"
            className="w-20 h-20 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-accent transition-transform hover:scale-108 cursor-pointer"
          >
            <Play className="w-8 h-8 fill-white ml-1" />
          </button>
          <p className="text-white/60 text-[13.5px] mt-5">
            Watch how we're empowering the boychild
          </p>
        </div>
      </section>

      {/* Programs Overview Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <div className="font-display font-bold tracking-widest uppercase text-red-600 text-[12.5px] mb-2.5">
              What We Do
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-navy-800 tracking-tight">
              Our Programs
            </h2>
            <p className="text-gray-500 text-[15.5px] sm:text-[16.5px] leading-relaxed mt-3.5">
              Six initiatives teaching, mentoring and standing with the boychild across Nigeria and Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((prog) => {
              const IconComp = iconMap[prog.iconName] || Heart;
              return (
                <div
                  key={prog.id}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md flex flex-col justify-between transition-all hover:-translate-y-1.5 hover:shadow-xl group"
                >
                  <div className="h-44 relative">
                    <Image
                      src={prog.img}
                      alt={prog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/55 to-transparent" />
                    {/* Circle Icon Badge */}
                    <div className="absolute left-5 -bottom-7 w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg border-4 border-white">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-6 pt-10 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-display font-extrabold text-[18px] sm:text-[19px] text-navy-800 leading-snug mb-3">
                        {prog.title}
                      </h3>
                      <p className="text-[14.5px] leading-relaxed text-gray-600 mb-5 line-clamp-3">
                        {prog.body}
                      </p>
                    </div>
                    <Link
                      href={`/programs/${prog.id}`}
                      className="inline-flex items-center gap-1.5 font-display font-bold text-[12.5px] tracking-wide text-red-600 hover:text-red-700 uppercase"
                    >
                      Learn more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Blog & Impact Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-5 mb-12">
            <div>
              <div className="font-display font-bold tracking-widest uppercase text-red-600 text-[12.5px] mb-2.5">
                From the Field
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-navy-800 tracking-tight">
                Blog &amp; Impact Stories
              </h2>
            </div>
            <Link
              href="/impact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-gray-300 hover:border-gray-400 text-navy-800 hover:bg-gray-50 font-display font-bold text-[13px] uppercase tracking-wider transition-colors cursor-pointer"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div className="h-44 relative">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute left-3.5 top-3.5 bg-red-600 text-white font-display font-bold text-[11px] uppercase tracking-wider py-1 px-3.5 rounded-full shadow">
                    {post.tag}
                  </div>
                </div>
                <div className="p-5.5 flex-grow">
                  <h3 className="font-display font-bold text-[17px] text-navy-800 leading-snug hover:text-red-600 transition-colors mb-2.5">
                    {post.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-gray-500 line-clamp-3">
                    {post.summary}
                  </p>
                </div>
              </Link>
            ))}

            {/* Other two cards from static stories highlights matching prototype */}
            <Link
              href="/impact/boys-against-crime-campaign"
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <div className="h-44 relative">
                <Image
                  src="/images/AIN42-1-1024x684.jpeg"
                  alt="Boys Against Crime Campaign"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute left-3.5 top-3.5 bg-red-600 text-white font-display font-bold text-[11px] uppercase tracking-wider py-1 px-3.5 rounded-full shadow">
                  Impact
                </div>
              </div>
              <div className="p-5.5 flex-grow">
                <h3 className="font-display font-bold text-[17px] text-navy-800 leading-snug hover:text-red-600 transition-colors mb-2.5">
                  The Boys Against Crime Campaign
                </h3>
                <p className="text-[14px] leading-relaxed text-gray-500 line-clamp-3">
                  Birthed in April 2022 after reports of criminal activity among young boys, educating thousands in secondary schools.
                </p>
              </div>
            </Link>

            <Link
              href="/impact/boys-bootcamp-2022"
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <div className="h-44 relative">
                <Image
                  src="/images/AIN60-1-1024x684.jpeg"
                  alt="Boys Bootcamp 2022"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute left-3.5 top-3.5 bg-red-600 text-white font-display font-bold text-[11px] uppercase tracking-wider py-1 px-3.5 rounded-full shadow">
                  Impact
                </div>
              </div>
              <div className="p-5.5 flex-grow">
                <h3 className="font-display font-bold text-[17px] text-navy-800 leading-snug hover:text-red-600 transition-colors mb-2.5">
                  Boys Bootcamp 2022
                </h3>
                <p className="text-[14px] leading-relaxed text-gray-500 line-clamp-3">
                  Boys ages 8–18 gathered for a transformative week of speaker sessions, mentorship, and positive masculinity training.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Sneak-peek Section */}
      <section className="bg-navy-800 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-5 mb-8">
            <div>
              <div className="font-display font-bold tracking-widest uppercase text-red-500 text-[12.5px] mb-2">
                Gallery
              </div>
              <h2 className="text-white font-display font-extrabold text-2xl md:text-3xl">
                Moments from the field
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-display font-bold text-[13px] uppercase tracking-wider transition-colors cursor-pointer"
            >
              Open Gallery
            </Link>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {galleryImages.slice(0, 6).map((src, i) => (
              <div key={i} className="aspect-square relative rounded-lg overflow-hidden group">
                <Image
                  src={src}
                  alt="Boys Aid Network gallery preview"
                  fill
                  sizes="(max-width: 640px) 33vw, 16vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-300 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <CTA />
    </div>

      {/* YouTube Video Modal */}
      {videoOpen && (
        <div
          onClick={() => setVideoOpen(false)}
          className="fixed inset-0 z-50 bg-navy-950/85 backdrop-blur-sm flex items-center justify-center p-6 animate-ban-fade"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl relative"
          >
            <button
              onClick={() => setVideoOpen(false)}
              aria-label="Close video"
              className="absolute -top-11 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative pt-[56.25%] rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10">
              <iframe
                src="https://www.youtube.com/embed/islKbo3Mcmg?autoplay=1&amp;rel=0"
                title="Boys Aid Network Movie"
                allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
