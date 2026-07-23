import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { programs } from '@/data/content';
import PageHero from '@/components/PageHero';
import Share from '@/components/Share';
import CTA from '@/components/CTA';

interface ProgramPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return programs.map((prog) => ({
    id: prog.id,
  }));
}

export default async function ProgramPage({ params }: ProgramPageProps) {
  const { id } = await params;
  const prog = programs.find((p) => p.id === id);

  if (!prog) {
    notFound();
  }

  // Parse paragraphs/lines from fullBody or body
  const textContent = prog.fullBody || prog.body;
  const blocks = textContent.split('\n\n');

  return (
    <div className="animate-ban-fade">
      {/* Page Hero with Back Link inside the banner */}
      <PageHero
        eyebrow="Initiative Details"
        title={prog.title}
        subtitle="Empowering boys through targeted action and community support."
        img={prog.img}
        backLink="/programs"
        backText="All Programs"
      />

      {/* Main Body */}
      <article className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-10 lg:gap-14 items-start md:items-center">
            
            {/* Left Column: Featured Image */}
            <div className="w-full md:w-5/12 select-none shrink-0">
              <div className="relative h-64 sm:h-80 md:h-[420px] w-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={prog.img}
                  alt={prog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right Column: Descriptions & CTAs */}
            <div className="w-full md:w-7/12 flex flex-col items-start">
              {/* Content Paragraphs */}
              <div className="flex flex-col gap-6 text-[16px] sm:text-[17px] leading-relaxed text-gray-600">
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
                <Share title={prog.title} />
              </div>

              {/* Bottom Back Navigation */}
              <Link
                href="/programs"
                className="inline-flex items-center gap-1.5 font-display font-bold text-[12px] uppercase tracking-wider text-red-600 hover:text-red-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to All Programs
              </Link>
            </div>

          </div>
        </div>
      </article>

      <CTA />
    </div>
  );
}
