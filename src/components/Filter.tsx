import { Button } from "./ui/button";

const Filter = () => {
  return (
    <div className="flex gap-2 flex-wrap justify-center">
      <Button className="bg-muted border-2 border-border text-primary hover:text-white hover:border-primary px-4 md:px-10 ">
        All
      </Button>
      <Button className="bg-muted border-2 border-border text-primary hover:text-white hover:border-primary px-4 md:px-10 ">
        Mock interview
      </Button>
      <Button className="bg-muted border-2 border-border text-primary hover:text-white hover:border-primary px-4 md:px-10 ">
        Consultation
      </Button>
      <Button className="bg-muted border-2 border-border text-primary hover:text-white hover:border-primary px-4 md:px-10 ">
        Mentoring
      </Button>
    </div>
  );
};

export default Filter;
