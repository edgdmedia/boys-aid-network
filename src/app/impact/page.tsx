import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { blogPosts, impactStories } from '@/data/content';
import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';

export default function Impact() {
  // Combine impact stories and blog posts into a single unified feed
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
    })),
  ];

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
          
          {/* Header section for unified feed */}
          <div className="border-l-4 border-red-600 pl-4 mb-10">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-navy-800 tracking-tight">
              Updates, Articles &amp; Impact
            </h2>
            <p className="text-gray-500 text-[14.5px] mt-1">
               grassroots campaigns, bootcamps, and insights on modern boychild development.
            </p>
          </div>

          {/* Combined Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {combinedFeed.map((item) => (
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
