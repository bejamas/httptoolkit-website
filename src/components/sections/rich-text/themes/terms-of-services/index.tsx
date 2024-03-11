import {
  StyledTermOfServicesHeading,
  StyledTermOfServicesLink,
  StyledTermOfServicesSectionBreak,
  StyledTermOfServicesText,
  StyledTermOfServicesUL,
} from './terms-of-services.styles';

const Heading2 = ({ children, id }: Component) => {
  return (
    <StyledTermOfServicesHeading forwardedAs="h2" fontSize="m" color="lightGrey" id={id}>
      {children}
    </StyledTermOfServicesHeading>
  );
};

const Heading3 = ({ children, id }: Component) => {
  return (
    <StyledTermOfServicesHeading forwardedAs="h3" fontSize="s" color="lightGrey" id={id}>
      {children}
    </StyledTermOfServicesHeading>
  );
};

export const termOfServicesComponents = {
  Heading2,
  Heading3,
  h2: Heading2,
  h3: Heading3,
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
