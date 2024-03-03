import { FC, ReactNode } from "react";
import styles from "./index.module.css";
import Header from "../Header";
import Footer from "../Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
