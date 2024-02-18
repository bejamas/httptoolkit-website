import Image from 'next/image';
import { compileMDX } from 'next-mdx-remote/rsc';

import styles from './page.module.css';

import { Label } from '@/components/elements/label.styles';

interface PostProps {
  title: string;
  slug: string;
}

export default async function Home() {
  const { content, frontmatter } = await compileMDX<PostProps>({
    source: `---
      title: RSC Frontmatter Example
      slug: "frontmatter-example-post"
      ---
      # Hello World
      This is from Server Components!
    `,
    options: { parseFrontmatter: true },
  });

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.slug}</p>
        {content}

        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image src="/vercel.svg" alt="Vercel Logo" className={styles.vercelLogo} width={100} height={24} priority />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image className={styles.logo} src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Label>
            Learn <span>-&gt;</span>
          </Label>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
        </a>
      </div>
    </main>
  );
}
