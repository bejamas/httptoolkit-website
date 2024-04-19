import dynamic from 'next/dynamic';
import { DM_Sans } from 'next/font/google';
import type { Metadata, Viewport } from 'next/types';

import { PHProvider } from './providers';

import { Button } from '@/components/elements/button';
import { RadixProviders } from '@/components/layout/radix-layout';
import { StyledLayout } from '@/components/layout/styled-layout';
import { siteMetadata } from '@/lib/site-metadata';
import { buildMetadata } from '@/lib/utils/build-metadata';
import StyledComponentsRegistry from '@/styles/styled-component-registry';

const PostHogPageView = dynamic(() => import('@/components/layout/post-hog-page-view'), {
  ssr: false,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = buildMetadata({
  metadataBase: new URL(`${siteMetadata.siteUrl}`),
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    images: [`${siteMetadata.siteUrl}/images/hero-placeholder-dark.webp`],
  },
  twitter: {
    card: 'summary',
    title: siteMetadata.name,
    siteId: '982983215693680641',
    site: '@httptoolkit',
    creator: '@pimterry',
    creatorId: '20509812',
    images: [`${siteMetadata.siteUrl}/images/hero-placeholder-dark.webp`], // Must be an absolute URL
  },
});

const dmSansFont = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-dmSans' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#e1421f" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#fafafa" />

      <link rel="alternate" type="application/rss+xml" href={`${siteMetadata.siteUrl}/rss.xml`} />
      <link rel="privacy-policy" href="/privacy-policy/" />
      <link rel="terms-of-service" href="/terms-of-service/" />

      <body className={dmSansFont.variable}>
        <PHProvider>
          <StyledComponentsRegistry>
            <StyledLayout>
              <RadixProviders>
                <Button as="link" href="#main-content" $small className="skip-button">
                  Skip to main content
                </Button>
                <PostHogPageView />
                {children}
              </RadixProviders>
            </StyledLayout>
          </StyledComponentsRegistry>
        </PHProvider>
      </body>
    </html>
  );
}
