import { Link } from "react-router-dom";
import ModeToggle from "./ModeToggle";
import { Button } from "./ui/button";
import { useTheme } from "./ui/theme-provider";

interface NavbarProps {
  auth?: boolean;
}

const Navbar = ({ auth }: NavbarProps) => {
  const { theme } = useTheme();

  return (
    <nav className="flex justify-between sm:px-16">
      <Link className="logo flex items-center" to="/">
        <img
          src={`${
            theme === "dark"
              ? "/src/assets/logo-dark.svg"
              : "/src/assets/logo.svg"
          }`}
          alt="logo"
          width={32}
          height={32}
        />
        <h1 className="text-primary font-bold text-xl ml-2">Mentor</h1>
      </Link>
      {auth ? (
        <ModeToggle />
      ) : (
        <>
          <ul className="hidden lg:flex">
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
            <Link to="login">
              <Button className="bg-white text-primary border border-primary hover:text-white">
                Login
              </Button>
            </Link>
            <Link to="sign-up">
              <Button className="mx-4">Sign up</Button>
            </Link>
            <ModeToggle />
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
