import { Button } from "react-day-picker";

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="flex gap-2 flex-wrap justify-center">
      <Button
        onClick={() => setFilter("all")}
        className={`bg-muted border-2 border-border text-primary hover:text-white hover:border-primary px-4 md:px-10 
          ${filter === "all" ? "bg-blue-800 text-white" : ""}`}
      >
        All
      </Button>
      <Button
        onClick={() => setFilter("mock")}
        className={`bg-muted border-2 border-border text-primary hover:text-white hover:border-primary px-4 md:px-10 
        ${filter === "mock" ? "bg-blue-800 text-white" : ""}`}
      >
        Mock interview
      </Button>
      <Button
        onClick={() => setFilter("consultation")}
        className={`bg-muted border-2 border-border text-primary hover:text-white hover:border-primary px-4 md:px-10 
        ${filter === "consultation" ? "bg-blue-800 text-white" : ""}`}
      >
        Consultation
      </Button>
      <Button
        onClick={() => setFilter("mentoring")}
        className={`bg-muted border-2 border-border text-primary hover:text-white hover:border-primary px-4 md:px-10 
        ${filter === "mentoring" ? "bg-blue-800 text-white" : ""}`}
      >
        Mentoring
      </Button>
    </div>
  );
};

export default Filter;
