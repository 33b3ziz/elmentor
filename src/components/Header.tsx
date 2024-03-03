import { Link } from "react-router-dom";
import ModeToggle from "./ModeToggle";
import { Button } from "./ui/button";

interface HeaderProps {
  auth?: boolean;
}

const Header = ({ auth }: HeaderProps) => {
  return (
    <header className="flex justify-between sm:px-16">
      <Link className="logo flex items-center" to="/">
        <img src="/src/assets/logo.svg" alt="logo" className="" />
        <h1 className="text-primary font-bold text-xl ml-2">Mentor</h1>
      </Link>
      {auth ? (
        <ModeToggle />
      ) : (
        <>
          <ul className="flex">
            <li className="py-2 px-4 hover:text-primary transition">
              <a href="#home" className="active font-semibold">
                Home
              </a>
            </li>
            <li className="py-2 px-4 hover:text-primary transition font-semibold">
              <a href="#about-us">About Us</a>
            </li>
            <li className="py-2 px-4 hover:text-primary transition font-semibold">
              <a href="#services">Services</a>
            </li>
            <li className="py-2 px-4 hover:text-primary transition font-semibold">
              <a href="#reviews">Reviews</a>
            </li>
            <li className="py-2 px-4 hover:text-primary transition font-semibold">
              <Link to="contact">Contact Us</Link>
            </li>
          </ul>
          <div className="flex items-center">
            <Button className="bg-white text-primary border border-primary hover:text-white">
              <Link to="login">Login</Link>
            </Button>
            <Button className="mx-4">
              <Link to="sign-up">Sign up</Link>
            </Button>
            <ModeToggle />
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
