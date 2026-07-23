import Image from 'next/image';
import Link from 'next/link';
import { Heart, Shield, Users, GraduationCap, Scale, Megaphone, ArrowRight } from 'lucide-react';
import { programs } from '@/data/content';
import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  HeartHandshake: Heart,
  Shield: Shield,
  Users: Users,
  GraduationCap: GraduationCap,
  Scale: Scale,
  Megaphone: Megaphone,
};

export default function Programs() {
  return (
    <div className="animate-ban-fade">
      {/* Page Hero */}
      <PageHero
        eyebrow="What We Do"
        title="Our Programs"
        subtitle="Six initiatives teaching, mentoring and standing with the boychild."
        img="/images/AIN58-1-1024x684.jpeg"
      />

      {/* Grid of Programs */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((prog) => {
              const IconComp = iconMap[prog.iconName] || Heart;
              return (
                <div
                  key={prog.id}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md flex flex-col justify-between transition-all hover:shadow-xl hover:-translate-y-1.5 group"
                >
                  <div className="h-48 relative w-full select-none">
                    <Image
                      src={prog.img}
                      alt={prog.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                    <div className="absolute left-6 -bottom-7 w-13 h-13 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg border-4 border-white">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6 pt-10 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-display font-extrabold text-lg sm:text-[19px] text-navy-800 leading-snug mb-3">
                        {prog.title}
                      </h3>
                      <p className="text-gray-600 text-[14.5px] leading-relaxed mb-5 line-clamp-3">
                        {prog.body}
                      </p>
                    </div>
                    <Link
                      href={`/programs/${prog.id}`}
                      className="inline-flex items-center gap-1.5 font-display font-bold text-[12px] tracking-wide text-red-600 hover:text-red-700 uppercase"
                    >
                      Learn more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
