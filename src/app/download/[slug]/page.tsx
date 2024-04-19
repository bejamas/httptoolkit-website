import type { Metadata } from 'next/types';

import { SelfDownload } from './self-download';
import {
  StyledDownloadSection,
  StyledColumnContent,
  StyledDownloadaColumns,
  StyledGradientBottom,
  StyledGradientMobile,
  StyledImageWrapper,
} from '../download.styles';

import { Container } from '@/components/elements/container';
import { Copy } from '@/components/elements/copy';
import { Gradient } from '@/components/elements/gradient';
import { Heading } from '@/components/elements/heading';
import { Link } from '@/components/elements/link';
import Stack from '@/components/elements/stack';
import { Text } from '@/components/elements/text';
import { ThemedImage } from '@/components/elements/themed-image';
import { LandingLayout } from '@/components/layout/landing-layout';
import { ContentCard } from '@/components/modules/content-card';
import { NEWSLETTER_URLS } from '@/components/modules/newsletter/newsletter.values';
import { getDownloadOptionsDictionary } from '@/content/data/download-dictionary';
import { buildMetadata } from '@/lib/utils/build-metadata';

type DownloadPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: DownloadPageProps): Promise<Metadata> {
  const slug = params.slug;
  const downloadItems = await getDownloadOptionsDictionary();
  const currentDownloadData = downloadItems.find(item => item.slug === slug);

  const downloadMetaData = buildMetadata({
    title: `Download HTTP Toolkit for ${currentDownloadData?.text}`,
  });

  return downloadMetaData;
}

export async function generateStaticParams() {
  const downloadItems = await getDownloadOptionsDictionary();
  return downloadItems.map(software => ({
    slug: software.slug,
  }));
}

export default async function DownloadPage({ params }: DownloadPageProps) {
  const { slug } = params;
  const downloadItems = await getDownloadOptionsDictionary();
  const currentDownloadData = downloadItems.find(item => item.slug === slug);
  const hasDownloadCommand = typeof currentDownloadData?.downloadCommand === 'string';

  return (
    <LandingLayout>
      {currentDownloadData?.releasePath && <SelfDownload releasePath={currentDownloadData.releasePath} />}
      <StyledGradientMobile>
        <Gradient />
      </StyledGradientMobile>
      <StyledDownloadSection>
        <Container>
          <StyledDownloadaColumns>
            <StyledColumnContent>
              <Heading fontSize="l" color="textGradient">
                {hasDownloadCommand ? 'Get started with HTTP Toolkit' : 'HTTP Toolkit is now downloading...'}
              </Heading>
              {hasDownloadCommand ? (
                <Stack>
                  {currentDownloadData.downloadCommand ? <Copy text={currentDownloadData.downloadCommand} /> : null}
                  <Text fontSize="l" fontWeight="medium" color="white">
                    Copy & run the above to install HTTP Toolkit.
                  </Text>
                </Stack>
              ) : (
                <Text fontSize="l" fontWeight="medium">
                  Didn&apos;t work?{' '}
                  <Link
                    target="_self"
                    href={`https://github.com/httptoolkit/httptoolkit-desktop/releases/download/${currentDownloadData?.releasePath}`}
                  >
                    <Text fontSize="l" as="span" color="cinnarbarRed" fontWeight="medium">
                      Click here
                    </Text>
                  </Link>
                </Text>
              )}

              <Stack $gapxl="8px">
                <Text fontSize="m">
                  There&apos;s a lot of new HTTP Toolkit features coming soon, like automated iOS interception, HTTP
                  client tools, gRPC & GraphQL support, and request diffing.
                </Text>
              </Stack>
              <ContentCard
                title="Join the mailing list now, so you don't miss new features & releases:"
                $isNewsletter
                action={NEWSLETTER_URLS.download}
              />
            </StyledColumnContent>
            <StyledImageWrapper>
              <ThemedImage
                withBorder
                alt="Get started with HTTP Toolkit"
                darkSrc="/images/hero-placeholder-dark.webp"
                lightSrc="/images/hero-placeholder-light.webp"
                loading="eager"
                width={662}
                height={450}
              />
            </StyledImageWrapper>
          </StyledDownloadaColumns>
        </Container>
      </StyledDownloadSection>
      <StyledGradientBottom />
    </LandingLayout>
  );
}
