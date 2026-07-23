import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { blogPosts, impactStories, stats } from '@/data/content';
import { ArrowRight, Calendar, User } from 'lucide-react';
import CTA from '@/components/CTA';

export default function Impact() {
  return (
    <div className="animate-ban-fade">
      {/* Page Hero */}
      <PageHero
        eyebrow="From the Field"
        title="Impact &amp; Stories"
        subtitle="Milestones, campaigns and moments that shaped the boychild."
        img="/images/AIN114-1024x684.jpeg"
      />

      {/* Stats Counter Strip */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((s, idx) => (
              <div key={idx} className="text-center">
                <div className="font-display font-black text-3xl sm:text-4xl text-navy-800 leading-none">
                  {s.value}
                  <span className="text-red-600">{s.suffix}</span>
                </div>
                <div className="text-[12.5px] font-bold text-gray-500 uppercase tracking-widest mt-2.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column (8 cols): Impact stories & campaigns */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            <h2 className="font-display font-black text-2xl md:text-3xl text-navy-800 border-b border-gray-200 pb-4">
              Our Impact Campaigns
            </h2>
            <div className="flex flex-col gap-10">
              {impactStories.map((story) => (
                <div
                  key={story.id}
                  id={story.id}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 md:grid-cols-12 scroll-mt-24"
                >
                  <div className="relative h-56 md:h-auto md:col-span-5 select-none">
                    <Image
                      src={story.img}
                      alt={story.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-cover"
                    />
                    <div className="absolute left-3.5 top-3.5 bg-red-600 text-white font-display font-bold text-[10.5px] uppercase tracking-wider py-1 px-3.5 rounded-full shadow-sm">
                      {story.tag}
                    </div>
                  </div>
                  <div className="p-6 md:p-8 md:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-bold text-red-600 uppercase tracking-wider mb-1">
                        {story.date}
                      </div>
                      <h3 className="font-display font-extrabold text-lg sm:text-[20px] text-navy-800 leading-snug mb-3">
                        {story.title}
                      </h3>
                      <p className="text-[14.5px] leading-relaxed text-gray-600 whitespace-pre-line">
                        {story.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (4 cols): Blog feed */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <h2 className="font-display font-black text-2xl md:text-3xl text-navy-800 border-b border-gray-200 pb-4">
              Latest Blog Posts
            </h2>
            <div className="flex flex-col gap-6">
              {blogPosts.map((post) => (
                <div
                  key={post.slug}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
                >
                  <div className="h-44 relative select-none">
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5.5 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-[11.5px] text-gray-500 mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-red-600" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5 text-red-600" />
                          {post.author}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-[16.5px] text-navy-800 leading-snug mb-3">
                        {post.title}
                      </h3>
                      <p className="text-[14px] leading-relaxed text-gray-600 line-clamp-3 mb-5.5">
                        {post.summary}
                      </p>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 font-display font-bold text-[12px] tracking-wide text-red-600 hover:text-red-700 uppercase"
                    >
                      Read Article <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CTA />
    </div>
  );
}
