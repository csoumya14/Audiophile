import { Banner } from '@/components/Atoms/Banner/Banner';
import { styled } from 'styled-components';
import Image from 'next/image';

export const StyledList = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* Creates 3 equal-width columns */
  gap: 20px; /* Adjust the space between columns */
  align-items: center;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    grid-template-columns: 0.4fr 2fr 0.5fr;
  }
`;
export const StyledProductNamePriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledProductQuantity = styled.div`
  justify-self: flex-end;
`;

export const StyledName = styled(Banner)`
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSizes.heading6.mobile};
`;

export const StyledPara = styled(Banner)`
  font-size: ${props => props.theme.fontSizes.subTitle.mobile};
`;

export const StyledImage = styled(Image)`
  border-radius: 5px;
`;
