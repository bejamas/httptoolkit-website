'use client';

import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
  const [isLight, setIsLight] = useState(false);

  const onHandleTheme = () => {
    return setIsLight(t => !t);
  };

  useEffect(() => {
    const html = document.querySelector('html') as HTMLHtmlElement;
    if (isLight) {
      html.classList.add('light');
    } else {
      html.classList.remove('light');
    }
  }, [isLight]);

  return <div onClick={onHandleTheme}>Theme toggle</div>;
};
