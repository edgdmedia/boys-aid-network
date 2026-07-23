import Image from 'next/image';
import PageHero from '@/components/PageHero';
import { Quote } from 'lucide-react';
import CTA from '@/components/CTA';

export default function FoundersNote() {
  return (
    <div className="animate-ban-fade">
      {/* Page Hero */}
      <PageHero
        eyebrow="From the Founder"
        title="Founder's Note"
        subtitle="A personal word on the vision behind Boys Aid Network."
        img="/images/AIN70-1-1024x684.jpeg"
      />

      {/* Main content */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Left Column: Image and Details */}
          <div className="md:col-span-4 flex flex-col items-center">
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl max-w-sm">
              <Image
                src="/images/Olufunke-Oyinlola.png"
                alt="Olufunke Oyinlola"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="mt-5 text-center">
              <h3 className="font-display font-extrabold text-navy-800 text-[19px]">
                Olufunke Oyinlola
              </h3>
              <p className="text-[12.5px] font-bold text-red-600 uppercase tracking-wider mt-1">
                Founder, Boys Aid Network
              </p>
            </div>
          </div>

          {/* Right Column: Note text */}
          <div className="md:col-span-8 flex flex-col items-start text-left">
            <Quote className="w-10 h-10 text-red-600 rotate-180 mb-4" />
            <h2 className="font-display font-extrabold text-xl sm:text-2xl md:text-[26px] leading-relaxed text-navy-800 tracking-tight mb-6">
              "On July 19, 2025, a dream I had carried for years finally became reality."
            </h2>
            <div className="prose max-w-none text-gray-600 text-[16px] sm:text-[17px] leading-relaxed flex flex-col gap-5">
              <p>
                My passion for supporting boys began during my National Youth Corps Program in a small town in Edo State, Nigeria. There, I witnessed firsthand the struggles of young boys who lacked guidance, purpose, and support. Many were left to navigate life on their own, making them vulnerable to crime and reckless lifestyles. I heard troubling stories of boys engaging in criminal activities, and I saw how neglect and a lack of mentorship were fueling issues such as domestic violence, cybercrime, rape, and gang-related violence—problems that extended beyond individuals to families and society as a whole.
              </p>
              <p>
                I came to a critical realization: the way boys are raised has a profound impact on our communities. In many homes, there is a strong emphasis on preparing girls for future responsibilities, yet boys are often expected to figure things out on their own. This imbalance contributes to broken homes, troubled marriages, and societal instability.
              </p>
              <p>
                Across the world, boys face unique but often overlooked challenges that shape their futures in profound ways. In Nigeria, an alarming number of boys drop out of school due to poverty, lack of mentorship, and societal neglect. According to UNESCO, over 10.5 million children are out of school in Nigeria, with boys making up a significant percentage. Globally, studies show that boys are more likely than girls to engage in risky behaviors, experience higher rates of juvenile crime, and suffer in silence due to societal expectations that discourage emotional vulnerability.
              </p>
              <p>
                Despite these pressing issues, conversations around child development and gender advocacy often focus on girls, leaving boys without the support they need to thrive. It became clear to me that addressing these challenges at their root, by providing boys with the mentorship, structure, and support they need, was essential for building a more secure and balanced society. <strong>This gap is what Boys Aid Network is determined to bridge.</strong>
              </p>
              <p>
                At Boys Aid Network, we are committed to empowering boys, particularly those from low-income backgrounds and those living or working on the streets, by providing mentorship, education, and rehabilitation programs. We believe that every boy deserves guidance, encouragement, and the right environment to unlock his full potential.
              </p>
              <p>
                Our work extends beyond awareness. We take action through mentorship programs, community outreach, and advocacy efforts aimed at changing societal perceptions about boys and their needs. We envision a future where boys are not left behind, but instead nurtured into responsible, confident, and impactful members of society.
              </p>
              <p>
                This is more than just an organisation, it is a movement to redefine the future for boys. We invite you to join us, whether as a mentor, volunteer, donor, or advocate. Together, we can create a world where every boy has the opportunity to become the best version of himself. Thank you and welcome.
              </p>
            </div>
            <div className="font-display font-bold text-red-600 uppercase tracking-widest text-[12px] mt-8">
              — Founder, Boys Aid Network
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
