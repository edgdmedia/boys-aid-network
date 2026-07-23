import Image from 'next/image';
import PageHero from '@/components/PageHero';
import { HeartHandshake, Handshake, Mail } from 'lucide-react';
import { bankDetails, contactDetails } from '@/data/content';
import CTA from '@/components/CTA';

export default function Support() {
  return (
    <div className="animate-ban-fade">
      {/* Page Hero */}
      <PageHero
        eyebrow="Get Involved"
        title="Support Us"
        subtitle="Your support can transform lives. Give directly, or partner with us to empower the boychild."
        img="/images/AIN30-1-1024x684.jpeg"
      />

      {/* Main Support Info */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
            
            {/* Column 1: Bank Transfer (3/5 width on desktop) */}
            <div className="lg:col-span-3 bg-navy-800 text-white rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden flex flex-col justify-between select-none">
              <div className="absolute top-[-60px] right-[-60px] w-52 h-52 rounded-full bg-white/5 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg">
                  <HeartHandshake className="w-7 h-7" />
                </div>
                <h2 className="font-display font-black text-2xl md:text-3xl mt-6 mb-3">
                  Donate via Bank Transfer
                </h2>
                <p className="text-white/80 text-[14.5px] leading-relaxed mb-8">
                  Every gift, big or small, helps us teach, mentor and stand with boys across Nigeria and Africa. Send your donation directly to our account below.
                </p>

                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden font-display">
                  <div className="flex justify-between items-center px-5 py-4 border-b border-white/5">
                    <span className="text-[11px] font-bold text-white/50 tracking-wider uppercase">Account Name</span>
                    <span className="font-extrabold text-[13.5px] text-right max-w-[200px]">{bankDetails.accountName}</span>
                  </div>
                  <div className="flex justify-between items-center px-5 py-4 border-b border-white/5">
                    <span className="text-[11px] font-bold text-white/50 tracking-wider uppercase">Bank Name</span>
                    <span className="font-extrabold text-[15px]">{bankDetails.bankName}</span>
                  </div>
                  <div className="flex justify-between items-center px-5 py-4 border-b border-white/5">
                    <span className="text-[11px] font-bold text-white/50 tracking-wider uppercase">Naira Account</span>
                    <span className="font-mono font-extrabold text-[16px] text-red-400">{bankDetails.nairaAccount}</span>
                  </div>
                  <div className="flex justify-between items-center px-5 py-4 border-b border-white/5">
                    <span className="text-[11px] font-bold text-white/50 tracking-wider uppercase">Dollar Account</span>
                    <span className="font-mono font-extrabold text-[16px]">{bankDetails.dollarAccount}</span>
                  </div>
                  <div className="flex justify-between items-center px-5 py-4 border-b border-white/5">
                    <span className="text-[11px] font-bold text-white/50 tracking-wider uppercase">Pound Account</span>
                    <span className="font-mono font-extrabold text-[16px]">{bankDetails.poundAccount}</span>
                  </div>
                  <div className="flex justify-between items-center px-5 py-4 border-b border-white/5">
                    <span className="text-[11px] font-bold text-white/50 tracking-wider uppercase">Swift Code</span>
                    <span className="font-mono font-extrabold text-[15px]">{bankDetails.swiftCode}</span>
                  </div>
                  <div className="flex justify-between items-center px-5 py-4">
                    <span className="text-[11px] font-bold text-white/50 tracking-wider uppercase">Sort Code</span>
                    <span className="font-mono font-extrabold text-[15px]">{bankDetails.sortCode}</span>
                  </div>
                </div>
              </div>
              <p className="text-white/50 text-[12.5px] mt-6 relative z-10">
                Please reference your name with transfers so we can acknowledge your gift.
              </p>
            </div>

            {/* Column 2: Partnership (2/5 width on desktop) */}
            <div className="lg:col-span-2 bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-navy-50 text-navy-800 flex items-center justify-center">
                  <Handshake className="w-7 h-7" />
                </div>
                <h2 className="font-display font-black text-2xl md:text-3xl text-navy-800 mt-6 mb-3">
                  Partner With Us
                </h2>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                  Are you an organisation, school, or individual who shares our vision for the boychild? Let's build something together — sponsorships, events, mentorship and more.
                </p>

                <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-5">
                  <div className="text-[11.5px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-red-500" />
                    Partnership Email
                  </div>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="font-display font-black text-[18px] sm:text-[20px] text-red-600 hover:text-red-700 break-all select-all transition-colors"
                  >
                    {contactDetails.email}
                  </a>
                </div>

                {/* Button placed directly after the email address */}
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="inline-flex items-center justify-center w-full py-4 mb-6 rounded-xl bg-red-600 hover:bg-red-700 text-white font-display font-bold text-[14.5px] tracking-wider uppercase text-center shadow-md transition-colors cursor-pointer"
                >
                  Email Us to Partner
                </a>

                {/* Additional Image added at the bottom of the card (hidden on mobile, visible on desktop) */}
                <div className="relative h-48 w-full rounded-2xl overflow-hidden shadow-inner select-none border border-gray-200 hidden lg:block">
                  <Image
                    src="/images/AIN60-1-1024x684.jpeg"
                    alt="Partnership Mentorship session"
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
