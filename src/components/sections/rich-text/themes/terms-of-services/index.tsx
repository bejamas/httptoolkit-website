import {
  StyledTermOfServicesHeading,
  StyledTermOfServicesLink,
  StyledTermOfServicesSectionBreak,
  StyledTermOfServicesText,
  StyledTermOfServicesUL,
} from './terms-of-services.styles';

export const termOfServicesComponents = {
  h2({ children }: Component) {
    return (
      <StyledTermOfServicesHeading forwardedAs="h2" fontSize="m" color="lightGrey">
        {children}
      </StyledTermOfServicesHeading>
    );
  },
  h3({ children }: Component) {
    return (
      <StyledTermOfServicesHeading forwardedAs="h3" fontSize="s" color="lightGrey">
        {children}
      </StyledTermOfServicesHeading>
    );
  },
  p({ children }: Component) {
    return (
      <StyledTermOfServicesText fontSize="m" color="darkGrey">
        {children}
      </StyledTermOfServicesText>
    );
  },
  Spacer() {
    return <StyledTermOfServicesSectionBreak />;
  },
  a({ children, href }: Component<{ href: string }>) {
    return <StyledTermOfServicesLink href={href}>{children}</StyledTermOfServicesLink>;
  },
  ul({ children }: Component) {
    return <StyledTermOfServicesUL>{children}</StyledTermOfServicesUL>;
  },
};
