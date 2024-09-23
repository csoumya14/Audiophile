import { FC } from 'react';
import { links } from '@/utils/Links/links';
import { StyledCustomLink, StyledLinkContainer, StyledListItem } from './NavLinks.style';

interface NavLinks {
  inHeader?: boolean;
  className?: string;
}
export const NavLinks: FC<NavLinks> = ({ inHeader, className }) => {
  return (
    <StyledLinkContainer inHeader={inHeader} className={className}>
      {links.map(link => (
        <StyledListItem key={link.id}>
          <StyledCustomLink href={link.url}>{link.text}</StyledCustomLink>
        </StyledListItem>
      ))}
    </StyledLinkContainer>
  );
};
