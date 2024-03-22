import type { ExportedImageProps } from 'next-image-export-optimizer';
import ExportedImage from 'next-image-export-optimizer';

import { StyledImageWrapper } from './image.styles';

export type ImageProps = ExportedImageProps & {
  $forRichText?: boolean;
};

export const Image = ({ $forRichText, ...props }: ImageProps) => {
  return (
    <StyledImageWrapper $forRichText={$forRichText}>
      <ExportedImage {...props} />
    </StyledImageWrapper>
  );
};
