import 'styled-components';
import type { theme } from '../styles/theme';

type Theme = typeof theme;

declare module 'styled-components' {
  export type DefaultTheme = Theme;
}
