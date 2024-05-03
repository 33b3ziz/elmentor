import { useState, useEffect } from "react";
import MentorCounter from "@/components/MentorCounter";
import MentorDescription from "@/components/MentorDescription";
import MentorList from "@/components/MentorList";
import { Loader } from "lucide-react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { socket } from "@/socket";
// import data from "../display-mentor.json";

interface MentorData {
  linkedin: string;
  levelOfExperience: string;
}

type Mentor = {
  mentor: {
    _id: string;
    userName: string;
    specialization: string;
    services: string[];
    linkedin: string;
    levelOfExperience: string;
    profissionalTitle: string;
    image: string;
    imageUrl: string;
    description: string;
    email: string;
    techStack: string[];
    mentor: boolean;
  };
};

const Mentor = ({ messageEvent }: { messageEvent: [] }) => {
  const { id } = useParams();

  const { data, isLoading } = useQuery<Mentor>({
    queryKey: ["mentor", id],
    queryFn: async () => {
      const res = await fetch(`https://radwan.up.railway.app/listMentor/${id}`);
      const data = await res.json();
      return data;
    },
  });

  const mentor = data?.mentor;

  console.log(mentor);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="py-12  px-4 md:px-12">
      <div className="relative w-full h-96 flex flex-col justify-evenly mb-6">
        <div className="w-full flex h-2/3  justify-center items-center">
          <h2 className="font-bold text-2xl md:text-4xl text-rose-100 ">
            Work With Out Me
          </h2>
        </div>
        <div className="px-5">
          <p className="font-bold text-xl text-slate-900">{mentor?.userName}</p>
          <p className="text-slate-700">{mentor?.specialization}</p>
        </div>
        <img
          src="/src/assets/mentor-1.webp"
          alt="landing-1"
          className="absolute -z-10 w-full h-96 object-cover"
        />
      </div>
      {mentor && <MentorCounter />}
      <MentorDescription />
      <h2 className="font-bold text-xl md:text-2xl text-primary">
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
