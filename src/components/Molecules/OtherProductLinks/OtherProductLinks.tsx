import { FC } from 'react';
import {
  ImageWrapper,
  StyledCustomLink,
  StyledHeading,
  StyledList,
} from './OtherProductLinks.style';
import { Other } from '@/types/products';
import { getProductUrl } from '@/helpers/getProductUrl';
import { ResponsiveImage } from '@/components/Atoms/ResponsiveImage/ResponsiveImage';
import { generateImageSources } from '@/helpers/imageHelpers';

interface OtherProductsLinksProps {
  productDetails: Other;
}

export const OtherProductsLinks: FC<OtherProductsLinksProps> = ({ productDetails }) => {
  const imageSources = generateImageSources(
    productDetails.image.mobile,
    productDetails.image.tablet,
    productDetails.image.desktop,
  );

  return (
    <StyledList>
      <ImageWrapper>
        <ResponsiveImage
          alt="Responsive Example"
          sources={imageSources}
          layoutType="responsive"
          src={productDetails.image.mobile}
          width={800}
          height={600}
          objectFitType={'cover'}
        />
      </ImageWrapper>
      <StyledHeading textLevel={'h3'}>{productDetails.name}</StyledHeading>
      <StyledCustomLink href={getProductUrl(productDetails.slug)}> See product</StyledCustomLink>
    </StyledList>
  );
};
