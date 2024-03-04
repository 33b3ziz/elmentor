import Header from "@/components/Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

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
