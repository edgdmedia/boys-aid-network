import Image from 'next/image';
import { Heart, Landmark, Mail, Phone, Calendar, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { bankDetails, contactDetails } from '@/data/content';
import PageHero from '@/components/PageHero';

export default function Support() {
  return (
    <div className="animate-ban-fade">
      {/* Page Hero */}
      <PageHero
        eyebrow="Join The Cause"
        title="Support Us"
        subtitle="Empowering and mentoring the boychild across Nigeria. Stand with us."
        img="/images/AIN30-1-1024x684.jpeg"
      />

      {/* Main Support Grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            
            {/* Left: Donate Card (3/5 width on desktop) */}
            <div className="lg:col-span-3 bg-gray-50 border border-gray-200 rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-red-100 text-red-600 mb-6">
                <Landmark className="w-6 h-6" />
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-navy-800 tracking-tight mb-3">
                Financial Support
              </h2>
              <p className="text-gray-600 text-[15.5px] leading-relaxed mb-8">
                Your donations directly sponsor advocacy bootcamps, school outreach programs, educational materials, and mentoring camps. Please transfer to any of the verified bank accounts below.
              </p>

              {/* Bank Accounts List */}
              <div className="flex flex-col gap-5">
                {/* Naira Account */}
                <div className="bg-white border border-gray-150 rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row justify-between sm:items-center gap-4 transition-all hover:border-red-500/30">
                  <div>
                    <div className="text-[12px] font-bold text-red-600 uppercase tracking-widest mb-1">
                      {bankDetails.bankName} (Naira)
                    </div>
                    <div className="font-display font-bold text-[18px] text-navy-800 tracking-tight selection:bg-red-100">
                      {bankDetails.nairaAccount}
                    </div>
                    <div className="text-[13px] text-gray-500 font-semibold mt-1">
                      Account Name: <span className="text-gray-700">{bankDetails.accountName}</span>
                    </div>
                  </div>
                  <span className="self-start sm:self-auto bg-gray-100 text-navy-800 font-display font-black text-[12px] py-1 px-3.5 rounded-lg border border-gray-200">
                    NGN
                  </span>
                </div>

                {/* Dollar Account */}
                <div className="bg-white border border-gray-150 rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row justify-between sm:items-center gap-4 transition-all hover:border-red-500/30">
                  <div>
                    <div className="text-[12px] font-bold text-red-600 uppercase tracking-widest mb-1">
                      {bankDetails.bankName} (Dollar)
                    </div>
                    <div className="font-display font-bold text-[18px] text-navy-800 tracking-tight selection:bg-red-100">
                      {bankDetails.dollarAccount}
                    </div>
                    <div className="text-[13px] text-gray-500 font-semibold mt-1">
                      Account Name: <span className="text-gray-700">{bankDetails.accountName}</span>
                    </div>
                  </div>
                  <span className="self-start sm:self-auto bg-gray-100 text-navy-800 font-display font-black text-[12px] py-1 px-3.5 rounded-lg border border-gray-200">
                    USD
                  </span>
                </div>

                {/* Pound Account */}
                <div className="bg-white border border-gray-150 rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row justify-between sm:items-center gap-4 transition-all hover:border-red-500/30">
                  <div>
                    <div className="text-[12px] font-bold text-red-600 uppercase tracking-widest mb-1">
                      {bankDetails.bankName} (Pounds)
                    </div>
                    <div className="font-display font-bold text-[18px] text-navy-800 tracking-tight selection:bg-red-100">
                      {bankDetails.poundAccount}
                    </div>
                    <div className="text-[13px] text-gray-500 font-semibold mt-1">
                      Account Name: <span className="text-gray-700">{bankDetails.accountName}</span>
                    </div>
                  </div>
                  <span className="self-start sm:self-auto bg-gray-100 text-navy-800 font-display font-black text-[12px] py-1 px-3.5 rounded-lg border border-gray-200">
                    GBP
                  </span>
                </div>
              </div>

              {/* Safety notice */}
              <div className="mt-8 flex items-start gap-3 bg-red-50/50 border border-red-100 rounded-2xl p-4.5">
                <ShieldCheck className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-[13px] leading-relaxed text-red-950 font-medium">
                  We maintain strict financial records and accountability. Receipts or confirmations can be requested by emailing us with your transaction details.
                </p>
              </div>
            </div>

            {/* Right: Partnership Card (2/5 width on desktop) */}
            <div className="lg:col-span-2 bg-navy-800 text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 text-red-500 mb-6">
                  <Heart className="w-6 h-6 fill-red-500 stroke-red-500" />
                </div>
                <h2 className="font-display font-black text-2xl text-white tracking-tight mb-3">
                  Partner with Us
                </h2>
                <p className="text-white/80 text-[14.5px] leading-relaxed mb-6">
                  Are you a corporate organisation, institution, or individual looking to sponsor specific initiatives, volunteer, or partner on special programs? Let's build together.
                </p>

                {/* Contact Coordinates */}
                <div className="flex flex-col gap-4 mb-6">
                  <div className="flex items-center gap-3.5 bg-white/5 border border-white/10 rounded-xl p-3.5">
                    <Mail className="w-5 h-5 text-red-500 shrink-0" />
                    <div>
                      <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest">
                        Partnership Email
                      </div>
                      <a
                        href={`mailto:${contactDetails.email}`}
                        className="text-[14px] font-bold hover:text-red-500 transition-colors"
                      >
                        {contactDetails.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Partnership Button moved directly below the email address block */}
                <a
                  href={`mailto:${contactDetails.email}?subject=Partnership Proposal - Boys Aid Network`}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-display font-bold text-[13.5px] uppercase tracking-wider shadow-lg transition-colors cursor-pointer mb-6"
                >
                  Email Us to Partner <ArrowRight className="w-4 h-4" />
                </a>

                {/* Additional Image added to balance the height */}
                <div className="relative h-56 w-full rounded-2xl overflow-hidden shadow-inner select-none border border-white/10">
                  <Image
                    src="/images/AIN60-1-1024x684.jpeg"
                    alt="Boys Bootcamp session"
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-white/50">
                <Award className="w-5 h-5 text-red-500" />
                <span className="text-[11.5px] font-bold uppercase tracking-wider">
                  Registered Advocacy NGO
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Volunteer Contact Coordinates */}
      <section className="bg-gray-50 border-t border-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="font-display font-bold tracking-widest uppercase text-red-600 text-[12.5px] mb-2.5">
            Get in touch
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-navy-800 tracking-tight mb-10">
            Other ways to reach us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center">
              <Phone className="w-6 h-6 text-red-600 mb-3" />
              <div className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                Call/WhatsApp
              </div>
              <a
                href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}
                className="font-display font-bold text-[17px] text-navy-800 hover:text-red-600 transition-colors"
              >
                {contactDetails.phone}
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center">
              <Calendar className="w-6 h-6 text-red-600 mb-3" />
              <div className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                Headquarters
              </div>
              <div className="font-display font-bold text-[15px] text-navy-800 leading-snug">
                Lagos, Nigeria
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
