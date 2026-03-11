import React from "react";
import { Instagram, Facebook, Youtube, Mail } from "lucide-react";

const Footer: React.FC = () => {
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
                href="#"
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
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Salvador 2026
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Rio de Janeiro 2026
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Lisboa 2026
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  World Final
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase mb-4">Athlete</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Results
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pictures
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Regulation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase mb-4">Contact Us</h4>
            <div className="flex items-center text-gray-400 text-sm mb-2">
              <Mail size={16} className="mr-2" /> contato@tritonworldseries.com
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-xs">
            © 2026 TRITON World Series. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 text-xs hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-600 text-xs hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
