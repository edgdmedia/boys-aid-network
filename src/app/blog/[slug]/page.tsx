import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { blogPosts } from '@/data/content';
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
      {/* Article Header */}
      <section className="bg-navy-800 text-white py-16 md:py-24 relative select-none">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-start relative z-10">
          <Link
            href="/impact"
            className="inline-flex items-center gap-1.5 font-display font-bold text-[12px] uppercase tracking-wider text-red-500 hover:text-red-400 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Impact &amp; Blog
          </Link>

          <div className="flex items-center gap-4 text-[12.5px] text-white/60 mb-4 font-semibold">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-red-500" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-red-500" />
              {post.author}
            </span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6">
          {/* Main Image */}
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
        </div>
      </article>

      <CTA />
    </div>
  );
}
