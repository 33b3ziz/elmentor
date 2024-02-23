import { Link } from "react-router-dom";
import ModeToggle from "./ModeToggle";

const Header = () => {
  return (
    <header className="flex justify-between sm:px-4">
      <Link className="logo flex items-center" to="/">
        <img src="/src/assets/logo.svg" alt="logo" className="" />
        <h1 className="text-primary font-bold text-xl ml-2">Mentor</h1>
      </Link>
      <ModeToggle />
    </header>
  );
};

export default Header;
