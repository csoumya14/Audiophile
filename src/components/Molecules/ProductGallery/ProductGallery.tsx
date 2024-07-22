import { Gallery } from "@/types/products";
import { FC } from "react";
import Image from "next/image";
import { Container} from "./ProductGallery.style";

interface ProductGalleryProps {
  gallery: Gallery;
}

export const ProductGallery: FC<ProductGalleryProps> = ({ gallery }) => {
  const { first, second, third } = gallery;
  return (
    <Container>
      <div className="child">
        <Image
          src={first.mobile}
          layout="fill"
          objectFit="cover"
          style={{ borderRadius: "10px" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt=""
        />
      </div>
      <div className="child">
        <Image
          src={second.mobile}
          layout="fill"
          objectFit="cover"
          style={{ borderRadius: "10px" }}
          alt=""
        />
      </div>
      <div className="child">
        <Image
          src={third.mobile}
          layout="fill"
          objectFit="cover"
          style={{ borderRadius: "10px" }}
          alt=""
        />
      </div> 
    </Container>
  );
};
