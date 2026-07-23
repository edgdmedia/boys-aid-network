import Image from 'next/image';
import PageHero from '@/components/PageHero';
import { Heart, Shield, Users, GraduationCap, Scale, Megaphone } from 'lucide-react';
import { programs } from '@/data/content';
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {programs.map((prog) => {
              const IconComp = iconMap[prog.iconName] || Heart;
              return (
                <div
                  key={prog.id}
                  id={prog.id}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md flex flex-col justify-between transition-all hover:shadow-xl hover:-translate-y-1 scroll-mt-24"
                >
                  <div className="h-56 relative w-full select-none">
                    <Image
                      src={prog.img}
                      alt={prog.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                    <div className="absolute left-6 -bottom-7 w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg border-4 border-white">
                      <IconComp className="w-5.5 h-5.5" />
                    </div>
                  </div>

                  <div className="p-8 pt-12 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-display font-extrabold text-xl sm:text-[22px] text-navy-800 leading-snug mb-4">
                        {prog.title}
                      </h3>
                      <div className="prose max-w-none text-gray-600 text-[15px] sm:text-[15.5px] leading-relaxed whitespace-pre-line flex flex-col gap-4">
                        {prog.fullBody || prog.body}
                      </div>
                    </div>
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
