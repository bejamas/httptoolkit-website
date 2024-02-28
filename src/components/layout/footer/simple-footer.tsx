import { StyledSeparator, StyledFooter, StyledFooterCopySection, StyledSimpleFooterWrapper } from './footer.styles';

import { Container } from '@/components/elements/container';
import { Link } from '@/components/elements/link';
import Stack from '@/components/elements/stack';
import { Text } from '@/components/elements/text';
import { ThemeToggle } from '@/components/elements/theme-toggle';
import LogoFooter from '@/images/logo-footer.svg';

export const SimpleFooter = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledSimpleFooterWrapper>
          <LogoFooter />
          <ThemeToggle id="theme-toggle-footer" />
        </StyledSimpleFooterWrapper>
        <StyledSeparator />
        <StyledFooterCopySection>
          <Text fontSize="m">© 2024 HTTP Toolkit All rights reserved.</Text>
          <Stack $direction="row">
            <Link href="/">Terms of Service</Link>
            <Link href="/">Privacy Policy</Link>
          </Stack>
        </StyledFooterCopySection>
      </Container>
    </StyledFooter>
  );
};
