import { useState, useEffect } from "react";
import MentorCounter from "@/components/MentorCounter";
import MentorDescription from "@/components/MentorDescription";
import MentorList from "@/components/MentorList";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { socket } from "@/socket";
import Reviews from "@/components/Reviews";
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

const Mentor = () => {
  const { id } = useParams();

  const { data: mentors, isLoading: isLoadingMentors } = useQuery({
    queryKey: ["mentors"],
    queryFn: async () => {
      const res = await fetch("https://radwan.up.railway.app/listMentors");
      const data = await res.json();
      return data;
    },
  });

  console.log(mentors);

  const { data, isLoading } = useQuery<Mentor>({
    queryKey: ["mentor", id],
    queryFn: async () => {
      const res = await fetch(`https://radwan.up.railway.app/listMentor/${id}`);
      const data = await res.json();
      return data;
    },
  });

  const mentor = data?.mentor;

  if (isLoading || isLoadingMentors) {
    return <Spinner />;
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
      {mentor && <MentorCounter linkedIn={mentor.linkedin} />}
      <MentorDescription mentorId={mentor?._id} />
      <h2 className="font-bold text-xl md:text-2xl text-primary">
        Suggestions
      </h2>
      <MentorList mentors={mentors} />

      <h2 className="font-bold text-xl md:text-2xl text-primary">Reviews</h2>
      <Reviews mentorId={id} mentorService={mentor?.services} />
    </section>
  );

  return (
    <section id="mentor" className="py-12 flex flex-col items-center">
      No Mentor found
    </section>
  );
};

export default Mentor;
