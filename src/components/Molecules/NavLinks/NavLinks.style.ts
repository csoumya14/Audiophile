import { CustomLink } from '@/components/Atoms/CustomLink/CustomLink';
import { styled } from 'styled-components';

export const StyledLinkContainer = styled.ul<{ inHeader?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  list-style-type: none;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    flex-direction: row;
  }
`;

export const StyledCustomLink = styled(CustomLink)`
  padding: 0rem 2rem;
  margin: 0rem;
  color: ${props => props.theme.palette.neutral.white};
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    color: ${props => props.theme.palette.primary.darkOrange};
  }
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    padding-left: 0rem;
  }
`;

export const StyledListItem = styled.li<{ inFooter?: boolean }>`
  text-align: ${props => (props.inFooter ? 'center' : 'left')};
`;
