import { Input } from "./ui/input";
import { FaFilter, FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="relative  py-3 mx-auto md:w-96">
      <Input className="rounded-full" />
      <FaSearch className="absolute right-10 top-6" />
      <FaFilter className="absolute right-4 top-6" />
    </div>
  );
};

export default Search;
