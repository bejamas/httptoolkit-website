'use client';

import { List } from '@phosphor-icons/react';
import { useState } from 'react';

import { Button } from '@/components/elements/button';
import { Drawer } from '@/components/modules/drawer';

export const MobileDrawerMenu = ({ children }: Component) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button style={{ width: 48, height: 48, padding: 0 }} $variant="secondary" onClick={toggleDrawer}>
        <List size={16} color="#fff" />
      </Button>
      <Drawer isOpen={isOpen} onClose={toggleDrawer}>
        {children}
      </Drawer>
    </>
  );
};
