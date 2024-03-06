import MentorCounter from "@/components/MentorCounter";
import MentorDescription from "@/components/MentorDescription";
import MentorList from "@/components/MentorList";

const Mentor = () => {
  return (
    <section className="py-12  px-4 md:px-12">
      <div className="relative w-full h-96 flex flex-col justify-evenly mb-6">
        <div className="w-full flex h-2/3  justify-center items-center">
          <h2 className="font-bold text-2xl md:text-4xl text-rose-100 ">
            Work With Out Me
          </h2>
        </div>
        <div className="px-5">
          <p className="font-bold text-xl text-slate-900">Mentor Name</p>
          <p className="text-slate-700">Mentor track</p>
        </div>
        <img
          src="/src/assets/mentor-1.webp"
          alt="landing-1"
          className="absolute -z-10 w-full h-96 object-cover"
        />
      </div>
      <MentorCounter />
      <MentorDescription />
      <h2 className="font-bold text-xl md:text-2xl text-slate-800">
        Suggestions
      </h2>
      <MentorList mentors={mentors} />
    </section>
  );
};
const mentors = [
  {
    mentorImg: "/src/assets/mentor-1.webp",
    mentorName: "sara hamdy",
    mentorTrack: "flutter",
    MentorRate: "3",
    mentorExp: "3",
  },
  {
    mentorImg: "/src/assets/mentor-1.webp",
    mentorName: "sara hamdy",
    mentorTrack: "flutter",
    MentorRate: "3",
    mentorExp: "3",
  },
  {
    mentorImg: "/src/assets/mentor-2.webp",
    mentorName: "sara hamdy",
    mentorTrack: "ui/ux",
    MentorRate: "4.5",
    mentorExp: "1",
  },
  {
    mentorImg: "/src/assets/mentor-3.webp",
    mentorName: "sara hamdy",
    mentorTrack: "frontend",
    MentorRate: "3.5",
    mentorExp: "3",
  },
];
export default Mentor;
