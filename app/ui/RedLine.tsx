// Must use relative in its parent element

interface RedLineProps {
  className?: string;
  isAbsolute?: boolean;
}

export default function RedLine({ className = "", isAbsolute = true }: RedLineProps) {
  return (
    <div
      className={`w-full ${
        isAbsolute ? "absolute bottom-0 left-0 right-0" : "relative"
      } h-1 bg-gradient-to-r from-transparent via-triton-red to-transparent pointer-events-none ${className}`}
    />
  );
}
