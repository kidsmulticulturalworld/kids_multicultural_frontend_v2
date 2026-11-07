import Link from "next/link";
import { eventHref } from "@/lib/api/data-mappers";

export default function EventDestination({
  id,
  eventbriteUrl,
  fallbackHref,
  className,
  children,
}: {
  id: string | number;
  eventbriteUrl?: string | null;
  fallbackHref?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const destination = eventHref(id, eventbriteUrl);
  const href = destination.external
    ? destination.href
    : (fallbackHref ?? destination.href);

  if (destination.external) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
