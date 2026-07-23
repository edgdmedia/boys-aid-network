import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { blogPosts, impactStories } from '@/data/content';
import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';

export default function Impact() {
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
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-20">
          
          {/* Impact Stories Section */}
          <section>
            <div className="border-l-4 border-red-600 pl-4 mb-10">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-navy-800 tracking-tight">
                Impact Stories &amp; Reports
              </h2>
              <p className="text-gray-500 text-[14.5px] mt-1">
                Real results from our advocacy campaigns and bootcamps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {impactStories.map((story) => (
                <div
                  key={story.id}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-xl transition-all group"
                >
                  <div className="h-48 relative w-full select-none">
                    <Image
                      src={story.img}
                      alt={story.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute left-3.5 top-3.5 bg-red-600 text-white font-display font-bold text-[11px] uppercase tracking-wider py-1 px-3.5 rounded-full shadow">
                      {story.tag}
                    </div>
                  </div>
                  <div className="p-5.5 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                        <Calendar className="w-3.5 h-3.5 text-red-500" />
                        {story.date}
                      </div>
                      <h3 className="font-display font-bold text-[17px] text-navy-800 leading-snug hover:text-red-600 transition-colors mb-3">
                        {story.title}
                      </h3>
                      <p className="text-[14px] leading-relaxed text-gray-500 line-clamp-3 mb-5">
                        {story.body}
                      </p>
                    </div>
                    <Link
                      href={`/impact/${story.id}`}
                      className="inline-flex items-center gap-1.5 font-display font-bold text-[12px] tracking-wide text-red-600 hover:text-red-700 uppercase"
                    >
                      Read full story <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Blog Articles Section */}
          <section>
            <div className="border-l-4 border-navy-800 pl-4 mb-10">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-navy-800 tracking-tight">
                Latest Articles
              </h2>
              <p className="text-gray-500 text-[14.5px] mt-1">
                News, insights and thoughts on modern boychild development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div
                  key={post.slug}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-xl transition-all group"
                >
                  <div className="h-48 relative w-full select-none">
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute left-3.5 top-3.5 bg-navy-800 text-white font-display font-bold text-[11px] uppercase tracking-wider py-1 px-3.5 rounded-full shadow">
                      {post.tag}
                    </div>
                  </div>
                  <div className="p-5.5 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-red-500" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5 text-red-500" />
                          {post.author}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-[17px] text-navy-800 leading-snug hover:text-red-600 transition-colors mb-3">
                        {post.title}
                      </h3>
                      <p className="text-[14px] leading-relaxed text-gray-500 line-clamp-3 mb-5">
                        {post.summary}
                      </p>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 font-display font-bold text-[12px] tracking-wide text-red-600 hover:text-red-700 uppercase"
                    >
                      Read full article <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      <CTA />
    </div>
  );
}
