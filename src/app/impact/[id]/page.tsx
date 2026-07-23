import Image from 'next/image';
import Link from 'next/navigation';
import { notFound } from 'next/navigation';
import { Calendar, Tag } from 'lucide-react';
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
      {/* Centralized Page Hero with metadata inside the banner */}
      <PageHero
        eyebrow="Impact Story"
        title={story.title}
        subtitle="Real-world results and milestones from our grassroots work."
        img={story.img}
        backLink="/impact"
        backText="All Updates"
      >
        <div className="flex items-center justify-center gap-4 text-[13px] text-white/75 mt-3.5 font-semibold">
          <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-lg text-[11px] text-white font-bold uppercase tracking-wider border border-white/10">
            <Tag className="w-3.5 h-3.5 text-red-500" />
            {story.tag}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-red-500" />
            {story.date}
          </span>
        </div>
      </PageHero>

      {/* Main Body */}
      <article className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
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

          {/* Body Content */}
          <div className="flex flex-col gap-6 text-[16.5px] leading-relaxed text-gray-600 mb-8">
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

          {/* Social Share Widget positioned after the content */}
          <div className="w-full mt-6">
            <Share title={story.title} />
          </div>
        </div>
      </article>

      <CTA />
    </div>
  );
}
