import {
  StyledSeparator,
  StyledColumn,
  StyledContainer,
  StyledFooter,
  StyledMenuItems,
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
import LogoFooter from '@/images/logo-footer.svg';

const ColumnHeading = ({ children }: Component) => {
  return (
    <Text as="label" fontSize="m" color="cinnarbarRed" fontWeight="bold">
      {children}
    </Text>
  );
};

export const Footer = () => {
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
          <Stack>
            <ColumnHeading>Product</ColumnHeading>
            <StyledMenuItems>
              <Link href="/">Http Toolkit for MacOS</Link>
              <Link href="/">Http Toolkit for Windows</Link>
              <Link href="/">Http Toolkit for Linux</Link>
              <Link href="/">Pricing</Link>
            </StyledMenuItems>
          </Stack>
          <Stack $gapxl="64px">
            <Stack>
              <ColumnHeading>Resources</ColumnHeading>
              <StyledMenuItems>
                <Link href="/blog">Blog</Link>
                <Link href="/docs">Docs</Link>
                <Link href="/">FAQ</Link>
              </StyledMenuItems>
            </Stack>
            <Stack>
              <ColumnHeading>Projects</ColumnHeading>
              <StyledMenuItems>
                <Link href="/">WIll it CORS?</Link>
              </StyledMenuItems>
            </Stack>
          </Stack>
          <Stack>
            <ColumnHeading>Alternatives</ColumnHeading>
            <StyledMenuItems>
              <Link href="/">Fiddler</Link>
              <Link href="/">Chrome Dev Tools</Link>
              <Link href="/">Charles</Link>
            </StyledMenuItems>
          </Stack>
          <Stack>
            <ColumnHeading>Integrations</ColumnHeading>
            <StyledMenuItems>
              <Link href="/">Android</Link>
              <Link href="/">Docker</Link>
              <Link href="/">Python</Link>
              <Link href="/">Ruby</Link>
              <Link href="/">Java</Link>
              <Link href="/">Electron</Link>
              <Link href="/">Javascript</Link>
              <Link href="/">All Integrations</Link>
            </StyledMenuItems>
          </Stack>
        </StyledColumn>
      </StyledContainer>
      <Container>
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
