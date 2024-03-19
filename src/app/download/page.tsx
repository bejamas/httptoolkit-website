import {
  StyledDownloadSection,
  StyledColumnContent,
  StyledDownloadaColumns,
  StyledGradientBottom,
  StyledGradientMobile,
  StyledImageWrapper,
} from './download.styles';

import { Container } from '@/components/elements/container';
import { Copy } from '@/components/elements/copy';
import { Gradient } from '@/components/elements/gradient';
import { Heading } from '@/components/elements/heading';
import Stack from '@/components/elements/stack';
import { Text } from '@/components/elements/text';
import { ThemedImage } from '@/components/elements/themed-image';
import { LandingLayout } from '@/components/layout/landing-layout';
import { ContentCard } from '@/components/modules/content-card';

export default async function DownloadPage() {
  return (
    <LandingLayout>
      <StyledGradientMobile>
        <Gradient />
      </StyledGradientMobile>
      <StyledDownloadSection>
        <Container>
          <StyledDownloadaColumns>
            <StyledColumnContent>
              <Heading fontSize="l" color="textGradient">
                Get started with HTTP Toolkit
              </Heading>
              <Copy text="brew install --cask http-toolkit" />
              <Stack $gapxl="8px">
                <Text fontSize="m" fontWeight="bold">
                  Copy & run the above to install HTTP Toolkit.
                </Text>
                <Text fontSize="m">
                  There&apos;s a lot of new HTTP Toolkit features coming soon, like automated iOS interception, HTTP
                  client tools, gRPC & GraphQL support, and request diffing.
                </Text>
              </Stack>
              <ContentCard
                title="Join the mailing list now, so you don't miss new features & releases:"
                $isNewsletter
              />
            </StyledColumnContent>
            <StyledImageWrapper>
              <ThemedImage
                withBorder
                alt="Frida Mobile Interception Scripts"
                darkSrc="/images/hero-placeholder-dark.webp"
                lightSrc="/images/hero-placeholder-light.webp"
                loading="eager"
              />
            </StyledImageWrapper>
          </StyledDownloadaColumns>
        </Container>
      </StyledDownloadSection>
      <StyledGradientBottom />
    </LandingLayout>
  );
}
