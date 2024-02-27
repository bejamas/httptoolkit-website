import {
  StyledSeparator,
  StyledColumn,
  StyledContainer,
  StyledFooter,
  StyledMenuItems,
  StyledFooterCopySection,
} from './footer.styles';

import { Container } from '@/components/elements/container';
import { Github, TwitterX } from '@/components/elements/icon';
import { Link } from '@/components/elements/link';
import { SquareIcon } from '@/components/elements/square-icon';
import Stack from '@/components/elements/Stack';
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
          <Stack $gap="76px">
            <Stack>
              <LogoFooter />
              <Text fontSize="m">
                Theres a lot of new HTTP Toolkit features coming soon, like automated iOS interception, HTTP client
                tools, gRPC & GraphQL support, and request diffing.
              </Text>
            </Stack>
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
            <ThemeToggle id="theme-toggle-footer" />
          </Stack>
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
          <Stack>
            <ColumnHeading>Resources</ColumnHeading>
            <StyledMenuItems>
              <Link href="/blog">Blog</Link>
              <Link href="/docs">Docs</Link>
              <Link href="/">FAQ</Link>
            </StyledMenuItems>
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
