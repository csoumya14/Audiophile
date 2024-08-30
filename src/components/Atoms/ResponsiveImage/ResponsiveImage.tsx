import React, { FC } from "react";
import { ImageSources } from "@/types/imageSources";
import { Picture, StyledImage } from "./ResponsiveImage.style";

export type ResponsiveImageProps = {
  alt: string;
  sources: ImageSources[];
  src: string;
  width?: number;
  height?: number;
};

export const ResponsiveImage: FC<ResponsiveImageProps> = ({
  alt,
  sources,
  src,
}) => {
  return (
    <Picture>
      {sources.map((source, index) => (
        <source
          key={index}
          srcSet={source.srcSet}
          media={source.media}
          type={source.type}
        />
      ))}
      <StyledImage src={src} alt={alt} fill style={{ objectFit: "cover" }} />
    </Picture>
  );
};
