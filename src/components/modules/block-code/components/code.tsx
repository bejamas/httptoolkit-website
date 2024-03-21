'use client';

import * as Prism from 'prismjs';
import React, { useEffect } from 'react';

import 'prismjs/themes/prism-tomorrow.css';
import type { BlockCodeProps } from '../block-code.types';

export const Code = ({ children, language, title }: Component<Pick<BlockCodeProps, 'language' | 'title'>>) => {
  const codeRef = React.createRef<HTMLPreElement>();

  async function highlight() {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current as Element);
    }
  }

  useEffect(() => {
    highlight();
  }, [language, children]);

  return (
    <pre aria-labelledby="code-label" className="w-prismjs">
      <span id="code-label" className="visually-hidden">
        {title}
      </span>
      <code ref={codeRef} className={language}>
        {children}
      </code>
    </pre>
  );
};
