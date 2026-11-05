import React from "react";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import {
  Shield,
  ChevronRight,
  Scale,
  CheckCircle2,
  Award,
  Zap,
  Mail,
  Heart,
  Calendar,
  Gift,
  Tag,
  ShoppingBag,
  Bell,
  Clock,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TRITON Pass & Club Pass Terms & Conditions | TRITON World Series",
  description:
    "Terms and conditions governing the TRITON Pass and TRITON Club Pass membership programmes operated by TRITON World Series.",
};

export default function TritonPassPage() {
  const navItems = [
    { id: "triton-pass", label: "1. TRITON Pass" },
    { id: "club-pass", label: "2. TRITON Club Pass" },
    { id: "club-benefits", label: "3. Membership Benefits" },
    { id: "change-of-heart", label: "4. Change of Heart" },
    { id: "free-deferral", label: "5. Free Race Deferral" },
    { id: "qualification-eligibility", label: "6. Qualification & Eligibility" },
    { id: "calculation-payment", label: "7. Calculation & Payment of Refund" },
    { id: "individual-cancellation", label: "8. Individual Race Cancellation" },
    { id: "lrh-relationship", label: "9. Relationship with LRH" },
    { id: "requests-process", label: "10. Change of Heart & Deferral Requests" },
    { id: "membership-fee", label: "11. Membership Fee & Payment" },
    { id: "membership-period", label: "12. Membership Period, Expiry & Renewal" },
    { id: "priority-pricing", label: "13. Priority Registration & Club Pricing" },
    { id: "store-partner-privileges", label: "14. Store, Partner & Promotional Privileges" },
    { id: "personal-non-transferable", label: "15. Personal & Non-Transferable" },
    { id: "fair-use-misuse", label: "16. Fair Use and Misuse" },
    { id: "wallet-functionality", label: "17. Digital Wallet Functionality" },
    { id: "communications", label: "18. Communications" },
    { id: "personal-data", label: "19. Personal Data and Privacy" },
    { id: "changes-benefits", label: "20. Changes to Membership Benefits" },
    { id: "event-rules", label: "21. Event Rules" },
    { id: "force-majeure", label: "22. Event Cancellation & Force Majeure" },
    { id: "liability", label: "23. Liability" },
    { id: "interpretation", label: "24. Interpretation" },
    { id: "governing-law-contact", label: "25. Governing Entity, Law and Contact" },
  ];

  return (
    <div className="bg-neutral-950 min-h-screen text-white flex flex-col pt-16 sm:pt-20">
      <main className="grow">
        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 md:py-24 border-b border-white/5">
          <Link
            href="/triton-pass"
            className="mb-6 sm:mb-8 inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold uppercase tracking-widest text-xs">
              Back to TRITON Pass
            </span>
          </Link>

          <div className="flex items-center gap-3 text-triton-red mb-4 sm:mb-6">
            <Scale className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-xs">
              Membership Programmes
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white leading-tight sm:leading-none mb-4 sm:mb-6">
            TRITON Pass &amp;{" "}
            <span className="text-triton-red italic">TRITON Club Pass</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-widest text-gray-300 mb-4">
            Terms &amp; Conditions
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-bold">
            Effective Date: November 2026
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
                  These Terms &amp; Conditions govern the{" "}
                  <strong className="text-white">TRITON Pass</strong> and{" "}
                  <strong className="text-white">TRITON Club Pass</strong>{" "}
                  programmes operated by TRITON World Series (“TRITON”).
                </p>
                <p>
                  By activating a TRITON Pass or purchasing a TRITON Club Pass, the
                  athlete accepts the applicable Terms &amp; Conditions, subject to
                  mandatory consumer rights.
                </p>
                <p>
                  Individual TRITON events are organized by authorized Local Rights
                  Holders (“LRHs”) or event organizers. Their applicable race
                  registration terms and event regulations also apply.
                </p>
                <p>
                  The <strong className="text-white">TRITON Club Pass</strong> is an
                  annual athlete membership offering digital identity, registration
                  privileges, preferred prices and other participation benefits. At
                  participating events, membership also provides access to contractual
                  race-entry cancellation and deferral conditions.
                </p>
                <p>
                  TRITON administers these Club privileges and arranges eligible
                  refunds directly to Club members.
                </p>
                <p className="text-xs sm:text-sm text-gray-400 font-semibold pt-1 border-t border-white/5">
                  Nothing in these Terms limits mandatory consumer rights.
                </p>
              </div>

              {/* Section 1: TRITON PASS */}
              <section id="triton-pass" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  1. TRITON PASS — FREE DIGITAL ATHLETE CARD
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    The TRITON Pass is TRITON's free digital athlete credential,
                    available to athletes registered for eligible TRITON World Series
                    events.
                  </p>
                  <p>
                    The Pass may be delivered through email or supported digital-wallet
                    platforms, including{" "}
                    <strong className="text-white">Apple Wallet</strong> and{" "}
                    <strong className="text-white">Google Wallet</strong>.
                  </p>
                  <p>
                    There is no membership fee for the standard TRITON Pass.
                  </p>

                  <div className="space-y-3 pt-2">
                    <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-wide">
                      1.1 TRITON Athlete Status
                    </h3>
                    <p>
                      The TRITON Pass identifies the holder as a TRITON athlete and may
                      display:
                    </p>
                    <ul className="space-y-1.5 list-disc list-inside text-gray-300 pl-2">
                      <li>Athlete name;</li>
                      <li>Permanent TRITON Athlete ID;</li>
                      <li>Registered race distance;</li>
                      <li>Athlete photograph, where applicable;</li>
                      <li>Nationality;</li>
                      <li>Pass or membership status;</li>
                      <li>Relevant race information; and</li>
                      <li>Additional functionality introduced by TRITON</li>
                    </ul>
                  </div>

                  <div className="space-y-3 pt-2">
                    <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-wide">
                      1.2 Direct Information
                    </h3>
                    <p>
                      TRITON Pass holders may receive communications necessary to
                      administer their Pass and participation in TRITON events,
                      including race information, operational updates, reminders and
                      registration information.
                    </p>
                    <p>
                      TRITON may also provide information about new events, TRITON
                      news, selected promotions and partner offers where permitted by
                      applicable law and the athlete's communication preferences.
                    </p>
                    <p>
                      Marketing communications requiring consent will only be sent where
                      valid consent or another lawful basis exists.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 pt-1">
                      The availability of digital-wallet communications depends on the
                      athlete's device, wallet provider, notification settings and
                      supporting technology.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      TRITON may suspend or deactivate a free Pass for legitimate
                      operational, technical or security reasons, subject to applicable
                      law.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: TRITON CLUB PASS */}
              <section id="club-pass" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  2. TRITON CLUB PASS — ANNUAL MEMBERSHIP
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <div className="bg-triton-red/10 border border-triton-red/30 rounded-2xl p-5 sm:p-6 text-white">
                    <span className="text-xs font-black uppercase tracking-widest text-triton-red block mb-1">
                      Annual Athlete Membership
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-2">
                      RACE WITH FREEDOM.
                    </h3>
                    <p className="text-base sm:text-lg font-mono font-bold text-triton-red">
                      Annual Membership Price: €19
                    </p>
                  </div>

                  <p>
                    The TRITON Club Pass is TRITON's premium annual athlete membership,
                    operating on a calendar-year basis.
                  </p>
                  <p>
                    Membership is valid from successful purchase and activation until{" "}
                    <strong className="text-white">31 December</strong> of the same
                    calendar year, regardless of the purchase date.
                  </p>
                  <p>
                    The annual fee is fixed at{" "}
                    <strong className="text-white">€19</strong> and is not prorated
                    according to the purchase date.
                  </p>
                  <p>
                    Membership provides additional privileges beyond the free TRITON
                    Pass, including selected registration conditions, member offers and
                    access to participating event cancellation and deferral privileges.
                  </p>
                  <p>
                    The TRITON Club Pass is an additional digital membership credential
                    and does not replace the standard TRITON Pass.
                  </p>
                  <p>
                    Membership does not constitute registration for a particular race or
                    guarantee entry into any event.
                  </p>
                </div>
              </section>

              {/* Section 3: TRITON CLUB MEMBERSHIP BENEFITS */}
              <section id="club-benefits" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  3. TRITON CLUB MEMBERSHIP BENEFITS
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    During an active membership period, eligible Club members may access
                    the following privileges:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-2">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1.5">
                      <h4 className="text-sm font-black uppercase text-white flex items-center gap-2">
                        <Heart className="w-4 h-4 text-triton-red shrink-0" />
                        3.1 CHANGE OF HEART — RACE ENTRY FLEXIBILITY
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400">
                        At participating TRITON events, eligible Club members have access
                        to a contractual race-entry cancellation option provided under
                        the event organizer's registration conditions. This allows a
                        member to cancel one eligible race registration per calendar
                        year up to 48 hours before the scheduled race start without
                        providing any explanation, receiving a refund of 80% of the
                        eligible registration fee actually paid. Available after the
                        60-day qualification period.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1.5">
                      <h4 className="text-sm font-black uppercase text-white flex items-center gap-2">
                        <Zap className="w-4 h-4 text-triton-red shrink-0" />
                        3.2 FREE RACE DEFERRAL
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Eligible Club members may request to transfer a race registration
                        to the next edition of the same TRITON event, without a TRITON
                        deferral fee, up to 48 hours before the scheduled race start,
                        subject to applicable conditions.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1.5">
                      <h4 className="text-sm font-black uppercase text-white flex items-center gap-2">
                        <Award className="w-4 h-4 text-triton-red shrink-0" />
                        3.3 PREMIUM ATHLETE STATUS
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400">
                        TRITON Club premium membership status displayed through the
                        athlete's TRITON Club digital Wallet Pass, in addition to the
                        free TRITON Pass.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1.5">
                      <h4 className="text-sm font-black uppercase text-white flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-triton-red shrink-0" />
                        3.4 PERMANENT TRITON ATHLETE ID
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Continued use of the athlete's unique TRITON Athlete ID.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1.5">
                      <h4 className="text-sm font-black uppercase text-white flex items-center gap-2">
                        <Bell className="w-4 h-4 text-triton-red shrink-0" />
                        3.5 PRIVILEGED DIRECT INFORMATION
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Access to selected TRITON communications, announcements and
                        member opportunities.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1.5">
                      <h4 className="text-sm font-black uppercase text-white flex items-center gap-2">
                        <Clock className="w-4 h-4 text-triton-red shrink-0" />
                        3.6 PRIORITY REGISTRATION
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Early access to registration for selected TRITON events.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1.5">
                      <h4 className="text-sm font-black uppercase text-white flex items-center gap-2">
                        <Tag className="w-4 h-4 text-triton-red shrink-0" />
                        3.7 PRIVILEGED REGISTRATION PRICES
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Access to selected preferred opening prices and Club registration
                        conditions.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1.5">
                      <h4 className="text-sm font-black uppercase text-white flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4 text-triton-red shrink-0" />
                        3.8 SPECIAL TRITON STORE PRICES
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Access to selected Club merchandise prices.
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1.5 sm:col-span-2">
                      <h4 className="text-sm font-black uppercase text-white flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-triton-red shrink-0" />
                        3.9 RACE-TO-RACE OFFERS
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Access to selected promotions, experiences and partner benefits
                        across participating TRITON events.
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-500 pt-2">
                    Benefits may vary by event, country and participating partner.
                    Event-specific and promotional privileges are subject to their
                    published conditions.
                  </p>
                </div>
              </section>

              {/* Section 4: CHANGE OF HEART */}
              <section id="change-of-heart" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  4. CHANGE OF HEART — RACE ENTRY FLEXIBILITY
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    Change of Heart is a contractual race-entry cancellation privilege
                    available to eligible TRITON Club members at participating events.
                  </p>
                  <p>
                    The privilege forms part of the participating event's registration
                    conditions and permits an eligible member to voluntarily cancel one
                    qualifying race registration per calendar year.
                  </p>
                  <p>
                    TRITON administers the privilege, verifies eligibility and arranges
                    the agreed refund directly to the athlete.
                  </p>
                  <p>
                    <strong className="text-white">
                      No explanation or supporting documentation is required.
                    </strong>
                  </p>
                  <p>
                    The privilege concerns the cancellation conditions of the race
                    registration itself. It does not provide compensation for personal
                    circumstances, financial losses or expenses unrelated to the race
                    registration.
                  </p>

                  <div className="space-y-3 pt-2">
                    <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-wide">
                      4.1 EXERCISE DEADLINE
                    </h3>
                    <p>
                      The member's request must be received at least{" "}
                      <strong className="text-white">48 hours</strong> before the
                      officially scheduled start of the registered race, calculated in
                      the event's local time.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-300 italic pl-3 border-l-2 border-triton-red/50">
                      For example, where a race starts on Sunday at 08:00, the request
                      must be received by Friday at 08:00.
                    </p>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-1 font-mono text-xs sm:text-sm">
                      <p>
                        Requests must be submitted to:{" "}
                        <a
                          href="mailto:triton@tritonworldseries.com"
                          className="text-triton-red font-bold hover:underline"
                        >
                          triton@tritonworldseries.com
                        </a>
                      </p>
                      <p className="text-gray-300">
                        Subject: TRITON CLUB PASS — CHANGE OF HEART
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Requests received after the applicable deadline are not eligible
                      for this privilege.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-wide">
                      4.2 ANNUAL RACE REGISTRATION FLEXIBILITY
                    </h3>
                    <p>
                      Each eligible TRITON Club member may exercise the Change of Heart
                      privilege <strong className="text-white">once</strong> during the
                      calendar year for which membership has been purchased.
                    </p>
                    <p>
                      For participating events, this privilege allows the member to
                      terminate one eligible race registration under the event
                      organizer's published cancellation conditions and receive{" "}
                      <strong className="text-white">
                        80% of the eligible registration fee actually paid
                      </strong>
                      .
                    </p>
                    <p>
                      The request must be received at least 48 hours before the scheduled
                      race start and may only be submitted after completion of the
                      60-day membership qualification period.
                    </p>
                    <p>
                      Once exercised, this privilege is considered used for that
                      calendar year.
                    </p>
                    <p>
                      Unused privileges expire on 31 December and cannot be accumulated
                      or transferred to subsequent years.
                    </p>
                    <p>
                      The privilege constitutes an agreed cancellation condition of the
                      participating event's registration contract.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-wide">
                      4.3 EFFECT OF EXERCISING THE OPTION
                    </h3>
                    <p>
                      An accepted Change of Heart request terminates the athlete's
                      registration for the relevant event.
                    </p>
                    <p>
                      The athlete may not use the cancelled registration to participate,
                      transfer the entry, defer it or obtain another refund for the same
                      registration.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-wide">
                      4.4 NO EXPLANATION REQUIRED
                    </h3>
                    <p>
                      The athlete may exercise the Change of Heart privilege for any
                      personal reason or without stating a reason.
                    </p>
                    <p>
                      Eligibility depends on membership status, registration eligibility
                      and compliance with the published deadlines, rather than the
                      circumstances motivating cancellation.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: FREE RACE DEFERRAL */}
              <section id="free-deferral" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  5. FREE RACE DEFERRAL
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    Eligible Club members may request to defer a race registration up to{" "}
                    <strong className="text-white">48 hours</strong> before the
                    scheduled race start.
                  </p>
                  <p>
                    A qualifying deferral transfers the registration to the next edition
                    of the same TRITON event, provided that edition takes place and the
                    relevant registration category remains available.
                  </p>
                  <p>The following conditions apply:</p>
                  <ol className="space-y-2 list-decimal list-inside text-gray-300 pl-2">
                    <li>No TRITON deferral fee is charged.</li>
                    <li>The request must be received before the applicable deadline.</li>
                    <li>
                      The next edition must take place and accept the relevant
                      registration category.
                    </li>
                    <li>
                      Where the new registration category or price is higher, the
                      athlete may be required to pay the difference.
                    </li>
                    <li>
                      Transfer to another TRITON event requires express authorization.
                    </li>
                    <li>Deferral does not generate a cash refund.</li>
                    <li>
                      Repeated deferrals are not permitted unless expressly authorized.
                    </li>
                  </ol>
                  <p>
                    A member cannot receive both a Change of Heart refund and a
                    deferral for the same registration.
                  </p>
                  <p>
                    The 60-day qualification period also applies to Free Race Deferral.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    If the next edition does not take place, the athlete's rights will be
                    determined by the applicable registration terms, any specific
                    deferral agreement and mandatory law.
                  </p>
                </div>
              </section>

              {/* Section 6: MEMBERSHIP QUALIFICATION AND ELIGIBILITY */}
              <section id="qualification-eligibility" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  6. MEMBERSHIP QUALIFICATION AND ELIGIBILITY
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-wide">
                      6.1 ACTIVE MEMBERSHIP
                    </h3>
                    <p>
                      The athlete must hold an active TRITON Club membership when
                      submitting a Change of Heart or Free Race Deferral request.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-wide">
                      6.2 SIXTY-DAY QUALIFICATION PERIOD
                    </h3>
                    <p>
                      Change of Heart and Free Race Deferral become available after{" "}
                      <strong className="text-white">60 full calendar days</strong> have
                      elapsed from the successful purchase of TRITON Club membership.
                    </p>
                    <p>
                      The qualification period begins at the recorded date and time of
                      membership purchase.
                    </p>
                    <p>
                      Membership must remain active throughout the qualification period
                      and when the privilege is exercised.
                    </p>
                    <p>
                      Purchasing membership does not create an immediate cancellation or
                      deferral entitlement.
                    </p>
                    <p>
                      The qualification period does not extend the membership
                      expiration date. Members purchasing fewer than 60 days before 31
                      December may therefore be unable to exercise these privileges
                      during that calendar year.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Other Club privileges, including premium athlete status and
                      available member offers, may be used from membership activation,
                      subject to their specific conditions.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-wide">
                      6.3 EXISTING REGISTRATIONS
                    </h3>
                    <p>
                      Membership may be purchased before or after registering for an
                      eligible TRITON event.
                    </p>
                    <p>
                      An existing registration may qualify after completion of the
                      60-day period, provided the registration remains valid, the
                      relevant event participates in the programme and the applicable
                      deadline has not passed.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-wide">
                      6.4 PARTICIPATING EVENTS
                    </h3>
                    <p>
                      Change of Heart and Free Race Deferral apply only to official
                      TRITON events whose organizers have incorporated these privileges
                      into their registration conditions.
                    </p>
                    <p>
                      Participating events and any applicable local conditions shall be
                      identified before the relevant purchase.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-wide">
                      6.5 PERSONAL REGISTRATION
                    </h3>
                    <p>
                      The registration must belong to the Club member personally.
                      Membership privileges cannot be exercised for another athlete's
                      registration.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-wide">
                      6.6 ANNUAL ALLOWANCE
                    </h3>
                    <p>
                      The member must have an unused Change of Heart privilege for the
                      relevant calendar year.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-wide">
                      6.7 DEADLINES
                    </h3>
                    <p>
                      All requests must comply with the applicable deadlines and official
                      submission procedures.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7: CALCULATION AND PAYMENT OF REFUND */}
              <section id="calculation-payment" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  7. CALCULATION AND PAYMENT OF THE REGISTRATION REFUND
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    When an eligible member exercises the Change of Heart privilege,
                    TRITON arranges a refund equal to{" "}
                    <strong className="text-white">
                      80% of the eligible race registration fee actually paid
                    </strong>
                    .
                  </p>
                  <p>
                    The calculation is based on the amount paid for the eligible race
                    entry after any applicable discounts.
                  </p>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 space-y-2 text-sm">
                    <span className="text-xs font-bold uppercase tracking-widest text-triton-red block">
                      Calculation Example
                    </span>
                    <div className="space-y-1 font-mono text-gray-300">
                      <p className="flex justify-between">
                        <span>Eligible race registration fee:</span>
                        <strong className="text-white">€200</strong>
                      </p>
                      <p className="flex justify-between text-triton-red">
                        <span>Refund to athlete (80%):</span>
                        <strong className="text-triton-red">€160</strong>
                      </p>
                      <p className="flex justify-between text-gray-500">
                        <span>Amount retained under cancellation conditions (20%):</span>
                        <span>€40</span>
                      </p>
                    </div>
                  </div>

                  <p>
                    Unless expressly included in the registration price, the privilege
                    does not extend to separately purchased or charged items,
                    including:
                  </p>
                  <ul className="space-y-1 list-disc list-inside text-gray-300 pl-2 text-xs sm:text-sm">
                    <li>Payment-processing and banking fees;</li>
                    <li>Merchandise;</li>
                    <li>Donations;</li>
                    <li>Optional products;</li>
                    <li>Photographs;</li>
                    <li>Travel and flights;</li>
                    <li>Accommodation;</li>
                    <li>Visas;</li>
                    <li>Equipment rental;</li>
                    <li>Training expenses;</li>
                    <li>Third-party services; and</li>
                    <li>
                      Other separately purchased products or services not expressly
                      included in the eligible race entry fee.
                    </li>
                  </ul>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Any excluded fees must be clearly disclosed before purchase.
                    Exclusions apply only to the extent permitted by applicable law.
                  </p>
                  <p>
                    The contractual Change of Heart refund cannot exceed 80% of the
                    eligible registration fee actually paid.
                  </p>
                  <p>
                    TRITON processes eligible refunds directly to the athlete. The
                    athlete is not required to contact the LRH or arrange any financial
                    settlement with the event organizer.
                  </p>
                </div>
              </section>

              {/* Section 8: INDIVIDUAL RACE CANCELLATION */}
              <section id="individual-cancellation" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  8. INDIVIDUAL RACE CANCELLATION
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    Change of Heart applies to the athlete's voluntary decision not to
                    participate in an eligible event.
                  </p>
                  <p>
                    It is separate from the rights and remedies applicable when the
                    event organizer cancels, postpones, relocates or materially changes
                    an event.
                  </p>
                  <p>
                    Where an event is affected by weather, natural disasters,
                    public-authority decisions, safety restrictions, force majeure or
                    other circumstances affecting event delivery, the applicable event
                    registration terms and mandatory consumer law determine the
                    athlete's rights.
                  </p>
                  <p>
                    The Club privilege does not replace or reduce any statutory or
                    contractual remedy otherwise available to the athlete.
                  </p>
                  <p>
                    An athlete may not receive duplicate refunds for the same
                    registration.
                  </p>
                </div>
              </section>

              {/* Section 9: RELATIONSHIP WITH LOCAL RIGHTS HOLDERS */}
              <section id="lrh-relationship" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  9. RELATIONSHIP WITH LOCAL RIGHTS HOLDERS
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    TRITON events are organized and delivered by authorized Local
                    Rights Holders and event organizers.
                  </p>
                  <p>
                    At participating events, Change of Heart and Free Race Deferral form
                    part of the applicable race registration conditions.
                  </p>
                  <p>
                    TRITON acts as the designated administrator of these Club privileges
                    and is responsible for receiving requests, verifying membership
                    eligibility and arranging eligible refunds directly to Club members.
                  </p>
                  <p>
                    The athlete may exercise these privileges through TRITON without
                    contacting the event organizer separately.
                  </p>
                  <p>
                    Any financial or administrative arrangements between TRITON and
                    participating event organizers are governed by separate commercial
                    agreements and do not affect the athlete's entitlement under these
                    Terms &amp; Conditions.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Nothing in this section limits the athlete's statutory rights
                    against the relevant event organizer.
                  </p>
                </div>
              </section>

              {/* Section 10: CHANGE OF HEART AND DEFERRAL REQUESTS */}
              <section id="requests-process" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  10. CHANGE OF HEART AND DEFERRAL REQUESTS
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 space-y-2">
                    <p className="text-sm text-gray-300 font-mono">
                      Requests must be submitted to:{" "}
                      <a
                        href="mailto:triton@tritonworldseries.com"
                        className="text-triton-red font-bold hover:underline font-sans"
                      >
                        triton@tritonworldseries.com
                      </a>
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400 font-mono">
                      Subject: TRITON CLUB PASS — CHANGE OF HEART / DEFERRAL
                    </p>
                  </div>

                  <p>The request must identify:</p>
                  <ul className="space-y-1.5 list-disc list-inside text-gray-300 pl-2">
                    <li>Club member's full name;</li>
                    <li>TRITON Athlete ID or membership reference;</li>
                    <li>Event name and location;</li>
                    <li>Race registration reference;</li>
                    <li>Whether Change of Heart or Free Race Deferral is requested; and</li>
                    <li>Any additional information reasonably necessary to verify eligibility.</li>
                  </ul>

                  <p>
                    A request is considered received when it reaches the designated
                    TRITON email system.
                  </p>
                  <p>
                    TRITON may verify eligibility with the relevant LRH and registration
                    provider.
                  </p>
                  <p>
                    Approved refunds will normally be processed through the original
                    payment method where technically possible. Where necessary, an
                    alternative secure payment method may be arranged.
                  </p>
                  <p>
                    Refunds will ordinarily be processed within{" "}
                    <strong className="text-white">30 calendar days</strong> of
                    acceptance, unless applicable law requires a shorter period.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    TRITON may introduce an online request portal or another official
                    submission channel, provided members are informed of the applicable
                    procedure.
                  </p>
                </div>
              </section>

              {/* Section 11: MEMBERSHIP FEE AND PAYMENT */}
              <section id="membership-fee" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  11. MEMBERSHIP FEE AND PAYMENT
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    TRITON Club Pass costs{" "}
                    <strong className="text-white">€19 per calendar year</strong>.
                  </p>
                  <p>
                    The membership fee is separate from race registration fees and is
                    not prorated or reduced for purchases made during the year.
                  </p>
                  <p>
                    Membership expires on 31 December of the year of purchase.
                  </p>
                  <p>
                    Membership provides access to the Club programme and its associated
                    privileges. It is not a payment toward a specific race
                    registration.
                  </p>
                  <p>
                    Any applicable taxes and additional payment charges shall be
                    disclosed before purchase.
                  </p>
                  <p>
                    Membership does not automatically renew unless automatic renewal is
                    expressly offered and separately authorized by the member.
                  </p>

                  <div className="space-y-2 pt-2">
                    <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-wide">
                      11.1 MEMBERSHIP CANCELLATION
                    </h3>
                    <p>
                      Members may request cancellation of their membership.
                    </p>
                    <p>
                      Cancellation does not automatically entitle the member to a
                      refund of the annual membership fee. Any membership-fee refund is
                      subject to applicable purchase conditions and mandatory consumer
                      rights.
                    </p>
                    <p>
                      Where statutory withdrawal rights apply, including rights
                      relating to online purchases and digital services, TRITON shall
                      comply with the applicable requirements.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      No provision of these Terms limits statutory cancellation or
                      withdrawal rights.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 12: MEMBERSHIP PERIOD, EXPIRY AND RENEWAL */}
              <section id="membership-period" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  12. MEMBERSHIP PERIOD, EXPIRY AND RENEWAL
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    TRITON Club membership operates on a calendar-year basis, from{" "}
                    <strong className="text-white">1 January to 31 December</strong>.
                  </p>
                  <p>
                    For memberships purchased after 1 January, validity begins on the
                    date of successful purchase and ends on 31 December of the same
                    year.
                  </p>
                  <p>
                    Membership expires automatically at the end of 31 December unless
                    renewed for the following calendar year.
                  </p>
                  <p>
                    Renewal requires payment of the applicable annual membership fee.
                  </p>
                  <p>
                    A member renewing for the following calendar year before their
                    existing membership expires retains uninterrupted membership
                    status. For uninterrupted renewals, the 60-day qualification
                    period does not restart.
                  </p>
                  <p>
                    Where membership expires without renewal, a subsequent purchase
                    constitutes a new membership and the 60-day qualification period
                    applies again.
                  </p>
                  <p>
                    Each calendar-year membership includes{" "}
                    <strong className="text-white">one Change of Heart privilege</strong>
                    , subject to eligibility and the applicable conditions. Unused
                    privileges do not carry forward to the following calendar year.
                  </p>
                  <p>
                    A Change of Heart request submitted and accepted during an active
                    membership year counts against that year's allowance, even where the
                    relevant race is scheduled for the following calendar year.
                  </p>
                  <p>
                    An accepted cancellation remains valid after membership expiry.
                  </p>
                  <p>
                    Expiration of Club membership does not remove the athlete's
                    permanent TRITON Athlete ID.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    The standard free TRITON Pass may remain available, subject to
                    technical requirements.
                  </p>
                </div>
              </section>

              {/* Section 13: PRIORITY REGISTRATION AND CLUB PRICING */}
              <section id="priority-pricing" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  13. PRIORITY REGISTRATION AND CLUB PRICING
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    Priority registration and preferred opening prices may vary by event.
                  </p>
                  <p>
                    Membership does not guarantee entry into every event. Event
                    capacities, qualification requirements, registration deadlines and
                    other applicable restrictions continue to apply.
                  </p>
                  <p>
                    Unused priority privileges have no cash value and cannot be
                    transferred.
                  </p>
                </div>
              </section>

              {/* Section 14: STORE, PARTNER AND PROMOTIONAL PRIVILEGES */}
              <section id="store-partner-privileges" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  14. STORE, PARTNER AND PROMOTIONAL PRIVILEGES
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    TRITON may offer members special prices, promotions, experiences and
                    opportunities through TRITON, LRHs and commercial partners.
                  </p>
                  <p>
                    These privileges may vary by country, event and partner. They may be
                    subject to availability, validity periods, quantity limits and
                    additional published conditions.
                  </p>
                  <p>
                    Promotional privileges have no cash value unless expressly stated
                    otherwise.
                  </p>
                  <p>
                    Changes to promotional benefits shall not retrospectively remove
                    rights already acquired by members.
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
                    The TRITON Pass, TRITON Club Pass, Athlete ID and associated
                    privileges are personal to the registered athlete.
                  </p>
                  <p>
                    They may not be sold, transferred, shared or used by another person.
                  </p>
                  <p>
                    Change of Heart and Free Race Deferral apply only to eligible
                    registrations held in the member's own name.
                  </p>
                  <p>
                    TRITON may request reasonable identity verification.
                  </p>
                </div>
              </section>

              {/* Section 16: FAIR USE AND MISUSE */}
              <section id="fair-use-misuse" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  16. FAIR USE AND MISUSE
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    TRITON may suspend or refuse membership privileges where there is
                    reasonable evidence of fraud, deliberate misrepresentation,
                    duplicate identities, unauthorized transfer, manipulation of
                    cancellation procedures or attempted duplicate refunds.
                  </p>
                  <p>
                    Any action shall be proportionate and consistent with applicable
                    law.
                  </p>
                  <p>
                    This provision does not affect rights that cannot legally be
                    excluded.
                  </p>
                </div>
              </section>

              {/* Section 17: DIGITAL WALLET FUNCTIONALITY */}
              <section id="wallet-functionality" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  17. DIGITAL WALLET FUNCTIONALITY
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    TRITON Pass and TRITON Club Pass may use Apple Wallet, Google Wallet,
                    PassKit and other technology services.
                  </p>
                  <p>
                    TRITON cannot guarantee uninterrupted availability of third-party
                    platforms.
                  </p>
                  <p>
                    Functionality may depend on device compatibility, internet access,
                    operating systems, notification permissions and geographic
                    availability.
                  </p>
                  <p>
                    Failure to receive a digital-wallet notification does not change
                    published race schedules, cancellation deadlines or other official
                    requirements.
                  </p>
                </div>
              </section>

              {/* Section 18: COMMUNICATIONS */}
              <section id="communications" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  18. COMMUNICATIONS
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    TRITON may send communications necessary to administer Passes,
                    memberships, race registrations and Club privileges.
                  </p>
                  <p>
                    These may include operational updates, safety notices, membership
                    information, cancellation confirmations, renewal information and
                    relevant service announcements.
                  </p>
                  <p>
                    Marketing communications and partner promotions will be managed in
                    accordance with applicable privacy, electronic-communications and
                    consent requirements.
                  </p>
                </div>
              </section>

              {/* Section 19: PERSONAL DATA AND PRIVACY */}
              <section id="personal-data" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  19. PERSONAL DATA AND PRIVACY
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    TRITON processes personal information necessary to administer Athlete
                    IDs, digital Passes, memberships, registrations, cancellations,
                    deferrals and communications.
                  </p>
                  <p>
                    Personal information will be handled according to the applicable
                    TRITON Privacy Policy and relevant data-protection legislation.
                  </p>
                  <p>
                    Information may be shared with authorized LRHs, registration
                    providers, payment providers, timing providers and other service
                    providers where necessary and legally permitted.
                  </p>
                  <p>
                    Appropriate data-security and privacy safeguards shall apply.
                  </p>
                </div>
              </section>

              {/* Section 20: CHANGES TO MEMBERSHIP BENEFITS */}
              <section id="changes-benefits" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  20. CHANGES TO MEMBERSHIP BENEFITS
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    TRITON may develop, improve or modify its membership programmes.
                  </p>
                  <p>
                    Promotional and event-specific benefits may change subject to
                    applicable law.
                  </p>
                  <p>
                    Material changes to paid membership terms shall be communicated
                    appropriately.
                  </p>
                  <p>
                    TRITON shall not retrospectively remove a validly acquired Change of
                    Heart entitlement for an eligible registration, except where
                    required by law or justified by fraud or material misuse.
                  </p>
                  <p>
                    Changes to membership pricing shall not affect an already purchased
                    membership period unless lawfully agreed.
                  </p>
                </div>
              </section>

              {/* Section 21: EVENT RULES */}
              <section id="event-rules" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  21. EVENT RULES
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    Club membership does not exempt athletes from TRITON competition
                    rules, event regulations, qualification requirements, safety
                    requirements, anti-doping rules, registration deadlines or
                    applicable law.
                  </p>
                  <p>
                    Membership provides participation and commercial privileges, not
                    preferential treatment during sporting competition.
                  </p>
                </div>
              </section>

              {/* Section 22: EVENT CANCELLATION AND FORCE MAJEURE */}
              <section id="force-majeure" className="space-y-6 scroll-mt-32">
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  22. EVENT CANCELLATION AND FORCE MAJEURE
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>
                    Change of Heart concerns the athlete's voluntary cancellation of
                    their own race entry.
                  </p>
                  <p>
                    Where an event is cancelled, postponed or materially altered, the
                    athlete's rights shall be determined under the applicable event
                    registration terms and mandatory law.
                  </p>
                  <p>
                    The Club privilege does not replace the organizer's obligations in
                    such circumstances.
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
                    Nothing in these Terms excludes or limits liability where such
                    exclusion or limitation is prohibited by law.
                  </p>
                  <p>
                    Change of Heart applies only to the eligible race registration fee.
                    It does not create an entitlement to compensation for unrelated
                    expenses, including travel, accommodation, equipment, lost earnings
                    or other consequential costs.
                  </p>
                  <p>
                    The maximum refund under this specific contractual Club privilege is{" "}
                    <strong className="text-white">
                      80% of the eligible registration fee actually paid
                    </strong>
                    .
                  </p>
                  <p>
                    This limitation does not restrict separate statutory rights or other
                    liabilities that cannot legally be limited.
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
                    These Terms govern the TRITON Pass and TRITON Club Pass programmes.
                  </p>
                  <p>
                    Participating event registration terms shall incorporate the
                    applicable Club privileges.
                  </p>
                  <p>
                    Any additional event-specific conditions must be clearly disclosed
                    before purchase and may not retrospectively remove a validly
                    acquired member entitlement.
                  </p>
                  <p>
                    If a provision is found invalid or unenforceable, the remaining
                    provisions shall continue to apply to the extent permitted by law.
                  </p>
                  <p>
                    Nothing in these Terms limits mandatory consumer rights.
                  </p>
                </div>
              </section>

              {/* Section 25: GOVERNING ENTITY, LAW AND CONTACT */}
              <section
                id="governing-law-contact"
                className="space-y-6 scroll-mt-32"
              >
                <h2 className="text-xl sm:text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-4 sm:pl-6">
                  25. GOVERNING ENTITY, LAW AND CONTACT
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                  <p>The TRITON Pass and TRITON Club Pass programmes are operated by:</p>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 text-white space-y-1 font-mono text-xs sm:text-sm">
                    <p className="font-bold text-base text-triton-red font-sans">
                      TRITON WORLD SERIES GLOBAL GROUP, LLC
                    </p>
                    <p>1560 Sawgrass Corp Pkwy., #400</p>
                    <p>Sunrise, FL 33323</p>
                    <p>United States of America</p>
                    <p className="pt-2 text-gray-400">
                      EIN / Tax ID: 99-4722749
                    </p>
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
                    These Terms are governed by the laws of the State of Florida, United
                    States, subject to mandatory consumer rights and jurisdictional
                    protections applicable to members in their country of residence or
                    purchase.
                  </p>
                  <p>
                    Any dispute shall be resolved in accordance with applicable law and
                    any valid dispute-resolution provisions communicated to the member.
                  </p>
                </div>
              </section>

              {/* Final Highlights Banner */}
              <div className="mt-12 sm:mt-16 bg-linear-to-b from-triton-red/20 via-neutral-900 to-neutral-900 border border-triton-red/30 rounded-2xl sm:rounded-3xl p-6 sm:p-10 space-y-4 sm:space-y-6 shadow-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 sm:pb-6">
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest text-triton-red block mb-1">
                      Annual Athlete Membership
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-black uppercase text-white">
                      TRITON CLUB PASS
                    </h3>
                    <p className="text-sm font-bold uppercase tracking-wider text-gray-300">
                      RACE WITH FREEDOM.
                    </p>
                  </div>
                  <div className="sm:text-right">
                    <span className="font-mono font-black text-3xl sm:text-4xl text-triton-red block">
                      €19
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      / CALENDAR YEAR
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-white font-black text-sm uppercase">
                      <Heart className="w-4 h-4 text-triton-red shrink-0" />
                      CHANGE OF HEART
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400 pl-6 leading-relaxed">
                      Changed your mind? Cancel one eligible TRITON race registration up
                      to 48 hours before the scheduled race start and receive 80% of
                      your eligible registration fee back. No questions. No
                      explanations required.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-white font-black text-sm uppercase">
                      <Zap className="w-4 h-4 text-triton-red shrink-0" />
                      FREE RACE DEFERRAL
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400 pl-6 leading-relaxed">
                      Plans change? Request to move an eligible registration to the next
                      edition of the same TRITON event, subject to applicable
                      conditions.
                    </p>
                  </div>

                  <div className="space-y-1 sm:col-span-2 pt-2 border-t border-white/5">
                    <div className="flex items-center gap-2 text-white font-black text-sm uppercase">
                      <Sparkles className="w-4 h-4 text-triton-red shrink-0" />
                      MORE CLUB PRIVILEGES
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400 pl-6 leading-relaxed">
                      Priority Registration. Preferred Prices. Premium Athlete Status.
                      Exclusive Club Offers.
                    </p>
                  </div>
                </div>

                <div className="pt-2 text-center text-xs sm:text-sm font-black uppercase tracking-widest text-white/90">
                  YOUR RACE. YOUR IDENTITY. YOUR TRITON.
                </div>

                <p className="text-[11px] sm:text-xs text-gray-500 text-center leading-relaxed pt-2 border-t border-white/5">
                  Membership expires on 31 December of the year of purchase. Change of
                  Heart and Free Race Deferral become available after a 60-day
                  qualification period. One Change of Heart cancellation per calendar
                  year. Participating events, eligibility requirements and full Terms
                  &amp; Conditions apply.
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
