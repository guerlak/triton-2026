import React from "react";
import Footer from "@/app/components/Footer";
import { FileText, Shield, ChevronRight, Scale, CheckCircle2, Award, Zap, Mail } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TRITON Pass & Club Pass Terms & Conditions | TRITON World Series",
  description: "Terms and conditions governing the TRITON Pass and TRITON Club Pass membership programs operated by TRITON World Series.",
};

export default function TritonPassPage() {
  const navItems = [
    { id: "triton-pass", label: "1. TRITON Pass" },
    { id: "club-pass", label: "2. TRITON Club Pass" },
    { id: "club-benefits", label: "3. Club Pass Benefits" },
    { id: "registration-protection", label: "4. 100% Registration Protection" },
    { id: "free-deferral", label: "5. Free Deferral" },
    { id: "eligibility", label: "6. Eligibility" },
    { id: "refund-coverage", label: "7. What Refund Covers" },
    { id: "athlete-cancellation-only", label: "8. Athlete Cancellation Only" },
    { id: "lrh-relationship", label: "9. Relationship with LRH" },
    { id: "refund-process", label: "10. Refund Request Process" },
    { id: "membership-fee", label: "11. Membership Fee" },
    { id: "membership-period", label: "12. Membership Period & Expiry" },
    { id: "priority-pricing", label: "13. Priority & Club Pricing" },
    { id: "store-partner-benefits", label: "14. Store & Partner Benefits" },
    { id: "personal-non-transferable", label: "15. Personal & Non-Transferable" },
    { id: "fair-use-abuse", label: "16. Fair Use & Abuse" },
    { id: "wallet-functionality", label: "17. Digital Wallet Functionality" },
    { id: "communications", label: "18. Communications" },
    { id: "personal-data", label: "19. Personal Data" },
    { id: "changes-benefits", label: "20. Changes to Benefits" },
    { id: "event-rules", label: "21. Event Rules" },
    { id: "force-majeure", label: "22. Force Majeure & Cancellation" },
    { id: "liability", label: "23. Liability" },
    { id: "interpretation", label: "24. Interpretation" },
    { id: "governing-law-contact", label: "25. Governing Law & Contact" },
  ];

  return (
    <div className="bg-neutral-950 min-h-screen text-white flex flex-col pt-16 sm:pt-20">
      <main className="grow">
        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 md:py-24 border-b border-white/5">
          <div className="flex items-center gap-3 text-triton-red mb-4 sm:mb-6">
            <Scale className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-xs">
              Membership Program
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white leading-tight sm:leading-none mb-4 sm:mb-6">
            TRITON Pass &amp; <span className="text-triton-red italic">Club Pass</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-widest text-gray-300 mb-4">
            Terms &amp; Conditions
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-bold">
            Effective from: October 1, 2026
          </p>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 relative">
            {/* Aside Navigation */}
            <aside className="lg:w-72 shrink-0 lg:sticky lg:top-32 h-fit order-2 lg:order-1">
              <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 backdrop-blur-sm">
                <h3 className="text-xs font-black uppercase tracking-widest text-triton-red mb-4 pb-3 border-b border-white/5">
                  Contents
                </h3>
                <nav className="space-y-1 max-h-[50vh] lg:max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-400 hover:text-white hover:bg-white/5 py-1.5 sm:py-2 px-2.5 rounded-lg transition-all group"
                    >
                      <ChevronRight className="w-3 h-3 text-triton-red opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      <span className="truncate">{item.label}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content Area */}
            <article className="grow space-y-12 sm:space-y-16 md:space-y-20 order-1 lg:order-2 max-w-4xl font-sans">
              {/* Introduction Box */}
              <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                <p>
                  These Terms &amp; Conditions govern the <strong className="text-white">TRITON Pass</strong> and{" "}
                  <strong className="text-white">TRITON Club Pass</strong> membership programs operated by TRITON World
                  Series (“TRITON”).
                </p>
                <p>
                  By activating, purchasing, or using a TRITON Pass or TRITON Club Pass, the athlete agrees to these Terms
                  &amp; Conditions.
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  Separate terms and conditions may apply to individual TRITON events, race registrations, merchandise
                  purchases, and services provided by Local Rights Holders (“LRHs”), event organizers, or third-party
                  partners.
                </p>
              </div>

              {/* Section 1: TRITON PASS */}
              <section id="triton-pass" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  1. TRITON PASS
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    The TRITON Pass is TRITON’s <strong className="text-white">free digital athlete credential</strong>.
                  </p>
                  <p>
                    It is available to athletes registered for eligible TRITON World Series events and may be delivered
                    through supported digital wallet platforms, including <strong className="text-white">Apple Wallet</strong> and{" "}
                    <strong className="text-white">Google Wallet</strong>.
                  </p>
                  <p>
                    There is no membership fee for the standard TRITON Pass. It is a privileged athlete digital card, not
                    a right purchased during registration, and may be canceled at any time.
                  </p>

                  <div className="space-y-3 pt-2">
                    <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-wide">
                      1.1 TRITON Athlete Status
                    </h3>
                    <p>
                      The TRITON Pass identifies the holder as a TRITON athlete and provides a digital connection between
                      the athlete and the TRITON ecosystem. The Pass may display information including, but not limited to:
                    </p>
                    <ul className="space-y-1.5 list-disc list-inside text-gray-300 pl-2">
                      <li>Athlete name;</li>
                      <li>TRITON Athlete ID;</li>
                      <li>Registered distance;</li>
                      <li>Athlete photograph, where applicable;</li>
                      <li>Nationality;</li>
                      <li>Membership or Pass status;</li>
                      <li>Relevant race information; and</li>
                      <li>Other information or functionality introduced by TRITON.</li>
                    </ul>
                  </div>

                  <div className="space-y-3 pt-2">
                    <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-wide">
                      1.2 Direct Information
                    </h3>
                    <p>
                      TRITON Pass holders may receive relevant information directly through their digital Pass, including:
                    </p>
                    <ul className="space-y-1.5 list-disc list-inside text-gray-300 pl-2">
                      <li>Race information;</li>
                      <li>Operational updates;</li>
                      <li>Reminders;</li>
                      <li>Registration information;</li>
                      <li>New event announcements;</li>
                      <li>Relevant TRITON news;</li>
                      <li>Selected promotions and offers; and</li>
                      <li>Other information relating to the TRITON athlete experience.</li>
                    </ul>
                    <p className="text-xs sm:text-sm text-gray-500 pt-1">
                      The availability and functionality of Wallet communications depend partly on the athlete’s device,
                      Wallet provider, notification settings, and supporting technology.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: TRITON CLUB PASS */}
              <section id="club-pass" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  2. TRITON CLUB PASS
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <div className="bg-triton-red/10 border border-triton-red/30 rounded-2xl p-5 sm:p-6 text-white">
                    <span className="text-xs font-black uppercase tracking-widest text-triton-red block mb-1">
                      Annual Membership
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-2">
                      RACE WITH FREEDOM.
                    </h3>
                    <p className="text-base sm:text-lg font-mono font-bold text-triton-red">
                      Annual Membership Price: €49
                    </p>
                  </div>

                  <p>
                    The TRITON Club Pass is TRITON’s <strong className="text-white">premium annual athlete membership</strong>.
                  </p>
                  <p>
                    Unless otherwise expressly stated at the time of purchase, membership is valid for 12 months from the
                    date of activation.
                  </p>
                  <p>
                    The TRITON Club Pass provides standard TRITON Pass benefits together with additional Club benefits
                    described below.
                  </p>
                  <p>
                    The TRITON Club Pass does not replace the TRITON Pass card; it is an additional and independent card.
                  </p>
                </div>
              </section>

              {/* Section 3: TRITON CLUB PASS BENEFITS */}
              <section id="club-benefits" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  3. TRITON CLUB PASS BENEFITS
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>During an active membership period, eligible Club members receive:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-2">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1.5">
                      <h4 className="text-sm font-black uppercase text-white flex items-center gap-2">
                        <Shield className="w-4 h-4 text-triton-red shrink-0" />
                        RACE FREEDOM — 100% REGISTRATION PROTECTION
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Cancel one eligible TRITON race registration within the permitted period and receive 100% of the
                        eligible registration fee actually paid, subject to these Terms.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1.5">
                      <h4 className="text-sm font-black uppercase text-white flex items-center gap-2">
                        <Zap className="w-4 h-4 text-triton-red shrink-0" />
                        FREE DEFERRAL
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Where the athlete can no longer participate close to race day, an eligible registration may be
                        deferred without a TRITON deferral fee when requested within the applicable period.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1.5">
                      <h4 className="text-sm font-black uppercase text-white flex items-center gap-2">
                        <Award className="w-4 h-4 text-triton-red shrink-0" />
                        ATHLETE STATUS
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Premium TRITON Club athlete status displayed through the athlete’s digital Wallet Pass.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1.5">
                      <h4 className="text-sm font-black uppercase text-white flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-triton-red shrink-0" />
                        TRITON ATHLETE ID
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Continued use of the athlete’s permanent TRITON Athlete ID.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1.5">
                      <h4 className="text-sm font-black uppercase text-white flex items-center gap-2">
                        <Mail className="w-4 h-4 text-triton-red shrink-0" />
                        PRIVILEGED DIRECT INFORMATION
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Access to selected TRITON and Club information, alerts, opportunities, and communications.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1.5">
                      <h4 className="text-sm font-black uppercase text-white">PRIORITY REGISTRATION*</h4>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Access to selected TRITON event registrations before they become available to the general public.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1.5">
                      <h4 className="text-sm font-black uppercase text-white">PRIVILEGED REGISTRATION OPENING PRICE*</h4>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Access to selected preferred opening prices or other Club registration conditions.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1.5">
                      <h4 className="text-sm font-black uppercase text-white">SPECIAL TRITON STORE PRICES*</h4>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Access to selected Club prices on TRITON merchandise and products.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1.5 sm:col-span-2">
                      <h4 className="text-sm font-black uppercase text-white">RACE-TO-RACE OFFERS*</h4>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Access to selected promotions, partner benefits, and other opportunities across participating
                        TRITON events.
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 italic pt-2">
                    * Availability, conditions, and benefits may vary from race to race and are not guaranteed at every
                    TRITON event.
                  </p>
                </div>
              </section>

              {/* Section 4: 100% REGISTRATION PROTECTION */}
              <section id="registration-protection" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  4. RACE FREEDOM — 100% REGISTRATION PROTECTION
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    An active TRITON Club member may cancel one eligible race registration per annual membership period and
                    receive reimbursement of <strong className="text-white">100% of the eligible registration fee</strong> actually paid.
                  </p>
                  <p className="font-bold text-white">
                    No explanation or supporting reason is required from the athlete.
                  </p>

                  <div className="space-y-3 pt-2">
                    <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-wide">
                      4.1 Cancellation Deadline
                    </h3>
                    <p>
                      The cancellation request must be properly submitted no later than{" "}
                      <strong className="text-white">23:59 local event time seven (7) calendar days before the scheduled race day</strong>.
                    </p>
                    <p>
                      Requests received after this deadline are not eligible for the 100% Registration Protection benefit.
                      They may, however, qualify for the Free Deferral benefit described in Section 5.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-wide">
                      4.2 One Protected Cancellation Per Membership Year
                    </h3>
                    <p>
                      Registration Protection may be used for one race only during each 12-month TRITON Club membership period.
                    </p>
                    <p>
                      Once a Registration Protection reimbursement has been approved or paid, the benefit is considered used
                      for that membership period. The remaining TRITON Club benefits continue until the membership expires.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: FREE DEFERRAL */}
              <section id="free-deferral" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  5. FREE DEFERRAL
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    Where an athlete decides not to participate after the Registration Protection deadline has passed, the
                    athlete may request a free deferral until <strong className="text-white">48 hours before the scheduled race start</strong>.
                  </p>
                  <p className="font-bold text-white">No explanation or supporting reason is required.</p>
                  <p>
                    The deferral will normally transfer the eligible registration to the same TRITON event at its next
                    edition, subject to that event taking place.
                  </p>
                  <p>
                    Another eligible TRITON race may be offered where expressly permitted by TRITON and/or the applicable LRH.
                  </p>
                  <p>
                    A free deferral does not automatically entitle the athlete to transfer to any TRITON event worldwide.
                  </p>
                  <p>
                    Where the new race or registration category has a higher entry price, the athlete may be required to pay
                    the difference.
                  </p>
                  <p>No cash refund is generated by a deferral.</p>
                  <p className="text-xs sm:text-sm text-gray-500">Event-specific administrative conditions may apply.</p>
                </div>
              </section>

              {/* Section 6: ELIGIBILITY */}
              <section id="eligibility" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  6. ELIGIBILITY FOR REGISTRATION PROTECTION
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>For a race registration to qualify for Registration Protection:</p>
                  <ul className="space-y-2 list-disc list-inside text-gray-300 pl-2">
                    <li>The athlete must hold an active TRITON Club membership;</li>
                    <li>The relevant race must be an eligible TRITON event;</li>
                    <li>
                      The TRITON Club Pass must have been purchased no more than 60 days after the registration was
                      purchased and at least 90 days before the race for which the athlete requests cancellation or deferral;
                    </li>
                    <li>The registration must belong to the Club member personally;</li>
                    <li>The athlete must comply with the applicable cancellation deadline; and</li>
                    <li>
                      The Registration Protection benefit must not have already been used during that membership period.
                    </li>
                  </ul>
                  <p>
                    A Club Pass purchased after the athlete has already decided or become aware that they will not participate
                    does not retrospectively protect an existing registration.
                  </p>
                  <p>
                    TRITON reserves the right to refuse claims involving abuse, manipulation, misrepresentation, or attempted
                    circumvention of these Terms.
                  </p>
                </div>
              </section>

              {/* Section 7: WHAT REFUND COVERS */}
              <section id="refund-coverage" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  7. WHAT THE 100% REFUND COVERS
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    Registration Protection covers 100% of the eligible race registration fee actually paid by the athlete.
                  </p>
                  <p>
                    If the athlete registered using a discount, promotional code, Club price, or other reduced price,
                    reimbursement is limited to the amount actually paid for the eligible registration.
                  </p>
                  <p>Unless TRITON expressly states otherwise, Registration Protection does not cover:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs sm:text-sm text-gray-300 pt-2">
                    <span className="bg-white/5 p-2 rounded-lg">• Payment-processing fees</span>
                    <span className="bg-white/5 p-2 rounded-lg">• Transaction / banking fees</span>
                    <span className="bg-white/5 p-2 rounded-lg">• Merchandise</span>
                    <span className="bg-white/5 p-2 rounded-lg">• Donations</span>
                    <span className="bg-white/5 p-2 rounded-lg">• Optional products</span>
                    <span className="bg-white/5 p-2 rounded-lg">• Photographs</span>
                    <span className="bg-white/5 p-2 rounded-lg">• Travel &amp; Flights</span>
                    <span className="bg-white/5 p-2 rounded-lg">• Accommodation</span>
                    <span className="bg-white/5 p-2 rounded-lg">• Visas</span>
                    <span className="bg-white/5 p-2 rounded-lg">• Equipment rental</span>
                    <span className="bg-white/5 p-2 rounded-lg">• Training expenses</span>
                    <span className="bg-white/5 p-2 rounded-lg">• Third-party services</span>
                    <span className="bg-white/5 p-2 rounded-lg">• Insurance products</span>
                    <span className="bg-white/5 p-2 rounded-lg col-span-2 sm:col-span-2">• Additional event purchases or attendance costs</span>
                  </div>
                </div>
              </section>

              {/* Section 8: ATHLETE CANCELLATION ONLY */}
              <section id="athlete-cancellation-only" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  8. ATHLETE CANCELLATION ONLY
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    Registration Protection is designed specifically for situations where the athlete cancels their own
                    participation.
                  </p>
                  <p>
                    It does not apply where the race itself is canceled, postponed, suspended, relocated, materially
                    altered, or prevented from taking place.
                  </p>
                  <p>In particular, Registration Protection does not cover event circumstances arising from:</p>
                  <ul className="space-y-1.5 list-disc list-inside text-gray-300 pl-2">
                    <li>Force Majeure;</li>
                    <li>Extreme or dangerous weather;</li>
                    <li>Natural disasters;</li>
                    <li>Public-health emergencies;</li>
                    <li>War, terrorism, or civil disturbance;</li>
                    <li>Government or public-authority decisions;</li>
                    <li>Venue unavailability;</li>
                    <li>Road, water, or course restrictions;</li>
                    <li>Safety or security circumstances;</li>
                    <li>Changes in distances or courses;</li>
                    <li>Cancellation or alteration of a part of the race;</li>
                    <li>Circumstances beyond the reasonable control of TRITON or the LRH; or</li>
                    <li>Other unforeseen circumstances affecting the organization or delivery of the event.</li>
                  </ul>
                  <p className="text-xs sm:text-sm text-gray-500 pt-1">
                    Any rights available to athletes in such circumstances are governed by the applicable event registration
                    terms, mandatory consumer law, and any specific decision announced for the affected event.
                  </p>
                </div>
              </section>

              {/* Section 9: RELATIONSHIP WITH LRH */}
              <section id="lrh-relationship" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  9. RELATIONSHIP WITH THE LOCAL RIGHTS HOLDER
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    TRITON events are delivered locally by authorized Local Rights Holders and event organizers.
                  </p>
                  <p>
                    The LRH remains responsible for local event production and delivery in accordance with its agreement with
                    TRITON and applicable local requirements.
                  </p>
                  <p>
                    The TRITON Club Registration Protection benefit is provided by TRITON Head Office and does not transfer
                    the financial cost of an eligible Club reimbursement to the LRH, unless a separate agreement expressly
                    provides otherwise.
                  </p>
                  <p>
                    Where an eligible Club member receives Registration Protection from TRITON, the underlying LRH
                    registration revenue is not automatically reversed as a consequence of the Club benefit.
                  </p>
                  <p className="font-bold text-white">This separation is fundamental to the TRITON Club model.</p>
                </div>
              </section>

              {/* Section 10: REFUND REQUEST PROCESS */}
              <section id="refund-process" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  10. REFUND REQUEST PROCESS
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    Cancellation requests must be submitted through the official TRITON email:{" "}
                    <a
                      href="mailto:triton@tritonworldseries.com"
                      className="text-triton-red font-bold hover:underline"
                    >
                      triton@tritonworldseries.com
                    </a>{" "}
                    with the subject line: <strong className="text-white">TRITON CLUB PASS</strong>.
                  </p>
                  <p>The request must identify:</p>
                  <ul className="space-y-1.5 list-disc list-inside text-gray-300 pl-2">
                    <li>The Club member;</li>
                    <li>TRITON Athlete ID or membership information;</li>
                    <li>Applicable event;</li>
                    <li>Race registration; and</li>
                    <li>Any other information reasonably necessary to verify eligibility.</li>
                  </ul>
                  <p>TRITON may verify registration and membership status before approving reimbursement.</p>
                  <p>
                    Approved reimbursements will normally be returned through the original payment method where technically
                    possible. Where this is not possible, TRITON may request appropriate payment information from the athlete.
                  </p>
                </div>
              </section>

              {/* Section 11: MEMBERSHIP FEE */}
              <section id="membership-fee" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  11. MEMBERSHIP FEE
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    The TRITON Club Pass costs <strong className="text-white">€49 for 12 months</strong>, unless another price
                    is expressly displayed at the time of purchase.
                  </p>
                  <p>The membership fee is separate from race registration fees.</p>
                  <p>The membership fee does not constitute payment toward a specific race registration.</p>
                  <p>
                    Once the member has registered for a protected race, used a Club benefit, received a Club-specific
                    financial advantage, or otherwise begun using the paid membership benefits, the membership fee is
                    non-refundable except where mandatory consumer law requires otherwise.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Any statutory cancellation or withdrawal rights applicable to online purchases remain unaffected.
                  </p>
                </div>
              </section>

              {/* Section 12: MEMBERSHIP PERIOD AND EXPIRY */}
              <section id="membership-period" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  12. MEMBERSHIP PERIOD AND EXPIRY
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    TRITON Club membership is valid for 12 months from activation unless otherwise stated at purchase.
                  </p>
                  <p>
                    Club benefits must be used while membership is active unless a particular benefit expressly provides
                    otherwise.
                  </p>
                  <p>
                    Expiration of Club membership does not remove the athlete’s permanent TRITON Athlete ID.
                  </p>
                  <p>
                    Historical free TRITON distance Passes may remain in the athlete’s digital Wallet, subject to technical
                    platform requirements.
                  </p>
                  <p>
                    The premium TRITON Club status may be marked as expired or inactive when membership ends.
                  </p>
                  <p>Renewing Club membership restores the applicable current Club benefits.</p>
                </div>
              </section>

              {/* Section 13: PRIORITY REGISTRATION AND CLUB PRICING */}
              <section id="priority-pricing" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  13. PRIORITY REGISTRATION AND CLUB PRICING
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>Priority registration and privileged opening prices may vary by event.</p>
                  <p>TRITON Club membership does not guarantee entry into every event.</p>
                  <p>
                    Event capacities, legal restrictions, qualification requirements, sold-out conditions, and other
                    event-specific limitations may apply.
                  </p>
                  <p>
                    Where a Club priority registration period is offered, the athlete must complete registration within the
                    stated window.
                  </p>
                  <p>Unused priority rights cannot be exchanged for cash or transferred.</p>
                </div>
              </section>

              {/* Section 14: STORE, PARTNER, AND PROMOTIONAL BENEFITS */}
              <section id="store-partner-benefits" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  14. STORE, PARTNER, AND PROMOTIONAL BENEFITS
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    TRITON may provide members with discounts, offers, experiences, or other benefits from TRITON, LRHs,
                    and commercial partners. Such benefits may:
                  </p>
                  <ul className="space-y-1.5 list-disc list-inside text-gray-300 pl-2">
                    <li>Vary by country or event;</li>
                    <li>Be subject to availability;</li>
                    <li>Have specific validity periods;</li>
                    <li>Have separate terms;</li>
                    <li>Be limited in quantity; or</li>
                    <li>Be changed or withdrawn.</li>
                  </ul>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Unless expressly stated otherwise, promotional benefits have no cash value.
                  </p>
                </div>
              </section>

              {/* Section 15: PERSONAL AND NON-TRANSFERABLE */}
              <section id="personal-non-transferable" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  15. PERSONAL AND NON-TRANSFERABLE
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    The TRITON Pass, TRITON Club Pass, Athlete ID, and associated benefits are personal to the registered athlete.
                  </p>
                  <p>They may not be sold, transferred, shared, or used by another person.</p>
                  <p>Registration Protection applies only to a race registration held in the Club member’s own name.</p>
                  <p>TRITON may request reasonable identity verification where necessary to prevent misuse.</p>
                </div>
              </section>

              {/* Section 16: FAIR USE AND ABUSE */}
              <section id="fair-use-abuse" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  16. FAIR USE AND ABUSE
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>TRITON Club is designed to provide genuine flexibility to athletes.</p>
                  <p>
                    TRITON may suspend, terminate, or refuse benefits where there is reasonable evidence of:
                  </p>
                  <ul className="space-y-1.5 list-disc list-inside text-gray-300 pl-2">
                    <li>Fraud;</li>
                    <li>Deliberate misrepresentation;</li>
                    <li>Duplicate athlete identities;</li>
                    <li>Manipulation of registration or cancellation procedures;</li>
                    <li>Resale or transfer of benefits;</li>
                    <li>Systematic abuse of Club privileges; or</li>
                    <li>Other conduct inconsistent with the legitimate purpose of the program.</li>
                  </ul>
                  <p className="text-xs sm:text-sm text-gray-500">This does not affect rights that cannot legally be excluded.</p>
                </div>
              </section>

              {/* Section 17: DIGITAL WALLET FUNCTIONALITY */}
              <section id="wallet-functionality" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  17. DIGITAL WALLET FUNCTIONALITY
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>TRITON Pass and TRITON Club Pass use third-party digital wallet and technology services.</p>
                  <p>
                    TRITON cannot guarantee uninterrupted availability of Apple Wallet, Google Wallet, PassKit, or other
                    third-party technology.
                  </p>
                  <p>Certain features may depend on:</p>
                  <ul className="space-y-1.5 list-disc list-inside text-gray-300 pl-2">
                    <li>Device compatibility;</li>
                    <li>Operating system;</li>
                    <li>Internet access;</li>
                    <li>Notification permissions;</li>
                    <li>Wallet settings;</li>
                    <li>Geographic availability; or</li>
                    <li>Third-party platform functionality.</li>
                  </ul>
                  <p>
                    Failure to receive a Wallet notification does not alter published race rules, schedules, deadlines, or
                    other official information.
                  </p>
                  <p>Athletes remain responsible for reviewing official TRITON and event communications.</p>
                </div>
              </section>

              {/* Section 18: COMMUNICATIONS */}
              <section id="communications" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  18. COMMUNICATIONS
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    Pass holders may receive operational and membership communications necessary to provide the TRITON
                    Pass and Club services, including:
                  </p>
                  <ul className="space-y-1.5 list-disc list-inside text-gray-300 pl-2">
                    <li>Safety and race information;</li>
                    <li>Registration information;</li>
                    <li>Event reminders;</li>
                    <li>Pass or membership information;</li>
                    <li>Benefit availability;</li>
                    <li>Renewal information;</li>
                    <li>Relevant TRITON opportunities; and</li>
                    <li>Selected promotional or partner communications where permitted.</li>
                  </ul>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Marketing and promotional communications will be managed in accordance with applicable privacy,
                    electronic communications, and consent requirements.
                  </p>
                </div>
              </section>

              {/* Section 19: PERSONAL DATA */}
              <section id="personal-data" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  19. PERSONAL DATA
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    TRITON processes personal information necessary to administer Athlete IDs, digital Passes, memberships,
                    race benefits, communications, and Registration Protection.
                  </p>
                  <p>
                    Personal data will be handled in accordance with the applicable TRITON Privacy Policy and relevant
                    data-protection legislation.
                  </p>
                  <p>
                    Information may be shared with authorized LRHs, technology providers, timing providers, payment
                    providers, and other service providers where reasonably necessary to deliver the program, subject to
                    applicable data-protection requirements.
                  </p>
                </div>
              </section>

              {/* Section 20: CHANGES TO BENEFITS */}
              <section id="changes-benefits" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  20. CHANGES TO BENEFITS
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>TRITON may develop or improve the TRITON Pass and TRITON Club programs over time.</p>
                  <p>Benefits that are promotional, event-specific, or partner-provided may change.</p>
                  <p>
                    However, TRITON will not retrospectively remove an already-acquired Registration Protection entitlement
                    from an active member in respect of an eligible registration except where required by law, necessary
                    because of fraud or misuse, or otherwise expressly permitted under these Terms.
                  </p>
                  <p>Material changes to paid membership terms will be communicated appropriately.</p>
                </div>
              </section>

              {/* Section 21: EVENT RULES */}
              <section id="event-rules" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  21. EVENT RULES
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>TRITON Club membership does not exempt an athlete from:</p>
                  <ul className="space-y-1.5 list-disc list-inside text-gray-300 pl-2">
                    <li>TRITON competition rules;</li>
                    <li>Event regulations;</li>
                    <li>Eligibility requirements;</li>
                    <li>Qualification requirements;</li>
                    <li>Safety rules;</li>
                    <li>Registration deadlines;</li>
                    <li>Anti-doping requirements;</li>
                    <li>Athlete conduct standards; or</li>
                    <li>Applicable laws and regulations.</li>
                  </ul>
                  <p className="font-bold text-white pt-1">
                    Club membership provides benefits. It does not provide sporting privileges or preferential treatment
                    during competition.
                  </p>
                </div>
              </section>

              {/* Section 22: FORCE MAJEURE */}
              <section id="force-majeure" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  22. FORCE MAJEURE AND EVENT CANCELLATION
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>The Club Registration Protection benefit is not an event-cancellation guarantee.</p>
                  <p>
                    Where an event cannot proceed as planned because of Force Majeure or other circumstances outside the
                    athlete’s personal decision to participate, the matter will be handled under the applicable event terms
                    and relevant law.
                  </p>
                  <p>
                    An athlete may not use Registration Protection to convert an event-wide cancellation or Force Majeure
                    situation into an individual Club cancellation claim.
                  </p>
                </div>
              </section>

              {/* Section 23: LIABILITY */}
              <section id="liability" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  23. LIABILITY
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    Nothing in these Terms excludes or limits liability where such exclusion or limitation is prohibited by law.
                  </p>
                  <p>
                    TRITON is not responsible under the Club Registration Protection benefit for indirect losses associated
                    with an athlete’s cancellation, including travel, accommodation, equipment, lost earnings, or other
                    consequential expenses.
                  </p>
                  <p>
                    The maximum reimbursement available under a valid Registration Protection claim is the eligible race
                    registration fee actually paid.
                  </p>
                </div>
              </section>

              {/* Section 24: INTERPRETATION */}
              <section id="interpretation" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  24. INTERPRETATION
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    If an event-specific benefit conflicts with these general Club Terms, the specific written terms
                    communicated for that benefit will apply to that benefit, subject to mandatory law.
                  </p>
                  <p>
                    If any provision of these Terms is found invalid or unenforceable, the remaining provisions remain
                    effective to the extent permitted by law.
                  </p>
                  <p>Nothing in these Terms limits statutory consumer rights that cannot legally be waived.</p>
                </div>
              </section>

              {/* Section 25: GOVERNING ENTITY & CONTACT */}
              <section id="governing-law-contact" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  25. GOVERNING ENTITY, LAW, AND CONTACT
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>The TRITON Pass and TRITON Club Pass are operated by:</p>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 text-white space-y-1 font-mono text-xs sm:text-sm">
                    <p className="font-bold text-base text-triton-red font-sans">
                      TRITON WORLD SERIES GLOBAL GROUP, LLC
                    </p>
                    <p>1560 Sawgrass Corp Pkwy., #400</p>
                    <p>Sunrise, FL 33323, USA</p>
                    <p className="pt-2 text-gray-400">EIN / Tax ID: 99-4722749</p>
                    <p className="pt-1">
                      Contact:{" "}
                      <a
                        href="mailto:triton@tritonworldseries.com"
                        className="text-triton-red font-bold hover:underline font-sans"
                      >
                        triton@tritonworldseries.com
                      </a>
                    </p>
                  </div>
                  <p className="pt-2">
                    These Terms are governed by the laws of the State of Florida, USA, subject to any mandatory consumer
                    rights or jurisdictional protections applicable to the member.
                  </p>
                </div>
              </section>

              {/* Final Highlights Banner */}
              <div className="mt-12 sm:mt-16 bg-linear-to-b from-triton-red/20 via-neutral-900 to-neutral-900 border border-triton-red/30 rounded-2xl sm:rounded-3xl p-6 sm:p-10 space-y-4 sm:space-y-6 shadow-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 sm:pb-6">
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest text-triton-red block mb-1">
                      Athlete Membership
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-black uppercase text-white">TRITON CLUB PASS</h3>
                    <p className="text-sm font-bold uppercase tracking-wider text-gray-300">RACE WITH FREEDOM.</p>
                  </div>
                  <div className="sm:text-right">
                    <span className="font-mono font-black text-3xl sm:text-4xl text-triton-red block">€49</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">/ YEAR</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-triton-red shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">100% Registration Protection:</strong> Cancel one eligible race up to
                      7 days before race day and get your eligible registration fee back.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-triton-red shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Free Deferral:</strong> Plans change later? Defer an eligible
                      registration up to 48 hours before race day.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 sm:col-span-2">
                    <CheckCircle2 className="w-5 h-5 text-triton-red shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Club Privileges:</strong> Priority Access. Preferred Prices. Club
                      Benefits.
                    </span>
                  </div>
                </div>

                <div className="pt-2 text-center text-xs sm:text-sm font-black uppercase tracking-widest text-white/70">
                  YOUR RACE. YOUR IDENTITY. YOUR TRITON.
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
