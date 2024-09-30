import React, { FC } from 'react';
import { ImageSources } from '@/types/imageSources';
import { Picture, StyledImage } from './ResponsiveImage.style';
import { ImageProps } from 'next/image';

interface ResponsiveImageProps extends Omit<ImageProps, 'layout'> {
  sources: ImageSources[];
  sizes?: string;
  layoutType: 'fill' | 'responsive' | 'intrinsic' | 'fixed';
  objectFitType:
    | 'contain'
    | 'cover'
    | 'fill'
    | 'none'
    | 'scale-down'
    | 'inherit'
    | 'initial'
    | 'unset';
}

export const ResponsiveImage: FC<ResponsiveImageProps> = ({
  alt,
  sources,
  sizes,
  src,
  width,
  height,
  layoutType,
  objectFitType,
}) => {
  const layoutProps: Partial<ImageProps> = {};
  if (layoutType === 'fill') {
    layoutProps.fill = true;
    layoutProps.sizes = sizes || '100vw';
  } else if (layoutType === 'responsive' || layoutType === 'intrinsic') {
    layoutProps.width = width;
    layoutProps.height = height;
  } else if (layoutType === 'fixed') {
    layoutProps.width = width;
    layoutProps.height = height;
  }

  return (
    <Picture>
      {sources.map((source, index) => (
        <source key={index} srcSet={source.srcSet} media={source.media} type={source.type} />
      ))}
      <StyledImage src={src} alt={alt} {...layoutProps} style={{ objectFit: objectFitType }} />
    </Picture>
  );
};
