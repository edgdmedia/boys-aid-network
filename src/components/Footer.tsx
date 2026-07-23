'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Check } from 'lucide-react';
import { contactDetails, socialLinks, programs } from '@/data/content';


const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);


export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const footerPrograms = programs.slice(0, 5);

  return (
    <footer className="bg-navy-900 text-white/70">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Brand Bio */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <Image
            src="/images/Boys-Aid-Logo-1-White.png"
            alt="Boys Aid Network Logo"
            width={170}
            height={48}
            className="h-12 w-auto object-contain self-start"
          />
          <p className="text-[14px] leading-relaxed max-w-sm">
            Teaching, mentoring and helping boys find themselves, enjoy inclusion, live godly lives and contribute to societal development.
          </p>
          <div className="flex gap-3.5 mt-2">
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href={socialLinks.x}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Twitter / X"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Explore Links */}
        <div className="md:col-span-2">
          <h4 className="text-white font-display font-bold text-[13px] tracking-widest uppercase mb-5">
            Explore
          </h4>
          <nav className="flex flex-col gap-2.5">
            <Link href="/" className="text-[14px] hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-[14px] hover:text-white transition-colors">
              Our Story
            </Link>
            <Link href="/about/founders-note" className="text-[14px] hover:text-white transition-colors">
              Founder's Note
            </Link>
            <Link href="/programs" className="text-[14px] hover:text-white transition-colors">
              Programs
            </Link>
            <Link href="/impact" className="text-[14px] hover:text-white transition-colors">
              Impact & Blog
            </Link>
            <Link href="/gallery" className="text-[14px] hover:text-white transition-colors">
              Gallery
            </Link>
          </nav>
        </div>

        {/* Programs Shortlist */}
        <div className="md:col-span-3">
          <h4 className="text-white font-display font-bold text-[13px] tracking-widest uppercase mb-5">
            Programs
          </h4>
          <div className="flex flex-col gap-2.5">
            {footerPrograms.map((prog) => (
              <Link
                key={prog.id}
                href={`/programs#${prog.id}`}
                className="text-[13.5px] leading-snug hover:text-white transition-colors"
              >
                {prog.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact & Newsletter */}
        <div className="md:col-span-3 flex flex-col gap-5">
          <div>
            <h4 className="text-white font-display font-bold text-[13px] tracking-widest uppercase mb-4">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-2 text-[14px]">
              <a href={`mailto:${contactDetails.email}`} className="hover:text-white transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-500" />
                {contactDetails.email}
              </a>
              <a href={`tel:${contactDetails.phone}`} className="hover:text-white transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500" />
                {contactDetails.phone}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500" />
                {contactDetails.location}
              </span>
            </div>
          </div>

          <div>
            <h5 className="text-[12px] font-bold text-white/50 tracking-wider uppercase mb-3.5">
              Newsletter
            </h5>
            {subscribed ? (
              <div className="flex items-center gap-2 text-[14px] text-white bg-white/10 rounded-xl px-4 py-3 border border-white/5">
                <Check className="w-4.5 h-4.5 text-red-500 shrink-0" />
                <span>Subscribed — thank you!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-[14px] text-white outline-none placeholder:text-white/40 focus:border-red-500 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-display font-bold text-[12.5px] uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 px-6 text-center text-[12.5px] text-white/40">
        © 2026 Boys Aid Network. All Rights Reserved. · Empowering Boys for a Better Tomorrow.
      </div>
    </footer>
  );
}
