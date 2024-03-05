import type { ButtonProps } from '@/components/elements/button/button.types';

export interface DownloadButtonProps extends Pick<ButtonProps, '$small' | '$variant' | '$withBorder'> {
  hasMobileFallback?: boolean;
}
