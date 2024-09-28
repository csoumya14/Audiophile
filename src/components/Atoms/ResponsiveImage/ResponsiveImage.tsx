import React, { FC } from 'react';
import { ImageSources } from '@/types/imageSources';
import { Picture, StyledImage } from './ResponsiveImage.style';

export type ResponsiveImageProps = {
  alt: string;
  sources: ImageSources[];
  src: string;
  width?: number;
  height?: number;
  layoutType: string;
  objectFitType:
    | 'contain'
    | 'cover'
    | 'fill'
    | 'none'
    | 'scale-down'
    | 'inherit'
    | 'initial'
    | 'unset';
};

export const ResponsiveImage: FC<ResponsiveImageProps> = ({
  alt,
  sources,
  src,
  width,
  height,
  layoutType,
  objectFitType,
}) => {
  return (
    <Picture>
      {sources.map((source, index) => (
        <source key={index} srcSet={source.srcSet} media={source.media} type={source.type} />
      ))}
      <StyledImage
        src={src}
        alt={alt}
        layout={layoutType}
        width={width}
        height={height}
        style={{ objectFit: objectFitType }}
      />
    </Picture>
  );
};
