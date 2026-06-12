import React from "react";
import { Instagram, Facebook, Youtube, Mail } from "lucide-react";
import Link from "next/link";
import { EVENT_DATA_MAP } from "@/eventdata";

const Footer: React.FC = () => {
  const confirmedEvents = Object.values(EVENT_DATA_MAP)
    .filter((event) => event.status === "Confirmed")
    .sort((a, b) => a.targetDate.localeCompare(b.targetDate))
    .slice(0, 4);
  return (
    <footer className="bg-neutral-950 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col items-start mb-6">
              <span className="text-3xl font-black tracking-wider text-white">
                TRITON
              </span>
              <span className="text-[0.7rem] font-bold tracking-[0.2em] text-triton-red uppercase">
                World Series
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-6">
              Be Eager. Be Brave. Be Strong.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/triton_worldseries?igsh=MTBsZDhkdzY0dWJuMA=="
                className="text-gray-400 hover:text-triton-red transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-triton-red transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-triton-red transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase mb-4">Events</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {confirmedEvents.map((event) => (
                <li key={event.id}>
                  <Link
                    href={`/events/${event.eventFormat}/${event.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {event.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase mb-4">Info</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/terms-and-conditions" className="hover:text-white transition-colors">
                  Terms&Conditions
                </a>
              </li>
              <li>
                <a href="/social-responsability" className="hover:text-white transition-colors">
                  Social Responsibility
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Scoring System
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>

            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase mb-4">Contact Us</h4>
            <div className="flex items-center text-gray-400 text-sm mb-2">
              <Mail size={16} className="mr-2" />
              <a href="mailto:info@tritonworldseries.com" className="text-white hover:text-triton-red transition-colors font-medium">
                info@tritonworldseries.com
              </a>
            </div>
            <div className="flex items-center text-gray-400 text-sm mb-2">
              <ul className="space-y-2 text-gray-600 text-sm ">
                <li>Host a TRITON Race</li>
                <li>Become a Partner</li>
                <li>Corporate Hospitality</li>
                <li>Sugestions & Complaints</li>
              </ul>
            </div>

          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} TRITON World Series. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-gray-600 text-xs hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms-of-use" className="text-gray-600 text-xs hover:text-white">
              Terms of use
            </a>
            <a href="/intellectual-property" className="text-gray-600 text-xs hover:text-white">
              Intellectual Property
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
