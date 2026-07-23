import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { impactStories } from '@/data/content';
import PageHero from '@/components/PageHero';
import Share from '@/components/Share';
import CTA from '@/components/CTA';

interface ImpactStoryPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return impactStories.map((story) => ({
    id: story.id,
  }));
}

export default async function ImpactStoryPage({ params }: ImpactStoryPageProps) {
  const { id } = await params;
  const story = impactStories.find((s) => s.id === id);

  if (!story) {
    notFound();
  }

  // Parse paragraphs/lines from body
  const blocks = story.body.split('\n\n');

  return (
    <div className="animate-ban-fade">
      {/* Page Hero using featured image as background */}
      <PageHero
        eyebrow="Impact Story"
        title={story.title}
        subtitle="Real-world results and milestones from our grassroots work."
        img={story.img}
      />

      {/* Main Body */}
      <article className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/impact"
            className="inline-flex items-center gap-1.5 font-display font-bold text-[12px] uppercase tracking-wider text-red-600 hover:text-red-700 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Impact &amp; Blog
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-[12.5px] text-gray-500 mb-6 font-semibold">
            <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-150 text-[11.5px] text-red-600 font-bold uppercase tracking-wider">
              <Tag className="w-3.5 h-3.5" />
              {story.tag}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-red-500" />
              {story.date}
            </span>
          </div>

          {/* Featured Image */}
          <div className="relative h-64 sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg mb-10 select-none">
            <Image
              src={story.img}
              alt={story.title}
              fill
              sizes="(max-width: 1024px) 100vw, 750px"
              className="object-cover"
              priority
            />
          </div>

          {/* Social Share */}
          <Share title={story.title} />

          {/* Body Content */}
          <div className="flex flex-col gap-6 text-[16.5px] leading-relaxed text-gray-600">
            {blocks.map((block, idx) => {
              const trimmed = block.trim();
              if (!trimmed) return null;

              if (trimmed.startsWith('- ')) {
                const listItems = trimmed.split('\n');
                return (
                  <ul key={idx} className="list-disc pl-6 flex flex-col gap-2">
                    {listItems.map((item, itemIdx) => (
                      <li key={itemIdx}>{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }

              return (
                <p key={idx} className="whitespace-pre-line">
                  {trimmed}
                </p>
              );
            })}
          </div>
        </div>
      </article>

      <CTA />
    </div>
  );
}
