import MentorCard from "./MentorCard";

const MentorList = ({ mentors }: any) => {
  return (
    <div className="py-6 mx-auto">
      <div className="flex flex-wrap justify-center gap-4">
        {mentors.map((mentor, index) => (
          <MentorCard
            key={index}
            mentorImg={mentor.mentorImg}
            mentorName={mentor.mentorName}
            mentorTrack={mentor.mentorTrack}
            MentorRate={mentor.MentorRate}
            mentorExp={mentor.mentorExp}
          ></MentorCard>
        ))}
      </div>
    </div>
  );
};

export default MentorList;
