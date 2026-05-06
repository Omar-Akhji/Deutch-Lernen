import Link from "next/link";
import { CardBody } from "./CardBody";

interface CardProps {
  href: string;
  title: string;
  subtitle?: string;
  description?: string;
  category?: string;
  badge?: string;
  gradient: string;
  icon?: string;
  stats?: Array<{ label: string; value: string }>;
  variant?: "default" | "large";
}

// Deutsch Lernen - High-Performance React Architecture

export const Card = ({ href, ...bodyProps }: CardProps) => {
  const isExternal = href.startsWith("http") || href === "#";

  if (isExternal) {
    return (
      <a href={href} className="block h-full no-underline">
        <CardBody {...bodyProps} />
      </a>
    );
  }

  return (
    <Link href={href} className="block h-full no-underline">
      <CardBody {...bodyProps} />
    </Link>
  );
};
