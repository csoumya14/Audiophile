import { Banner } from '@/components/Atoms/Banner/Banner';
import { styled } from 'styled-components';

export const StyledHeading = styled(Banner)`
  color: ${props => props.theme.palette.neutral.white};
  text-transform: uppercase;
`;

export const Wrapper = styled.div`
  background: ${props => props.theme.palette.neutral.black};
  height: 5rem;
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    height: 8rem;
  }
`;
