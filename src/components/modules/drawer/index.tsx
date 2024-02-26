import { CaretLeft } from '@phosphor-icons/react';

import { Button } from '@/components/elements/button';
import { styled } from '@/styles';

const DrawerContainer = styled.div<Pick<DrawerProps, 'isOpen'>>`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  transition: left 0.3s ease-in-out;
  box-shadow: ${({ isOpen }) => (isOpen ? ' 0 0 10px rgba(0, 0, 0, 0.1)' : 'initial')};
  z-index: 1000;
`;

const DrawerHeader = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGradient};
`;

const DrawerContent = styled.div`
  padding: 16px;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

interface DrawerProps {
  isOpen?: boolean;
  onClose: () => void;
}

export const Drawer = ({ isOpen = false, onClose, children }: Component<DrawerProps>) => {
  return (
    <DrawerContainer isOpen={isOpen}>
      <DrawerHeader>
        <Button
          style={{ width: 48, height: 48, padding: 0 }}
          $variant="secondary"
          onClick={onClose}
          aria-label="closemobilemenu"
        >
          <CaretLeft aria-hidden="true" size={16} color="#fff" weight="fill" />
        </Button>
      </DrawerHeader>
      <DrawerContent>{children}</DrawerContent>
    </DrawerContainer>
  );
};
