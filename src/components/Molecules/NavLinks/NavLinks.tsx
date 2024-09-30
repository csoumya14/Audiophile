import { FC } from 'react';
import { links } from '@/utils/Links/links';
import { StyledCustomLink, StyledLinkContainer, StyledListItem } from './NavLinks.style';
import { isCurrentPage } from '@/helpers/getCurrentPage';
import { usePathname } from 'next/navigation';

interface NavLinks {
  className?: string;
}
export const NavLinks: FC<NavLinks> = ({ className }) => {
  const pathname = usePathname();

  return (
    <StyledLinkContainer className={className}>
      {links.map(link => (
        <StyledListItem key={link.id}>
          <StyledCustomLink
            href={link.url}
            aria-current={isCurrentPage(pathname, link.url) ? 'page' : undefined}
          >
            {link.text}
          </StyledCustomLink>
        </StyledListItem>
      ))}
    </StyledLinkContainer>
  );
};
