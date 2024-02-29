import MentorCard from "./MentorCard";

const MentorList = () => {
  return (
    <div className="py-6 mx-auto">
      <div className="flex flex-wrap justify-center gap-4">
        <MentorCard
          mentorImg="/src/assets/mentor-1.webp"
          mentorName="sara hamdy"
          mentorTrack="flutter"
          MentorRate="3"
          mentorExp="3"
        ></MentorCard>
        <MentorCard
          mentorImg="/src/assets/mentor-2.webp"
          mentorName="sara hamdy"
          mentorTrack="ui/ux"
          MentorRate="4.5"
          mentorExp="1"
        ></MentorCard>
        <MentorCard
          mentorImg="/src/assets/mentor-3.webp"
          mentorName="sara hamdy"
          mentorTrack="frontend"
          MentorRate="3.5"
          mentorExp="3"
        ></MentorCard>
        <MentorCard
          mentorImg="/src/assets/mentor-4.webp"
          mentorName="sara hamdy"
          mentorTrack="data science"
          MentorRate="3"
          mentorExp="8"
        ></MentorCard>
        <MentorCard
          mentorImg="/src/assets/mentor-5.webp"
          mentorName="sara hamdy"
          mentorTrack="flutter"
          MentorRate="3"
          mentorExp="6"
        ></MentorCard>
        <MentorCard
          mentorImg="/src/assets/mentor-6.webp"
          mentorName="sara hamdy"
          mentorTrack="flutter"
          MentorRate="3"
          mentorExp="10"
        ></MentorCard>
        <MentorCard
          mentorImg="/src/assets/mentor-7.webp"
          mentorName="sara hamdy"
          mentorTrack="flutter"
          MentorRate="3"
          mentorExp="6"
        ></MentorCard>
        <MentorCard
          mentorImg="/src/assets/mentor-8.webp"
          mentorName="sara hamdy"
          mentorTrack="flutter"
          MentorRate="3"
          mentorExp="7"
        ></MentorCard>
        <MentorCard
          mentorImg="/src/assets/mentor-9.webp"
          mentorName="sara hamdy"
          mentorTrack="flutter"
          MentorRate="3"
          mentorExp="9"
        ></MentorCard>
        <MentorCard
          mentorImg="/src/assets/mentor-10.webp"
          mentorName="sara hamdy"
          mentorTrack="flutter"
          MentorRate="3"
          mentorExp="5"
        ></MentorCard>
      </div>
    </div>
  );
};

export default MentorList;
