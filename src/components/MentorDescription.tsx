import { Button } from "./ui/button";

const MentorDescription = () => {
  return (
    <div className="py-4">
      <div>
        <h2 className="font-bold text-lg">Description about me</h2>
        <p>
          I've been working with Students remotely for seven years . My
          experience has likely allowed you to build strong communication
          skills, enabling me to connect with students , understand their needs,
          and deliver effective and inspiring sessions. My goal is support
          stutends in achieving their educational and professional objectives .
        </p>
      </div>
      <div className="my-6">
        <Button className="mr-5 text-primary bg-white border-2 border-primary hover:text-white">
          Message
        </Button>
        <Button className="mr-5 text-primary bg-white border-2 border-primary hover:text-white">
          Book a session
        </Button>
      </div>
    </div>
  );
};

export default MentorDescription;
