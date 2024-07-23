import { FC } from "react";
import {
  ImageWrapper,
  StyledCustomLink,
  StyledHeading,
  StyledList,
} from "./OtherProductLinks.style";
import Image from "next/image";
import { Other } from "@/types/products";
import { getProductUrl } from "@/helpers/getProductUrl";

interface OtherProductsLinksProps {
  productDetails: Other;
}

export const OtherProductsLinks: FC<OtherProductsLinksProps> = ({
  productDetails,
}) => {
  return (
    <StyledList>
      <ImageWrapper>
        <Image
          src={productDetails.image.mobile}
          layout="fill"
          objectFit="cover"
          style={{ borderRadius: "10px" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={productDetails.name}
        />
      </ImageWrapper>
      <StyledHeading textLevel={"h3"}>{productDetails.name}</StyledHeading>
      <StyledCustomLink href={getProductUrl(productDetails.slug)}>
        {" "}
        See product
      </StyledCustomLink>
    </StyledList>
  );
};
