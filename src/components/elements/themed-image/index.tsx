'use client';

import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import type { ImageProps } from 'next/image';
import Image from 'next/image';

import { StyledThemedImage, ThemedImageMovingBorder } from './themed-image';

export interface ThemeImageProps extends Omit<ImageProps, 'src'> {
  lightSrc: string | StaticImport;
  darkSrc: string | StaticImport;
  withBorderAnimation?: boolean;
  withoutStyles?: boolean;
}

export const ThemedImage = ({
  lightSrc,
  darkSrc,
  withBorderAnimation,
  withoutStyles,
  alt = 'image',
  width,
  height,
  ...props
}: ThemeImageProps) => {
  const hasSize = !!width && !!height;
  const imageProps = {
    fill: !hasSize,
    priority: false,
    ...props,
  };

  if (withBorderAnimation) {
    return (
      <ThemedImageMovingBorder style={{ minHeight: height }}>
        <Image alt={alt} src={lightSrc} width={width} height={height} {...imageProps} data-hide-on-theme="dark" />
        <Image alt={alt} src={darkSrc} width={width} height={height} {...imageProps} data-hide-on-theme="light" />
      </ThemedImageMovingBorder>
    );
  }

  if (withoutStyles) {
    return (
      <>
        <Image alt={alt} src={lightSrc} width={width} height={height} {...imageProps} data-hide-on-theme="dark" />
        <Image alt={alt} src={darkSrc} width={width} height={height} {...imageProps} data-hide-on-theme="light" />
      </>
    );
  }

  return (
    <StyledThemedImage style={{ minHeight: height }}>
      <Image alt={alt} src={lightSrc} width={width} height={height} {...imageProps} data-hide-on-theme="dark" />
      <Image alt={alt} src={darkSrc} width={width} height={height} {...imageProps} data-hide-on-theme="light" />
    </StyledThemedImage>
  );
};
