// Must use relative in its parent element

interface RedLineProps {
  className?: string;
  isAbsolute?: boolean;
}

export default function RedLine({ className = "", isAbsolute = true }: RedLineProps) {
  return (
    <div
      className={`${
        isAbsolute ? "absolute bottom-0 left-0" : "w-full"
      } h-1 bg-linear-to-r from-transparent via-triton-red to-transparent ${className}`}
    ></div>
  );
}
