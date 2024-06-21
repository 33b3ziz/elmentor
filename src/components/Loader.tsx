import { useTheme } from "./ui/theme-provider";

const Loader = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`h-screen flex justify-center items-center ${
        window.matchMedia("(prefers-color-scheme: dark)") && theme === "dark"
          ? "bg-black"
          : "bg-white"
      }`}
    >
      <img
        src={`${
          window.matchMedia("(prefers-color-scheme: dark)") && theme === "dark"
            ? "/src/assets/logo-dark.svg"
            : "/src/assets/logo.svg"
        }`}
        alt="logo"
        className="animate-pulse"
        width={50}
        height={50}
      />
    </div>
  );
};

export default Loader;
