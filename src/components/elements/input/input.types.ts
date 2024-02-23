import type { AriaAttributes, InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, AriaAttributes {
  errorMessage?: string;
  hasError?: boolean;
}
