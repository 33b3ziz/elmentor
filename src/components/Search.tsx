import { Input } from "./ui/input";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="relative  py-3 mx-auto md:w-96">
      <Input className="rounded-full" />
      <FaSearch className="absolute right-3 top-6" />
    </div>
  );
};

export default Search;
