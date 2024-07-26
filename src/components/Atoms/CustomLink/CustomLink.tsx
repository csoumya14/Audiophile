import Link from "next/link";
import { CSSProperties, ReactNode } from "react";

interface CustomLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  children,
  className,
  onClick,
  ...props
}) => {
  return (
    <Link href={href} {...props} onClick={onClick} className={className}>
      {children}
    </Link>
  );
};
