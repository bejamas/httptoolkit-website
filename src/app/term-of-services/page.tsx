import Content from './content.mdx';

import { ContentWithTable } from '@/components/sections/content-with-table';
import { HeroPoints } from '@/components/sections/hero-points';

export default function TermOfServices() {
  return (
    <>
      <HeroPoints
        title="Terms Of Service"
        text={`**There's some legal text below which formally defines how you're allowed to use HTTP Toolkit, this website, and your HTTP Toolkit user account. It looks serious, but it's all fairly standard boilerplate.** \n\n **The rules here apply if you're using the hosted services (e.g. httptoolkit.com and app.httptoolkit.tech) and user accounts, or the published application binaries. This does not limit your open-source freedoms, and if you're building HTTP Toolkit yourself on your own infrastructure then only the open-source licenses apply.** \n\n **Note that the binaries specifically are dual-licensed: they're available under either the AGPL v3, guaranteeing open-source freedoms within the constraints of AGPL, or under the Creative Commons BY-ND license, allowing unencumbered licensing for simple unmodified use.**`}
      />
      <ContentWithTable
        content={Content}
        links={[
          {
            text: 'Terms Of Service',
            href: '#example-1',
          },
          {
            text: 'Terms Of Service (“Terms”)',
            href: '#example-2',
          },
          {
            text: 'What information do we collect?',
            href: '#example-3',
            subItems: [
              {
                text: 'Information automatically collected',
                href: '#example-5',
              },
            ],
          },
        ]}
      />
    </>
  );
}
