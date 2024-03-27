import {
  StyledThankYouColumnContent,
  StyledThankYouColumns,
  StyledGradientBottom,
  StyledTextContent,
  StyledThankYouSection,
  StyledSectionCTA,
} from './thank-you.styles';
import { StyledDisplayDevice } from '../frida/frida.styles';

import { Container } from '@/components/elements/container';
import { Heading } from '@/components/elements/heading';
import Stack from '@/components/elements/stack';
import { Text } from '@/components/elements/text';
import { ThemedImage } from '@/components/elements/themed-image';
import { LandingLayout } from '@/components/layout/landing-layout';
import { ContentCard } from '@/components/modules/content-card';
import { DownloadButton } from '@/components/modules/download-button';
import { NEWSLETTER_URLS } from '@/components/modules/newsletter/newsletter.values';

export default function WebPurchaseThankYouPage() {
  return (
    <LandingLayout>
      <div>
        <StyledDisplayDevice $hideOn="desktop">
          <StyledSectionCTA
            heading="Thanks for your purchase!"
            withDownload={false}
            image={{
              darkSrc: '/images/hero-placeholder-dark.webp',
              lightSrc: '/images/hero-placeholder-light.webp',
              withBorderAnimation: true,
              loading: 'eager',
            }}
          ></StyledSectionCTA>
        </StyledDisplayDevice>
        <StyledThankYouSection>
          <Container>
            <StyledThankYouColumns>
              <StyledThankYouColumnContent>
                <StyledTextContent>
                  <Stack $gapxl="48px">
                    <Stack $gapxl="32px">
                      <Stack $gapxl="24px">
                        <StyledDisplayDevice $hideOn="mobile">
                          <Heading fontSize="l" color="textGradient">
                            Thanks for your purchase!
                          </Heading>
                        </StyledDisplayDevice>
                        <Text fontSize="m" fontWeight="normal" color="darkGrey">
                          To get started, download & launch HTTP Toolkit, click &apos;Get Pro&apos; then &apos;Log into
                          existing account&apos;, and enter your email.
                        </Text>
                      </Stack>
                      <DownloadButton $withBorder $variant="primary" />
                    </Stack>
                    <Stack $gapxl="16px">
                      <Text fontSize="m" color="darkGrey">
                        There&apos;s lots more HTTP Toolkit features coming soon too, like automated iOS interception,
                        HTTP client tools, gRPC & GraphQL support, and request diffing.
                      </Text>
                      <ContentCard
                        title="Join the mailing list now, so you don't miss new features & releases:"
                        $isNewsletter
                        action={NEWSLETTER_URLS.download}
                      />
                    </Stack>
                  </Stack>
                </StyledTextContent>
              </StyledThankYouColumnContent>
              <StyledDisplayDevice $hideOn="mobile">
                <ThemedImage
                  withBorder
                  alt="Frida Mobile Interception Scripts"
                  darkSrc="/images/hero-placeholder-dark.webp"
                  lightSrc="/images/hero-placeholder-light.webp"
                  loading="eager"
                  width={662}
                  height={450}
                />
              </StyledDisplayDevice>
            </StyledThankYouColumns>
          </Container>
        </StyledThankYouSection>
        <StyledGradientBottom />
      </div>
    </LandingLayout>
  );
}
