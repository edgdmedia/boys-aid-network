'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setAboutOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileOpen(false);
    setAboutOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    {
      label: 'About',
      href: '#',
      submenu: [
        { label: 'Our Story', href: '/about' },
        { label: "Founder's Note", href: '/about/founders-note' },
      ],
    },
    { label: 'Programs', href: '/programs' },
    { label: 'Impact & Blog', href: '/impact' },
    { label: 'Gallery', href: '/gallery' },
  ];

  return (
    <header className={`sticky top-0 z-40 transition-colors duration-250 ${
      mobileOpen
        ? 'bg-navy-900 border-b border-white/10 text-white'
        : 'bg-white/90 backdrop-blur-md border-b border-gray-200 text-navy-800'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={mobileOpen ? "/images/Boys-Aid-Logo-1-White.png" : "/images/Boys-Aid-Logo-1-Colour.png"}
            alt="Boys Aid Network"
            width={160}
            height={44}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            if (link.submenu) {
              const isSubActive = link.submenu.some((sub) => pathname === sub.href);
              return (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setAboutOpen(!aboutOpen)}
                    onMouseEnter={() => setAboutOpen(true)}
                    className={`flex items-center gap-1 font-display font-semibold text-[14px] tracking-wide py-1.5 transition-colors cursor-pointer ${
                      isSubActive ? 'text-red-600' : 'text-navy-800 hover:text-red-600'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {aboutOpen && (
                    <div
                      onMouseLeave={() => setAboutOpen(false)}
                      className="absolute left-0 mt-1.5 w-44 bg-white border border-gray-100 rounded-lg shadow-lg py-1.5 z-50 animate-ban-fade"
                    >
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className={`block px-4 py-2 font-display text-[13px] font-semibold transition-colors hover:bg-gray-50 ${
                            pathname === sub.href ? 'text-red-600 bg-red-50/50' : 'text-navy-800 hover:text-red-600'
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`font-display font-semibold text-[14px] tracking-wide py-1.5 border-b-2 transition-all ${
                  isActive
                    ? 'text-red-600 border-red-600'
                    : 'text-navy-800 border-transparent hover:text-red-600'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/support"
            className="inline-flex items-center justify-center px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-display font-bold text-[13px] tracking-wider uppercase shadow-md transition-all hover:scale-[1.02] cursor-pointer"
          >
            Support Us
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
          className={`md:hidden inline-flex items-center justify-center w-11 h-11 border-none rounded-xl transition-colors cursor-pointer ${
            mobileOpen
              ? 'bg-white/10 text-white hover:bg-white/15'
              : 'bg-navy-50 text-navy-800 hover:bg-navy-100'
          }`}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[73px] bottom-0 z-50 bg-navy-900 flex flex-col p-6 overflow-y-auto animate-ban-fade">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              if (link.submenu) {
                return (
                  <div key={link.label} className="border-b border-white/10 pb-2">
                    <div className="font-display font-bold text-white/50 text-[12px] tracking-widest uppercase mt-4 mb-2">
                      {link.label}
                    </div>
                    <div className="flex flex-col gap-1 pl-3">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className={`font-display font-extrabold text-[20px] py-2 transition-colors ${
                            pathname === sub.href ? 'text-red-500' : 'text-white hover:text-red-500'
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-display font-extrabold text-[24px] tracking-tight py-3.5 border-b border-white/8 transition-colors ${
                    isActive ? 'text-red-500' : 'text-white hover:text-red-500'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 mb-6">
            <Link
              href="/support"
              className="flex items-center justify-center w-full py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-display font-bold text-[15px] tracking-wider uppercase text-center shadow-lg transition-transform hover:scale-[1.01]"
            >
              Support Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
