import { FooterColumnBlock } from './components/footer-column-block';
import {
  StyledSeparator,
  StyledColumn,
  StyledContainer,
  StyledFooter,
  StyledFooterCopySection,
  StyledIconsWrapper,
} from './footer.styles';

import { Container } from '@/components/elements/container';
import { Github, TwitterX } from '@/components/elements/icon';
import { Link } from '@/components/elements/link';
import { SquareIcon } from '@/components/elements/square-icon';
import Stack from '@/components/elements/stack';
import { Text } from '@/components/elements/text';
import { ThemeToggle } from '@/components/elements/theme-toggle';
import { footerColumns } from '@/content/data/footer-columns';
import LogoFooter from '@/images/logo-footer.svg';
import { pageRoutes } from '@/lib/constants/routes';

export const Footer = () => {
  const { PRIVACY_POLICY, TERM_OF_SERVICES } = pageRoutes;
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledColumn>
          <Stack>
            <LogoFooter />
            <Text fontSize="m">
              There&apos;s a lot of new HTTP Toolkit features coming soon, like automated iOS interception, HTTP client
              tools, gRPC & GraphQL support, and request diffing.
            </Text>
          </Stack>
          <StyledIconsWrapper>
            <Stack>
              <Text as="label" fontSize="l" fontWeight="bold">
                FOLLOW US
              </Text>
              <Stack $direction="row">
                <Link href="https://github.com/httptoolkit">
                  <SquareIcon icon={Github} />
                </Link>
                <Link href="https://twitter.com/httptoolkit">
                  <SquareIcon icon={TwitterX} />
                </Link>
              </Stack>
            </Stack>
            <ThemeToggle id="themetogglefooter" />
          </StyledIconsWrapper>
        </StyledColumn>
        <StyledColumn>
          {footerColumns.map(column => {
            const hasSubHeading = !!column.subHeading;
            return (
              <Stack key={column.title} $gapxl={hasSubHeading ? '64px' : '16px'}>
                <FooterColumnBlock column={column} />
                {column.subHeading && <FooterColumnBlock column={column} />}
              </Stack>
            );
          })}
        </StyledColumn>
      </StyledContainer>
      <Container>
        <StyledSeparator />
        <StyledFooterCopySection>
          <Text fontSize="m">© {new Date().getFullYear()} HTTP Toolkit All rights reserved.</Text>
          <Stack $direction="row">
            <Link href={TERM_OF_SERVICES.href}>{TERM_OF_SERVICES.label}</Link>
            <Link href={PRIVACY_POLICY.href}>{PRIVACY_POLICY.label}</Link>
          </Stack>
        </StyledFooterCopySection>
      </Container>
    </StyledFooter>
  );
};
