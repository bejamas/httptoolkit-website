'use client';

import Masonry from 'react-layout-masonry';

export const MasonryGrid = ({ children }: Component) => {
  return (
    <Masonry columns={{ 640: 1, 768: 2, 1024: 2 }} gap={16}>
      {children}
    </Masonry>
  );
};
