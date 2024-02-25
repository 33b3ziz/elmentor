import Header from "@/components/Header";

import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="p-4">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
