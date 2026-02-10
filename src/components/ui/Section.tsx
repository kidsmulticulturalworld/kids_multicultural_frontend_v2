import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: "white" | "light" | "light-blue" | "dark" | "navy" | "black";
  id?: string;
}

const bgStyles = {
  white: "bg-white",
  light: "bg-[var(--color-bg-secondary)]",
  "light-blue": "bg-[var(--color-bg-light-blue)]",
  dark: "bg-[var(--color-bg-dark)] text-white",
  navy: "bg-navy text-white",
  black: "bg-[var(--color-bg-black)] text-white",
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
        "py-[var(--section-padding-y)] lg:py-[var(--section-padding-y-lg)]",
        bgStyles[bg],
        className
      )}
    >
      {children}
    </section>
  );
}
