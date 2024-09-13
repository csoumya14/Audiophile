import { CustomLink } from '@/components/Atoms/CustomLink/CustomLink';
import { styled } from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${props => props.theme.palette.neutral.white};
  padding: 1rem;
  z-index: 1000;
  border-radius: 10px;
  width: 90%;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    top: 30%;
    left: 70%;
    max-width: 20rem;
    padding: 2rem;
  }
`;

export const StyledCustomLink = styled(CustomLink)`
  text-align: center;
  padding: 0.5rem;
  background-color: ${props => props.theme.palette.primary.darkOrange};
  color: ${props => props.theme.palette.neutral.white};
  text-decoration: none;
  text-transform: uppercase;
`;
