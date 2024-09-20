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
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    flex-direction: row;
    margin-top: ${props => (props.inHeader ? '-1.5rem' : '0rem')};
  }
`;

export const StyledCustomLink = styled(CustomLink)`
  padding: 0rem 2rem;
  margin: 0rem;
  color: ${props => props.theme.palette.neutral.white};
  text-decoration: none;
  text-transform: uppercase;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    padding-left: 0rem;
  }
`;
