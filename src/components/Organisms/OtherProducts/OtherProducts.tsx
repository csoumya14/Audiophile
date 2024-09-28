import { Other } from '@/types/products';
import { FC } from 'react';
import { Container, StyledHeading, Wrapper } from './OtherProducts.style';
import { OtherProductsLinks } from '@/components/Molecules/OtherProductLinks/OtherProductLinks';

interface OtherProductsProps {
  other: Other[];
}

export const OtherProducts: FC<OtherProductsProps> = ({ other }) => {
  return (
    <Wrapper>
      <StyledHeading textLevel="h3">You may also like</StyledHeading>
      <Container>
        {other?.map(product => (
          <OtherProductsLinks key={product.slug} productDetails={product} />
        ))}
      </Container>
    </Wrapper>
  );
};
