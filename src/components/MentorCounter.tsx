import { Link } from "react-router-dom";

const MentorCounter = () => {
  return (
    <div className="flex justify-center">
      <div className="flex border-2 text-center rounded-lg">
        <div className="px-4 md:px-12 py-5 border-r-2">
          <p className="text-blue-950  font-bold">46</p>
          <p className="font-bold">completed</p>
        </div>
        <div className="px-4 md:px-12 py-5 border-r-2">
          <p className="text-blue-950  font-bold">7</p>
          <p className="font-bold">Experience</p>
        </div>
        <div className="px-4 md:px-12 py-5">
          <p className="text-blue-950  font-bold">25</p>
          <p className="font-bold">Active student</p>
        </div>
      </div>
      <Link to={"https://www.linkedin.com/"} className="flex justify-center items-center pl-10"><img src="" alt="" /></Link>
    </div >
  );
};

export default MentorCounter;
