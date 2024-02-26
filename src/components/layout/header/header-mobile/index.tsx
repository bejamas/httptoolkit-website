import { StyledMobileWrapper } from './header-mobile.styles';
import { MobileDrawerMenu } from './mobile-drawer-menu';

export const MobileHeader = () => {
  return (
    <StyledMobileWrapper>
      <MobileDrawerMenu>menu</MobileDrawerMenu>
    </StyledMobileWrapper>
  );
};
