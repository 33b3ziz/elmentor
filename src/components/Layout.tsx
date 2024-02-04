import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-dvh p-4">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
