import { Banner } from '@/components/Atoms/Banner/Banner';
import { CustomLink } from '@/components/Atoms/CustomLink/CustomLink';
import { styled } from 'styled-components';

export const StyledHeading = styled(Banner)`
  font-size: ${props => props.theme.fontSizes.heading2.mobile};
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.palette.neutral.black};
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  background: transparent;
  gap: 1rem;
  border-radius: 0.5rem;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  gap: 1.5rem;
  background-color: ${props => props.theme.palette.primary.grey};
  padding: 2rem;
  position: relative;
  border-radius: 0.5rem;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    align-items: center;
    justify-content: center;
  }
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    align-items: flex-start;
    padding-left: 5rem;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  padding-bottom: 1rem;
  position: relative;
  border-radius: 0.5rem;
  & img {
    border-radius: 0.5rem;
  }
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    flex: 1;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const StyledCustomLink = styled(CustomLink)`
  text-align: center;
  padding: 1rem 2rem;
  background:transparent
  color: ${props => props.theme.palette.neutral.black};
  border: 2px solid black;
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    background-color: ${props => props.theme.palette.neutral.black};
    color: ${props => props.theme.palette.neutral.white};
  }
`;
