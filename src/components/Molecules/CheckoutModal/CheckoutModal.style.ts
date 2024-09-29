import { Banner } from '@/components/Atoms/Banner/Banner';
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
  padding: 2rem;
  z-index: 1000;
  border-radius: 10px;
  width: 90%;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    gap: 2rem;
    padding: 3rem;
  }
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    padding: 1rem;
    gap: 0.5rem;
    width: 50%;
    top: 40%;
  }
`;

export const StyledCustomLink = styled(CustomLink)`
  text-align: center;
  padding: 0.5rem;
  background-color: ${props => props.theme.palette.primary.darkOrange};
  color: ${props => props.theme.palette.neutral.white};
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    background-color: ${props => props.theme.palette.primary.lightOrange};
  }
`;

export const StyledHeading = styled(Banner)`
  font-size: ${props => props.theme.fontSizes.heading3.mobile};
  text-transform: uppercase;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    font-size: ${props => props.theme.fontSizes.heading3.tablet};
    width: 50%;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.palette.primary.grey};
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.palette.neutral.black};
  padding: 1rem;
  gap: 1rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    flex-grow: 1;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 10px;
    justify-content: center;
    padding: 2rem;
  }
`;

export const Divider = styled.hr`
  width: 100%;
  height: 0.1px;
  margin: 0px 8px;
  background-color: ${props => props.theme.palette.neutral.black};
  border: none;
`;

export const StyledHeadingTotal = styled(Banner)`
  font-size: ${props => props.theme.fontSizes.heading6.mobile};
  color: ${props => props.theme.palette.neutral.white};
  text-transform: uppercase;
  font-weight: normal;
`;

export const StyledPara = styled(Banner)`
  font-weight: bold;
  color: ${props => props.theme.palette.neutral.white};
`;

export const ProductDetailsContainer = styled.div`
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    display: flex;
  }
`;
