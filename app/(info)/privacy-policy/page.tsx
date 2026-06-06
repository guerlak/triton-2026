import React from "react";
import Footer from "../../components/Footer";
import { Shield, ShieldCheck, Mail, Globe, Lock, Info, ChevronRight } from "lucide-react";

export default function PrivacyPolicyPage() {
    const navItems = [
        { id: "intro", label: "Introduction" },
        { id: "controller", label: "1. Data Controller" },
        { id: "data-collect", label: "2. Data Collected" },
        { id: "how-collect", label: "3. How Collected" },
        { id: "legal-basis", label: "4. Legal Basis" },
        { id: "share", label: "5. Data Sharing" },
        { id: "retention", label: "6. Retention" },
        { id: "protection", label: "7. Protection" },
        { id: "transfer", label: "8. Transfers" },
        { id: "cookies", label: "9. Cookies" },
        { id: "rights", label: "10. Your Rights" },
        { id: "contact", label: "11. Contact Us" },
        { id: "dpo", label: "12. DPO" },
        { id: "updates", label: "13. Updates" },
    ];

    return (
        <div className="bg-neutral-950 min-h-screen text-white flex flex-col pt-20">


            <main className="grow">
                {/* Header Section */}
                <section className="max-w-7xl mx-auto px-6 py-24 border-b border-white/5">
                    <div className="flex items-center gap-3 text-triton-red mb-6">
                        <Lock className="w-6 h-6 ml-[-4px]" />
                        <span className="font-black uppercase tracking-[0.4em] text-xs">Security</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black uppercase text-white leading-none mb-8">
                        Privacy <span className="text-triton-red italic">Policy</span>
                    </h1>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">
                        Last Updated: January 1st, 2019
                    </p>
                </section>

                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="flex flex-col lg:flex-row gap-16 relative">

                        {/* Aside Navigation */}
                        <aside className="lg:w-72 shrink-0 lg:sticky lg:top-32 h-fit order-2 lg:order-1">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                                <h3 className="text-xs font-black uppercase tracking-widest text-triton-red mb-6 pb-4 border-b border-white/5">Contents</h3>
                                <nav className="space-y-1">
                                    {navItems.map((item) => (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className="flex items-center gap-3 text-sm text-gray-500 hover:text-white hover:bg-white/5 py-2 px-3 rounded-lg transition-all group"
                                        >
                                            <ChevronRight className="w-3 h-3 text-triton-red opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {item.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Content Area */}
                        <article className="grow space-y-24 order-1 lg:order-2 max-w-4xl">

                            {/* Introduction */}
                            <div id="intro" className="bg-white/5 p-8 border border-white/10 rounded-2xl scroll-mt-32 font-sans italic">
                                <p className="text-lg text-gray-300 leading-relaxed font-sans italic">
                                    At <span className="text-white font-bold">tritonworldseries.com</span>, we are committed to safeguarding your privacy online. We want to assure our users that tritonworldseries.com will not willfully disclose any specific individual information about you to any third party unless you give us your express permission to do so.
                                </p>
                            </div>

                            <div className="space-y-6 text-gray-400 leading-loose text-lg font-sans">
                                <p>
                                    We appreciate your interest in our sport events, races and competitions (“Events”), our event website (tritonworldseries.com) and our mobile apps and social networking pages, profiles, and feeds that post or display a link to this privacy policy), (collectively, our “Services”).
                                </p>
                                <p>
                                    Privacy protection is very important to us and we are committed to protecting and respecting your privacy. This privacy policy sets out information about how we collect, store, process, transfer and use data that identifies you or makes you identifiable as a natural person (hereinafter "personal data").
                                </p>
                            </div>

                            {/* Section 1 */}
                            <section id="controller" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    1. Who is data controller of your personal data?
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans">
                                    <p>
                                        We, at TRITON WS (“TRITONWS” or “we”) are the data controller. We are responsible for, and control, the processing of your personal data.
                                    </p>
                                    <p>
                                        If you wish to contact us, you can find our contact details at the end of this Privacy Policy.
                                    </p>
                                    <p>
                                        The registration for our Events will, in some cases, be provided by third-party event registration services, such as but not limited to active.com ("Registration Partners").
                                    </p>
                                    <p>
                                        Our Registration Partners process the payment for our Events independently, TRITONWS does not have any access to information concerning the payment. For this reason, this Privacy Policy does not apply to the payment processing by our Registration Partners, and we encourage you to check the privacy policies of our Registration Partners to learn about their privacy practices.
                                    </p>
                                    <p>
                                        As far as our Registration Partners collect other personal data necessary for the registration, they act on our behalf and this Privacy Policy applies to these processing activities.
                                    </p>
                                </div>
                            </section>

                            {/* Section 2 */}
                            <section id="data-collect" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    2. What personal data do we collect?
                                </h2>
                                <div className="space-y-6 text-gray-400 leading-relaxed font-sans">
                                    <p>In the context of rendering our Services, we may collect personal data about you. This personal data regularly includes the following:</p>
                                    <ul className="grid grid-cols-1 gap-6">
                                        <li className="bg-neutral-900/50 p-6 rounded-xl border border-white/5">
                                            <strong className="text-white block mb-2 uppercase tracking-wide text-sm">If you register for an Event (Registration without Registration Partners)</strong>
                                            Username, password, name, email address, phone number, birth date, gender, information on medical condition, emergency contact information, registration number, credit card number, billing address, and other payment information and other information you provide during registration.
                                        </li>
                                        <li className="bg-neutral-900/50 p-6 rounded-xl border border-white/5">
                                            <strong className="text-white block mb-2 uppercase tracking-wide text-sm">If you register for an Event (Registration with a Registration Partner)</strong>
                                            Username, password, name, email address, phone number, address, birth date, gender, information on medical condition, emergency contact information, registration number and other information you provide during registration.
                                        </li>
                                        <li className="bg-neutral-900/50 p-6 rounded-xl border border-white/5">
                                            <strong className="text-white block mb-2 uppercase tracking-wide text-sm">If you register for our website</strong>
                                            Username, password, name, email address, phone number, birth date, gender, and other information you provide during registration.
                                        </li>
                                        <li className="bg-neutral-900/50 p-6 rounded-xl border border-white/5">
                                            <strong className="text-white block mb-2 uppercase tracking-wide text-sm">If you contact us via our website, email, phone or mail</strong>
                                            Name, email address, phone number, address and other information you provide.
                                        </li>
                                        <li className="bg-neutral-900/50 p-6 rounded-xl border border-white/5">
                                            <strong className="text-white block mb-2 uppercase tracking-wide text-sm">If you subscribe to our newsletter</strong>
                                            Name, email address, marketing campaign information such as your reaction to our marketing and your interest in our Services.
                                        </li>
                                        <li className="bg-neutral-900/50 p-6 rounded-xl border border-white/5">
                                            <strong className="text-white block mb-2 uppercase tracking-wide text-sm">If you merely use our website</strong>
                                            IP address, network file system, access times, domain name, browser data, browser type and language, device type, device ID, Uniform Resource Locators (URL), operating system, language preferences, information on your usage of our websites and online activities.
                                        </li>
                                        <li className="bg-neutral-900/50 p-6 rounded-xl border border-white/5">
                                            <strong className="text-white block mb-2 uppercase tracking-wide text-sm">Information we collect during your participation of our Event</strong>
                                            Information on your performance, such as your starting number, your place in the rankings, other information in the context of your ranking and any other information you provide us during the Event.
                                        </li>
                                        <li className="bg-neutral-900/50 p-6 rounded-xl border border-white/5">
                                            <strong className="text-white block mb-2 uppercase tracking-wide text-sm">Information we collect from social networks</strong>
                                            When you interact with our Services through various social media, such as when you login through Facebook or when you follow TRITONWS or share TRITONWS content on Facebook, Twitter, Instagram or other sites, we may receive information from those social networks including your profile information, picture, user ID associated with your social media account, friends list, and any other information you permit the social network to share with third parties. The data we receive is dependent upon your privacy settings.
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 3 */}
                            <section id="how-collect" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    3. How do we collect your personal data?
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans">
                                    <p>Personal data is collected in many ways and may include:</p>
                                    <div className="grid grid-cols-1 gap-4">
                                        <p><strong className="text-white">Personal data you provide to us:</strong> Most of the personal data we receive comes to us voluntarily from our users in the course of using our Services, such as when visiting our website, registering and participating in our Events or communicating with us.</p>
                                        <p>You are free to choose which information you want to provide to us or whether you want to provide us with personal data at all. However, some information, such as information requested in the registration procedure and information collected during the Event may be necessary for the performance of our contractual obligations in the context of your Event participation. Without providing this data, you will not be able to enter into a contract with us, such as registering for our Events.</p>
                                        <p><strong className="text-white">Personal data collected via technology:</strong> As you use our websites, we may collect information through the use of cookies. Please see Section 9 for more information.</p>
                                        <p><strong className="text-white">Personal data we receive from others:</strong> We may receive personal data about users from third parties such as our Registration Partners, social media sites, Marketing Partners (as defined below) and law enforcement agencies.</p>
                                    </div>
                                </div>
                            </section>

                            {/* Section 4 */}
                            <section id="legal-basis" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    4. Why and on which legal basis do we collect and use your personal data?
                                </h2>
                                <div className="space-y-6 text-gray-400 leading-relaxed font-sans">
                                    <p>The reasons for using your personal data may differ depending on the purpose of the collection. Regularly we use your data for the following purposes and on the following legal grounds:</p>
                                    <p>
                                        <strong className="text-white">We use your personal data in order to perform our contractual services:</strong> Or for the preparation of entering into a contract with you. If you register for our Events or if you contact us to register for our Events, we use your data to conduct our Events and make your participation in our Events possible. Information we use includes: information we need to contact you or otherwise communicate with you, e.g. to send you administrative information, registration and Event information to process your Event registration and participation; information for payments processing; information to respond to your comments and questions and provide customer service; if you are a registered user, information to manage and create your account.
                                    </p>
                                    <p>
                                        <strong className="text-white">We use your personal data if justified by our legitimate interests:</strong> The usage of your personal data may also be necessary for our own business interests. For example, we may use some of your personal data to evaluate and review our Events and overall business performance, create financial statements, understand you and your preferences to enhance and individualize your experience and enjoyment of our Services, improve our Services, and identify potential cyber security threats.
                                    </p>
                                    <p>If necessary, we may also use your personal data to pursue or defend ourselves against legal claims. We may use your personal data to provide you with individualized marketing. For instance, we deliver targeted advertising messages to you on our websites and elsewhere on the Internet. If you have participated in our Events before, we may use your email address to provide you with information on similar events.
                                    </p>
                                    <p>
                                        <strong className="text-white">We use your personal data after obtaining your consent:</strong> In some cases, we may ask you to grant us separate consent to use your personal data. You are free to deny your consent and the denial will have no negative consequences for you. You are free to withdraw your consent at any time with effect for the future. If you have granted us consent to use your personal data, we will use it only for the purposes specified in the consent form.
                                    </p>
                                    <p>This also includes our marketing campaigns. If you sign up to our email newsletter or when providing us with your email address allow us to use this email address for email marketing, we will use your personal data in our email marketing campaigns. You may unsubscribe from our email newsletter at any time [unsubscribe from this list]. You may also contact us via email, phone or mail at the addresses provided at the end of this document to request that we remove you from our email list.</p>
                                    <p>
                                        <strong className="text-white">We use your personal data to comply with legal obligations:</strong> We are obligated to retain certain data because of legal requirements, for example, tax or commercial laws or we may be required by law enforcement to provide personal data on request.
                                    </p>
                                    <p>We will only use your personal data for the purposes for which we have collected them. We will not use your personal data for other purposes. We do not use your personal data for automated individual decision-making.</p>
                                </div>
                            </section>

                            {/* Section 5 */}
                            <section id="share" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    5. With whom do we share your personal data?
                                </h2>
                                <div className="space-y-6 text-gray-400 leading-relaxed font-sans">
                                    <p>As required in accordance with how we use it, we will share your personal data with the following third parties:</p>
                                    <p>
                                        <strong className="text-white">Service providers and advisors:</strong> Third party vendors and other service providers that perform services for us and on our behalf, which may include marketing campaign services, providing mailing or email services, tax and accounting services, services related to the registration and organization of our Events, payment processing, data enhancement services, fraud prevention, web hosting, or providing analytic services. These third parties may include: Timing company, Google Analytics. Any such service providers will by appropriate data processing agreements be bound to only process the data on our behalf and under our instructions.
                                    </p>
                                    <p>
                                        <strong className="text-white">Marketing Partners:</strong> Provided you have granted your consent, we may disclose your personal data to our third-party sponsors and marketing partners (collectively, "Marketing Partners") to allow them to market their products or services to you, and measure the effectiveness of their marketing campaigns, promotions, endorsements and sponsorships or for other marketing purposes. Event Photographers. If you participate in our Events and have given us consent to do so, we will disclose your bib number, name, email address and phone number to the Event photographer, who may contact you with photos from the attended Event.
                                    </p>
                                    <p>
                                        <strong className="text-white">Purchasers and third parties in connection with a business transaction:</strong> Personal data may be disclosed to third parties in connection with a transaction, such as a merger, sale of our assets or shares, reorganization, financing, change of control or acquisition of all or a portion of our business, or in the event of a bankruptcy or similar proceedings.
                                    </p>
                                    <p>
                                        <strong className="text-white">Law enforcement, regulators and other parties for legal reasons:</strong> Third parties as required by law or subpoena or if we reasonably believe that such action is necessary to (a) comply with the law and the reasonable requests of law enforcement; (b) to enforce our legal claims or to protect the security or integrity of our Services; and/or (c) to exercise or protect the rights, property, or personal safety of TRITONWS, our athletes, visitors, or others.
                                    </p>
                                    <p>
                                        <strong className="text-white">The public:</strong> The official rankings and information justifying the ranking will be disclosed to visitors of our event and on our website.
                                    </p>
                                </div>
                            </section>

                            {/* Section 6 */}
                            <section id="retention" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    6. How long do we keep your data?
                                </h2>
                                <div className="text-gray-400 leading-relaxed font-sans">
                                    <p>We will store personal data for as long as necessary to fulfil the purposes for which we collect the data, in accordance with our legal obligations and legitimate business interests. Afterwards, or at the end of the statutory retention times, the personal information will be deleted. For example, national commercial or financial codes may require retaining certain information for up to 10 years.</p>
                                </div>
                            </section>

                            {/* Section 7 */}
                            <section id="protection" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    7. How do we protect your information?
                                </h2>
                                <div className="text-gray-400 leading-relaxed font-sans">
                                    <p>We implement a variety of security measures to maintain the safety of your personal data when you use our Service. In the event that any information under our control is compromised as a result of a breach of security, we will take reasonable steps to investigate the situation and, where appropriate, notify those individuals whose personal data may have been compromised and take other steps, in accordance with any applicable laws and regulations.</p>
                                </div>
                            </section>

                            {/* Section 8 */}
                            <section id="transfer" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    8. How do we safeguard your personal data when there is an international transfer?
                                </h2>
                                <div className="space-y-4 text-gray-400 leading-relaxed font-sans">
                                    <p>In certain cases, we may transfer personal data to countries outside the European Union or the European Economic Area. For example, where we disclose personal data to our affiliate TRITONWS events, personal data will be transferred and processed in the region where the event takes place. This may mean that your personal data will be stored in a jurisdiction that offers a level of protection that may, in certain instances, be less protective of your personal data than the jurisdiction you are typically a resident in.</p>
                                    <p>For this reason, we have entered into guarantees to ensure appropriate safeguards. If we transfer information from the European Union to third parties outside the European Union and to countries not subject to schemes which are considered as providing an adequate data protection standard, we will enter into contracts which are based on the local region Standard Contractual Clauses with these parties.</p>
                                    <p>If you wish to inquire further about the safeguards we use, please contact us using the details set out at the end of this Privacy Policy.</p>
                                    <p>We will take reasonable steps to ensure that your personal data is treated securely and in accordance with applicable law and this Privacy Policy.</p>
                                </div>
                            </section>

                            {/* Section 9 */}
                            <section id="cookies" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    9. Cookies and Similar Technologies
                                </h2>
                                <div className="space-y-6 text-gray-400 leading-relaxed font-sans text-md">
                                    <p>The Services uses cookies, flash objects, web beacons, file information and similar technologies to distinguish you from other users of the Services. This helps us to provide you with a good experience when you browse the Services and also allows us to improve the Services.</p>
                                    <p>Cookies are pieces of code that allow for personalization of the Services experience by saving your data such as user ID and other preferences. A cookie is a small data file that we transfer to your device's hard disk (such as your computer or smartphone) for record-keeping purposes.</p>

                                    <p className="text-white font-bold uppercase tracking-widest text-sm">We use the following types of cookies:</p>
                                    <ul className="space-y-4 list-disc pl-6">
                                        <li><strong className="text-white">Strictly necessary cookies:</strong> These are cookies that are required for the essential operation of the Services such as to authenticate users and prevent fraudulent use.</li>
                                        <li><strong className="text-white">Analytical/performance cookies:</strong> These allow us to recognize and count the number of visitors and to see how visitors move around the Services when they are using it. This helps us to improve the way the Services works, for example, by ensuring that users are finding what they are looking for easily.</li>
                                        <li><strong className="text-white">Functionality cookies:</strong> These are used to recognize you when you return to the Services. This enables us to personalize our content for you, greet you by name and remember your preferences (for example, your choice of language or region).</li>
                                        <li><strong className="text-white">Targeting cookies:</strong> These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it, and the marketing messages we send to you more relevant to your interests. We may also share this data with third parties who provide a service to us for this purpose.</li>
                                        <li><strong className="text-white">Third party cookies:</strong> Please be aware that advertisers and other third parties may use their own cookies tags when you click on an advertisement or link on our website. These third parties are responsible for setting out their own cookie and privacy policies.</li>
                                    </ul>

                                    <div className="bg-neutral-900/50 p-8 rounded-xl border border-white/5 space-y-4">
                                        <h3 className="text-white font-black uppercase tracking-wide">How to manage cookies?</h3>
                                        <p>The cookies we use are designed to help you get the most from the Services but if you do not wish to receive cookies, most browsers allow you to change your cookie settings. Please note that if you choose to refuse cookies you may not be able to use the full functionality of the Services. These settings will typically be found in the "options" or "preferences" menu of your browser. In order to understand these settings, the following links may be helpful, otherwise you should use the "Help" option in your browser for more details.</p>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-triton-red font-bold underline">
                                            <li><a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies">Internet Explorer</a></li>
                                            <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences">Firefox</a></li>
                                            <li><a href="https://support.google.com/chrome/answer/95647?hl=en">Chrome</a></li>
                                            <li><a href="https://support.apple.com/kb/ph21411?locale=en_US">Safari</a></li>
                                        </ul>
                                    </div>

                                    <p>We also use clear gifs in HTML-based emails sent to our Customers to track which emails are opened and which links are clicked by recipients. The information allows for more accurate reporting and improvement of our Service. You can set your e-mail options to prevent the automatic downloading of images that may contain these technologies that would allow us to know whether you have accessed our e-mail and performed certain functions with it.</p>
                                    <p>If you would like to find out more about cookies and other similar technologies, please visit <a href="http://www.allaboutcookies.org" className="text-triton-red underline">www.allaboutcookies.org</a> or the Network Advertising Initiative's online sources at <a href="http://www.networkadvertising.org" className="text-triton-red underline">www.networkadvertising.org</a>.</p>
                                </div>
                            </section>

                            {/* Section 10 */}
                            <section id="rights" className="space-y-6 scroll-mt-32">
                                <h2 className="text-2xl font-black uppercase text-white border-l-4 border-triton-red pl-6">
                                    10. What rights and choices do you have?
                                </h2>
                                <div className="space-y-6 text-gray-400 leading-relaxed font-sans">
                                    <p>We want you to understand your rights and choices regarding how we may use your personal data. Depending on how you use your data, these rights and choices may include the following:</p>
                                    <p><strong className="text-white font-bold">Individual Rights:</strong> You have specific rights under applicable privacy law in respect to your personal data that we hold, including a right of access and erasure and a right to prevent certain processing activities.</p>

                                    <p className="text-white font-bold uppercase tracking-widest text-sm">If you are a resident in the European Union, you have the following rights:</p>
                                    <ul className="space-y-4 list-disc pl-6">
                                        <li><strong className="text-white">Right of access:</strong> The right to obtain access to your personal data.</li>
                                        <li><strong className="text-white">Right to rectification:</strong> The right to obtain rectification of your personal data without undue delay where that personal data is inaccurate or incomplete.</li>
                                        <li><strong className="text-white">Right to erasure:</strong> The right to obtain the erasure of your personal data without undue delay in certain circumstances, such as where the personal data is no longer necessary in relation to the purposes for which it was collected or processed.</li>
                                        <li><strong className="text-white">Right to restriction:</strong> The right to obtain restriction of the processing undertaken by us on your personal data in certain circumstances, such as, where the accuracy of the personal data is contested by you, for a period of time enabling us to verify the accuracy of that personal data.</li>
                                        <li><strong className="text-white">Right to portability:</strong> The right to portability allows you to move, copy or transfer personal data easily from one organization to another.</li>
                                        <li><strong className="text-white">Right to object:</strong> You have a right to object to any processing based on our legitimate interests where there are grounds relating to your particular situation. You can object to marketing activities for any reason whatsoever.</li>
                                    </ul>

                                    <p>If you wish to exercise one of these rights, please contact us using the contact details below. For cookies or e-mail marketing, we provide the following easily usable option:</p>
                                    <ul className="space-y-2 pl-6 border-l-2 border-white/10">
                                        <li><strong className="text-white">Cookies Settings and Preferences:</strong> You may disable cookies and other tracking technologies through the settings in your browser.</li>
                                        <li><strong className="text-white">E-Mail Settings and Preferences:</strong> If you no longer want to receive marketing emails from us, you may choose to unsubscribe at any time [unsubscribe from this list].</li>
                                    </ul>

                                    <p>In addition to the foregoing listed rights, as an EU resident, you also have the right to lodge a complaint with your local data protection authority. Further information about how to contact your local data protection authority is available at <a href="http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" className="text-triton-red underline">http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</a></p>
                                </div>
                            </section>

                            {/* Final Sections */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-white/5">
                                <section id="contact" className="space-y-6 scroll-mt-32">
                                    <h2 className="text-xl font-black uppercase text-white flex items-center gap-2">
                                        <Mail className="w-5 h-5 text-triton-red" />
                                        11. How to contact us?
                                    </h2>
                                    <p className="text-gray-400">
                                        If you have any questions or concerns about our Privacy Policy or if you want to exercise your rights, please send an email to:
                                        <br />
                                        <a href="mailto:triton@tritonworldseries.com" className="text-white font-bold hover:text-triton-red transition-colors">triton@tritonworldseries.com</a>
                                    </p>
                                </section>

                                <section id="dpo" className="space-y-6 scroll-mt-32">
                                    <h2 className="text-xl font-black uppercase text-white flex items-center gap-2">
                                        <ShieldCheck className="w-5 h-5 text-triton-red" />
                                        12. Data Protection Officer
                                    </h2>
                                    <p className="text-gray-400">
                                        For all enquiries regarding TRITONWS’s activities you may also want to contact our Data Protection Officer who can be reached at:
                                        <br />
                                        <a href="mailto:triton@tritonworldseries.com" className="text-white font-bold hover:text-triton-red transition-colors">triton@tritonworldseries.com</a>
                                    </p>
                                </section>
                            </div>

                            <section id="updates" className="bg-triton-red/10 p-10 rounded-2xl border border-triton-red/20 scroll-mt-32">
                                <h2 className="text-xl font-black uppercase text-white mb-6 flex items-center gap-2">
                                    <Info className="w-5 h-5 text-triton-red" />
                                    13. Online Privacy Policy Updates
                                </h2>
                                <p className="text-gray-300 leading-relaxed mb-8">
                                    We may make changes to our privacy policy from time to time. Please review our policies regularly as updated policies will apply to your future use of our Services.
                                </p>
                                <div className="pt-8 border-t border-white/10">
                                    <p className="text-sm font-bold uppercase tracking-widest text-triton-red mb-2">TRITON WORLD SERIES</p>
                                    <p className="text-white">triton@tritonworldseries.com</p>
                                </div>
                            </section>

                        </article>
                    </div>
                </div>
            </main>


        </div>
    );
}