import { styled } from 'styled-components';
import Image from 'next/image';
import { Banner } from '@/components/Atoms/Banner/Banner';
import { CustomLink } from '@/components/Atoms/CustomLink/CustomLink';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  padding-bottom: 3rem;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 0.5fr;
  grid-template-columns: 1fr;
  gap: 3rem;
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
  }
`;

export const StyledHeading = styled(Banner)`
  text-transform: uppercase;
  width: 50%;
`;

export const StyledPara = styled(Banner)`
  color: ${props => props.theme.palette.neutral.black};
  line-height: 25px;
`;

export const StyledSpan = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.63rem;
  color: ${props => props.theme.palette.primary.darkOrange};
`;

export const StyledPrice = styled.span`
  color: ${props => props.theme.palette.neutral.black};
  font-weight: bold;
`;
export const StyledCustomLink = styled(CustomLink)`
  text-align: center;
  padding: 1rem 2rem;
  background-color: ${props => props.theme.palette.primary.darkOrange};
  color: ${props => props.theme.palette.neutral.white};
  text-decoration: none;
  text-transform: uppercase;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
