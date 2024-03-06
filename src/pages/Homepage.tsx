import Filter from "@/components/Filter";
import MentorList from "@/components/MentorList";
import Search from "@/components/Search";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Homepage = () => {
  return (
    <section id="home" className="py-12 flex flex-col items-center">
      <h1 className="text-center font-bold text-xl">Find Your Best Mentor</h1>
      <Search />
      <Filter />
      <MentorList mentors={mentors} />
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
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
  {
    mentorImg: "/src/assets/mentor-10.webp",
    mentorName: "sara hamdy",
    mentorTrack: "flutter",
    MentorRate: "3",
    mentorExp: "5",
  },
  {
    mentorImg: "/src/assets/mentor-9.webp",
    mentorName: "sara hamdy",
    mentorTrack: "flutter",
    MentorRate: "3",
    mentorExp: "9",
  },
  {
    mentorImg: "/src/assets/mentor-8.webp",
    mentorName: "sara hamdy",
    mentorTrack: "flutter",
    MentorRate: "3",
    mentorExp: "7",
  },
  {
    mentorImg: "/src/assets/mentor-7.webp",
    mentorName: "sara hamdy",
    mentorTrack: "flutter",
    MentorRate: "3",
    mentorExp: "6",
  },
  {
    mentorImg: "/src/assets/mentor-6.webp",
    mentorName: "sara hamdy",
    mentorTrack: "flutter",
    MentorRate: "3",
    mentorExp: "10",
  },
  {
    mentorImg: "/src/assets/mentor-5.webp",
    mentorName: "sara hamdy",
    mentorTrack: "flutter",
    MentorRate: "3",
    mentorExp: "6",
  },
  {
    mentorImg: "/src/assets/mentor-4.webp",
    mentorName: "sara hamdy",
    mentorTrack: "data science",
    MentorRate: "3",
    mentorExp: "8",
  },
];

export default Homepage;
