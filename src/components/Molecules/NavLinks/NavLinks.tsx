import { FC } from 'react';
import { links } from '@/utils/Links/links';
import { StyledCustomLink, StyledLinkContainer } from './NavLinks.style';

interface NavLinks {
  inHeader?: boolean;
}
export const NavLinks: FC<NavLinks> = ({ inHeader }) => {
  return (
    <StyledLinkContainer inHeader={inHeader}>
      {links.map(link => (
        <li key={link.id}>
          <StyledCustomLink href={link.url}>{link.text}</StyledCustomLink>
        </li>
      ))}
    </StyledLinkContainer>
  );
};
