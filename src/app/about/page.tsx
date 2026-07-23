import Image from 'next/image';
import PageHero from '@/components/PageHero';
import { Compass, Users, TrendingUp, Quote } from 'lucide-react';
import { stats, values } from '@/data/content';
import CTA from '@/components/CTA';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  compass: Compass,
  users: Users,
  'trending-up': TrendingUp,
};

export default function About() {
  return (
    <div className="animate-ban-fade">
      {/* Page Hero */}
      <PageHero
        eyebrow="Who We Are"
        title="Our Story"
        subtitle="From Boy-King International to Boys Aid Network — a mission renewed."
        img="/images/AIN70-1-1024x684.jpeg"
      />

      {/* Main Description */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start text-left">
            <div className="font-display font-bold tracking-widest uppercase text-red-600 text-[12.5px] mb-3.5">
              Our Mission
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl leading-tight text-navy-800 tracking-tight mb-5">
              Raising purpose-driven young men
            </h2>
            <p className="text-[16px] sm:text-[17px] leading-relaxed text-gray-600 mb-4">
              Boys Aid Network is a boy-child advocacy organisation focused on teaching, mentoring and helping the boychild find himself, enjoy inclusion, live a godly life and contribute to societal development.
            </p>
            <p className="text-[16px] sm:text-[17px] leading-relaxed text-gray-600">
              Founded in April 2020, Boys Aid Network emerged from a profound understanding of the challenges facing young boys in Nigeria. Originally known as Boy-King International, our organization was established in response to the urgent need for boy child advocacy and support. Through our dedicated programs and initiatives, we've impacted thousands of young lives across Nigeria, focusing on crime prevention, mentorship, and positive development.
            </p>
          </div>

          <div className="relative h-64 sm:h-96 md:h-110 w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/AIN42-1-1024x684.jpeg"
              alt="Boys Aid Network gathering"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Three Pillars/Values Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, i) => {
              const IconComp = iconMap[val.icon] || Compass;
              return (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col items-start gap-4 transition-all hover:shadow-md"
                >
                  <div className="w-14 h-14 rounded-full bg-navy-50 text-navy-800 flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-extrabold text-[20px] text-navy-800 mt-2">
                    {val.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-gray-600">
                    {val.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
          <Quote className="w-12 h-12 text-red-600 rotate-180" />
          <p className="font-display font-bold text-xl sm:text-2xl md:text-3xl leading-relaxed text-navy-800 tracking-tight mt-5 mb-6 max-w-2xl">
            "On July 19, 2025, a dream I had carried for years finally became reality. We held our first International Boys' Day Conference."
          </p>
          <div className="font-display font-bold tracking-widest uppercase text-red-600 text-[12.5px]">
            Founder, Boys Aid Network
          </div>
        </div>
      </section>

      {/* Dark Stats Panel */}
      <section className="bg-navy-800 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-white">
            {stats.map((stat, i) => (
              <div key={i} className="text-center flex flex-col items-center justify-center py-4">
                <div className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white leading-none">
                  {stat.value}
                  <span className="text-red-500">{stat.suffix}</span>
                </div>
                <div className="text-[11.5px] sm:text-[13px] font-bold text-white/60 uppercase tracking-widest mt-3.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
