import { Button } from "./ui/button";

const Filter = () => {
  return (
    <div className="flex gap-2 flex-wrap justify-center">
      <Button className="bg-blue-100 px-4 md:px-10 border-blue-800 border text-blue-950 hover:bg-blue-300">
        All
      </Button>
      <Button className="bg-blue-100 px-4 md:px-10 border-blue-800 border text-blue-950 hover:bg-blue-300">
        Mock interview
      </Button>
      <Button className="bg-blue-100 px-4 md:px-10 border-blue-800 border text-blue-950 hover:bg-blue-300">
        Consultation
      </Button>
      <Button className="bg-blue-100 px-4 md:px-10 border-blue-800 border text-blue-950 hover:bg-blue-300">
        Mentoring
      </Button>
    </div>
  );
};

export default Filter;
