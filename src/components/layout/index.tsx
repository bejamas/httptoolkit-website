import type { FooterProps } from './footer';
import { Footer } from './footer';
import { SimpleFooter } from './footer/simple-footer';
import { Header } from './header';

interface LayoutProps extends FooterProps {
  isNavigationEnabled?: boolean;
  withSimpleFooter?: boolean;
}

export const Layout = ({
  isNavigationEnabled = true,
  withSimpleFooter,
  children,
  withoutNewsletter,
}: Component<LayoutProps>) => {
  return (
    <>
      <Header isNavigationEnabled={isNavigationEnabled} />
      <main id="main-content">{children}</main>
      {withSimpleFooter ? <SimpleFooter /> : <Footer withoutNewsletter={withoutNewsletter} />}
    </>
  );
};
