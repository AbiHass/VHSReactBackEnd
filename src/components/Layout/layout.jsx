import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LayoutWrapper } from "./layoutStyles";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <LayoutWrapper>{children}</LayoutWrapper>;
};
export default Layout;
