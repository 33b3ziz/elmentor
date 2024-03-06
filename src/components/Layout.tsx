import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Layout = () => {
  return (
    <main className="p-4">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
