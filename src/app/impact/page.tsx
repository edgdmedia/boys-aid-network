'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { blogPosts, impactStories } from '@/data/content';
import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';

// Helper to parse date strings for sorting
const parseDate = (dateStr: string) => {
  if (dateStr === 'Active' || !dateStr) return new Date('2026-07-23').getTime();
  const parsed = Date.parse(dateStr);
  if (!isNaN(parsed)) return parsed;

  // Custom parser for "Month Year" format e.g. "June 2022"
  const parts = dateStr.split(' ');
  if (parts.length === 2) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthIdx = months.indexOf(parts[0]);
    if (monthIdx !== -1) {
      return new Date(parseInt(parts[1]), monthIdx, 1).getTime();
    }
  }
  return 0;
};

export default function Impact() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'impact' | 'blog'>('all');

  // Combine and sort feed by date (newest first)
  const combinedFeed = [
    ...impactStories.map((story) => ({
      id: story.id,
      title: story.title,
      img: story.img,
      tag: story.tag, // "Impact"
      tagColorClass: 'bg-red-600',
      date: story.date,
      body: story.body,
      link: `/impact/${story.id}`,
      actionText: 'Read full story',
      type: 'impact',
    })),
    ...blogPosts.map((post) => ({
      id: post.slug,
      title: post.title,
      img: post.img,
      tag: post.tag, // "Blog"
      tagColorClass: 'bg-navy-800',
      date: post.date,
      body: post.summary,
      link: `/blog/${post.slug}`,
      actionText: 'Read full article',
      type: 'blog',
    })),
  ].sort((a, b) => parseDate(b.date) - parseDate(a.date));

  // Filter feed items
  const filteredFeed = combinedFeed.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.type === activeFilter;
  });

  return (
    <div className="animate-ban-fade">
      {/* Page Hero */}
      <PageHero
        eyebrow="Our Footprint"
        title="Impact &amp; Blog"
        subtitle="Stories, articles, and milestones of standing with the boychild."
        img="/images/AIN60-1-1024x684.jpeg"
      />

      {/* Main Container */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Unified Filter Pills */}
          <div className="flex flex-wrap items-center gap-3.5 mb-12 justify-center sm:justify-start">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-5.5 py-2.5 rounded-xl font-display font-bold text-[12.5px] uppercase tracking-wider transition-all border cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-navy-800 text-white border-navy-800 shadow-md scale-[1.02]'
                  : 'bg-gray-50 hover:bg-gray-100 text-navy-800 border-gray-200'
              }`}
            >
              All Updates
            </button>
            <button
              onClick={() => setActiveFilter('impact')}
              className={`px-5.5 py-2.5 rounded-xl font-display font-bold text-[12.5px] uppercase tracking-wider transition-all border cursor-pointer ${
                activeFilter === 'impact'
                  ? 'bg-red-600 text-white border-red-600 shadow-md scale-[1.02]'
                  : 'bg-gray-50 hover:bg-gray-100 text-navy-800 border-gray-200'
              }`}
            >
              Impact Stories
            </button>
            <button
              onClick={() => setActiveFilter('blog')}
              className={`px-5.5 py-2.5 rounded-xl font-display font-bold text-[12.5px] uppercase tracking-wider transition-all border cursor-pointer ${
                activeFilter === 'blog'
                  ? 'bg-navy-800 text-white border-navy-800 shadow-md scale-[1.02]'
                  : 'bg-gray-50 hover:bg-gray-100 text-navy-800 border-gray-200'
              }`}
            >
              Articles
            </button>
          </div>

          {/* Grid Feed */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFeed.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-xl transition-all group"
              >
                <div className="h-48 relative w-full select-none">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className={`absolute left-3.5 top-3.5 text-white font-display font-bold text-[11px] uppercase tracking-wider py-1 px-3.5 rounded-full shadow ${item.tagColorClass}`}>
                    {item.tag}
                  </div>
                </div>
                <div className="p-5.5 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11.5px] font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                      <Calendar className="w-3.5 h-3.5 text-red-500" />
                      {item.date}
                    </div>
                    <h3 className="font-display font-bold text-[17px] text-navy-800 leading-snug hover:text-red-600 transition-colors mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[14.5px] leading-relaxed text-gray-500 line-clamp-3 mb-5">
                      {item.body}
                    </p>
                  </div>
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 font-display font-bold text-[12px] tracking-wide text-red-600 hover:text-red-700 uppercase"
                  >
                    {item.actionText} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <CTA />
    </div>
  );
}
