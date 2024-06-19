import Link from "next/link";
import { CSSProperties, ReactNode } from "react";

interface CustomLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  children,
  className,
  ...props
}) => {
  return (
    <Link href={href} {...props} className={className}>
      {children}
    </Link>
  );
};
