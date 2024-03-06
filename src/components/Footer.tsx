import { Link } from "react-router-dom";
import { useTheme } from "./ui/theme-provider";
import { FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className=" mx-16  ">
      <nav className="flex pt-6 pb-12 border-y-2">
        <div className="basis-1/4">
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
          <p className="text-primary my-7">
            Join thousands of students in the most powerful follow-up and
            training program that helps you reach the professional job you dream
            of under the supervision of specialists.
          </p>
          <div className="text-primary flex gap-4">
            <div className="w-10 h-10 bg-white shadow-[0_25px_50px_-1px_rgba(0,0,0,0.30)] flex items-center justify-center rounded-full">
              <FaGoogle width={30} height={30} />
            </div>
            <div className="w-10 h-10 bg-white shadow-[0_25px_50px_-1px_rgba(0,0,0,0.30)] flex items-center justify-center rounded-full">
              <FaLinkedin width={30} height={30} />
            </div>
            <div className="w-10 h-10 bg-white shadow-[0_25px_50px_-1px_rgba(0,0,0,0.30)] flex items-center justify-center rounded-full">
              <FaTwitter width={30} height={30} />
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </nav>
      <div className="flex justify-center items-center text-[#272444] opacity-[50%] font-semibold my-4">
        Mentor 2024 . All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
