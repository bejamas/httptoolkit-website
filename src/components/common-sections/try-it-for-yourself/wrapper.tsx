'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

export const TryYourselfWrapper = ({ children }: Component) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return <div ref={ref}>{inView && children}</div>;
};
