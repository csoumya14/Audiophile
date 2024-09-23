import { Button } from '@/components/Atoms/Button/Button';
import styled from 'styled-components';
import { NavLinks } from '../NavLinks/NavLinks';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 10;
  padding: 1rem;
  background-color: ${props => props.theme.palette.neutral.black};
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    padding: 2rem;
  }
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    padding: 2rem 5rem;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const StyledOpenCloseButton = styled(Button)`
  background: none;
  border: none;
  z-index: 999;
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    display: none;
  }
`;

export const Container = styled.div`
  flex-grow: 3;
  display: flex;
  justify-content: flex-end;
`;

export const CartButton = styled(Button)`
  background: none;
`;

export const StyledNavLinks = styled(NavLinks)`
  margin-top: -1.5rem;
`;
