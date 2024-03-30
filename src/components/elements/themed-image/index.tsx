'use client';

import ExportedImage from 'next-image-export-optimizer';
import { useTheme } from 'next-themes';
import type { DetailedHTMLProps, ImgHTMLAttributes, RefObject } from 'react';

import { StyledThemedImage, ThemedImageMovingBorder } from './themed-image';

import { useMounted } from '@/lib/hooks/use-mounted';

export interface ThemeImageProps
  extends Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, 'src'> {
  lightSrc: string;
  darkSrc: string;
  withBorderAnimation?: boolean;
  withBorder?: boolean;
  withoutStyles?: boolean;
  ref?: RefObject<HTMLImageElement>;
  height?: number;
  width?: number;
}

export const ThemedImage = ({
  lightSrc,
  darkSrc,
  withBorderAnimation,
  withBorder,
  withoutStyles,
  loading,
  height,
  width,
  alt = 'image',
  ...props
}: ThemeImageProps) => {
  const { resolvedTheme } = useTheme();
  const imageProps = {
    priority: loading == 'eager',
    ...props,
  };

  const isMounted = useMounted();

  if (!isMounted) {
    return null;
  }
  console.log('resolvedTheme', resolvedTheme);
  const FinalImage = () => {
    let src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

    switch (resolvedTheme) {
      case 'light':
        src = lightSrc;
        break;
      case 'dark':
        src = darkSrc;
        break;
    }

    return (
      <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <ExportedImage alt={alt} height={height} width={width} src={src} {...imageProps} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {/* <ExportedImage
          alt={alt}
          height={height}
          width={width}
          src={darkSrc}
          data-hide-on-theme="light"
          {...imageProps}
        /> */}
      </>
    );
  };

  if (withBorderAnimation || withBorder) {
    return (
      <ThemedImageMovingBorder $withBorder={Boolean(withBorder)}>
        <FinalImage />
      </ThemedImageMovingBorder>
    );
  }

  if (withoutStyles) {
    return <FinalImage />;
  }

  return (
    <StyledThemedImage>
      <FinalImage />
    </StyledThemedImage>
  );
};
