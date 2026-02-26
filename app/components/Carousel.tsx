// Carousel component for horizontal sliding
import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CarouselProps {
  children: ReactNode[];
  current: number;
  onChange: (idx: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({ children, current, onChange }) => {
  const prev = () => onChange((current - 1 + children.length) % children.length);
  const next = () => onChange((current + 1) % children.length);

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="flex items-center gap-2">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white"
          aria-label="Previous"
        >
          &#8592;
        </button>
        <div className="w-[320px] md:w-[500px] flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {children[current]}
            </motion.div>
          </AnimatePresence>
        </div>
        <button
          onClick={next}
          className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white"
          aria-label="Next"
        >
          &#8594;
        </button>
      </div>
      <div className="flex gap-1 mt-2">
        {children.map((_, idx) => (
          <button
            key={idx}
            onClick={() => onChange(idx)}
            className={`w-2 h-2 rounded-full ${idx === current ? "bg-triton-red" : "bg-white/30"}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
