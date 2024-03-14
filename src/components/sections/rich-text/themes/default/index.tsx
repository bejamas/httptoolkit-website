import { StyledBiggerText, StyledHeading, StyledLink, StyledSectionBreak, StyledText } from './default.styles';
import type { StyledSpacerProps } from './default.types';

import { Accordion } from '@/components/modules/accordion';
import type { AccordionProps } from '@/components/modules/accordion/accordion.types';
import { CTABox } from '@/components/modules/cta-box';
import type { CTABoxProps } from '@/components/modules/cta-box/cta-box.types';

const Heading2 = ({ children, id }: Component) => {
  return (
    <StyledHeading forwardedAs="h2" fontSize="m" color="lightGrey" id={id}>
      {children}
    </StyledHeading>
  );
};

const Heading3 = ({ children, id }: Component) => {
  return (
    <StyledHeading forwardedAs="h3" fontSize="s" color="lightGrey" id={id}>
      {children}
    </StyledHeading>
  );
};

// TODO: need to define the default styles
export const defaultComponents = {
  Heading2,
  Heading3,
  h2: Heading2,
  h3: Heading3,
  a({ children, href }: Component<{ href: string }>) {
    return <StyledLink href={href}>{children}</StyledLink>;
  },
  p({ children }: Component) {
    return (
      <StyledText fontSize="m" color="darkGrey">
        {children}
      </StyledText>
    );
  },
  BiggerText({ text }: Component<{ text: string }>) {
    return (
      <StyledBiggerText fontSize="l" fontWeight="bold" color="lightGrey">
        {text}
      </StyledBiggerText>
    );
  },
  Spacer({ $spacing }: StyledSpacerProps) {
    return <StyledSectionBreak $spacing={$spacing} />;
  },
  Accordion(props: AccordionProps) {
    return <Accordion {...props} />;
  },
  CTABox(props: CTABoxProps) {
    return <CTABox {...props} />;
  },
};
