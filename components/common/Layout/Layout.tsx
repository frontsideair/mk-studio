import Footer from '../Footer';
import Header from '../Header';
import { FC, ReactNode } from 'react';
import { IndexQuery_menu } from 'types/IndexQuery';
interface LayoutProps {
  children: ReactNode;
  menu: IndexQuery_menu[];
  preview?: boolean;
}
const Layout: FC<LayoutProps> = ({ children, menu, preview }) => {
  return (
    <>
      <Header menu={menu} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
