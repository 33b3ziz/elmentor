import { FaStar, FaRegStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const MentorCard = (props: {
  mentorImg: string;
  mentorName: string;
  mentorTrack: string;
  MentorRate: string;
  mentorExp: string;
}) => {
  const navigate = useNavigate();

  return (
    <div
      className=" md:w-[250px] w-56 rounded-[1rem]"
      onClick={() => navigate("/mentor/1")}
    >
      <div>
        <Link to="/">
          <img
            src={props.mentorImg}
            className="block  md:w-72 md:h-72 w-56 h-56 rounded-t-[1rem] object-cover"
          ></img>
        </Link>
      </div>
      <div className="rounded-b-[1rem] border-slate-400 border p-2">
        <h3>{props.mentorName}</h3>
        <p>{props.mentorTrack}</p>
        <div className="flex justify-between ga-2 items-center">
          <span className="flex gap-1">
            {Array.from({ length: 5 }, (_, index: number) =>
              5 - index > Number(props.MentorRate) ? (
                <FaRegStar key={index} className="text-yellow-300" />
              ) : (
                <FaStar key={index} className="text-yellow-300" />
              )
            ).reverse()}
            {/* {Array.from(
              { length: 5 - Math.floor(Number(props.MentorRate)) },
              (_, index: number) => (
                <FaRegStar key={index} className="text-yellow-300" />
              )
            )} */}
          </span>
          <span>
            {Number(props.mentorExp) > 1
              ? `${props.mentorExp} years`
              : `${props.mentorExp} year`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
