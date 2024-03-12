import { StyledLink } from './default.styles';

export const defaultComponents = {
  a({ children, href }: Component<{ href: string }>) {
    return <StyledLink href={href}>{children}</StyledLink>;
  },
};
