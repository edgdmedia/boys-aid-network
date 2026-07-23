import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { blogPosts } from '@/data/content';
import Share from '@/components/Share';
import CTA from '@/components/CTA';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Parse markdown headings (#### Heading) and double newlines
  const blocks = post.content.split('\n\n');

  return (
    <div className="animate-ban-fade">
      {/* Left-aligned Article Header with Background Image */}
      <section className="bg-navy-800 text-white py-16 md:py-24 relative overflow-hidden select-none">
        {/* Background Featured Image */}
        <div className="absolute inset-0 select-none pointer-events-none">
          <Image
            src={post.img}
            alt={post.title}
            fill
            sizes="100vw"
            className="object-cover object-center opacity-20 saturate-[0.6]"
            priority
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/80 to-navy-900/95" />

        <div className="max-w-4xl mx-auto px-6 flex flex-col items-start relative z-10">
          <Link
            href="/impact"
            className="inline-flex items-center gap-1.5 font-display font-bold text-[12px] uppercase tracking-wider text-red-500 hover:text-red-400 mb-8 transition-colors animate-fade-in"
          >
            <ArrowLeft className="w-4 h-4" /> All Articles
          </Link>
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight max-w-3xl">
            {post.title}
          </h1>

          {/* Meta section placed directly after the title inside the banner */}
          <div className="flex items-center gap-4 text-[12.5px] text-white/70 mt-5 font-semibold">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-red-500" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-red-500" />
              {post.author}
            </span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6">
          {/* Featured Image inside Article */}
          <div className="relative h-64 sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg mb-10 select-none">
            <Image
              src={post.img}
              alt={post.title}
              fill
              sizes="(max-width: 1024px) 100vw, 750px"
              className="object-cover"
              priority
            />
          </div>

          {/* Content Parser */}
          <div className="flex flex-col gap-6 text-[16.5px] leading-relaxed text-gray-600">
            {blocks.map((block, idx) => {
              const trimmed = block.trim();
              if (!trimmed) return null;

              if (trimmed.startsWith('#### ')) {
                return (
                  <h2
                    key={idx}
                    className="font-display font-bold text-2xl text-navy-800 tracking-tight mt-6"
                  >
                    {trimmed.replace('#### ', '')}
                  </h2>
                );
              }

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

          {/* Share section placed directly after the content */}
          <Share title={post.title} />
        </div>
      </article>

      <CTA />
    </div>
  );
}
