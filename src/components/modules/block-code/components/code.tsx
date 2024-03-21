'use client';

import Prism from 'prismjs';
import { useEffect } from 'react';

import type { BlockCodeProps } from '../block-code.types';

export const Code = ({ children, language, title }: Component<Pick<BlockCodeProps, 'language' | 'title'>>) => {
  async function highlight() {
    Prism.highlightAll();
  }

  useEffect(() => {
    setTimeout(() => highlight(), 0);
  }, []);

  return (
    <pre aria-labelledby="code-label" className={language ?? 'language-js'} tabIndex={0}>
      <span id="code-label" className="visually-hidden">
        {title}
      </span>
      <code className={language ?? 'language-js'}>{children}</code>
    </pre>
  );
};
