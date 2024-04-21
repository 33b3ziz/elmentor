import MentorCounter from "@/components/MentorCounter";
import MentorDescription from "@/components/MentorDescription";
import MentorList from "@/components/MentorList";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

async function getMentor(id: any) {
  try {
    const response = await fetch(
      `https://radwan.up.railway.app/listMentor/${id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch mentors");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching mentors:", error);
    throw error;
  }
}

const Mentor = () => {
  const { id } = useParams();
  const [mentor, setMentor] = useState(null); // State to hold mentor data

  useEffect(() => {
    const fetchMentor = async () => {
      try {
        const mentorData = await getMentor(id);
        setMentor(mentorData.mentor);
      } catch (error) {
        console.error("Error fetching mentor:", error);
      }
    };

    fetchMentor();
  }, [id]);

  if (!mentor) {
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
          <p className="font-bold text-xl text-slate-900">{mentor.userName}</p>
          <p className="text-slate-700">{mentor.specialization}</p>
        </div>
        <img
          src="/src/assets/mentor-1.webp"
          alt="landing-1"
          className="absolute -z-10 w-full h-96 object-cover"
        />
      </div>
      <MentorCounter />
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
