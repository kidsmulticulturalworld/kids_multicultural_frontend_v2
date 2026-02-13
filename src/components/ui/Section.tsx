import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: "white" | "light" | "light-blue" | "dark" | "navy" | "black";
  id?: string;
}

const bgStyles = {
  white: "bg-white",
  light: "bg-bg-secondary",
  "light-blue": "bg-bg-light-blue",
  dark: "bg-navy text-white",
  navy: "bg-navy text-white",
  black: "bg-bg-black text-white",
};

export default function Section({
  children,
  className,
  bg = "white",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-section lg:py-section-lg",
        bgStyles[bg],
        className
      )}
    >
      {children}
    </section>
  );
}
