import MentorList from "@/components/MentorList";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  getConsultMentors,
  getMentoringMentors,
  getMentorsList,
  getMockMentors,
} from "@/services/apiMentors";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useState } from "react";

import Search from "@/components/Search";
import Filter from "@/components/Filter";

const Homepage = () => {
  const [filter, setFilter] = useState("all");
  const [efilter, seteFilter] = useState();

  const { isLoading, data: mentorsList } = useQuery({
    queryKey: ["mentorsList", filter],
    queryFn: async () => {
      if (filter === "all") {
        // const { specialization, levelOfExperience } = efilter;
        // let filteredMentors = await getMentorsList();

        // if (specialization) {
        //   filteredMentors = filteredMentors.filter(
        //     (mentor) => mentor.specialization === specialization
        //   );
        // }

        // if (levelOfExperience) {
        //   filteredMentors = filteredMentors.filter(
        //     (mentor) => mentor.levelOfExperience === levelOfExperience
        //   );
        // }

        const { specialization, levelOfExperience } = efilter;
        let filteredMentors = await getMentorsList();

        if (specialization) {
          filteredMentors = filteredMentors.filter(
            (mentor) => (mentor.specialization = specialization)
          );
        }

        if (levelOfExperience) {
          filteredMentors = filteredMentors.filter(
            (mentor) => (mentor.levelOfExperience = levelOfExperience)
          );
        }
        console.log(filteredMentors);

        return filteredMentors;
        return getMentorsList();
        console.log(filteredMentors);
      } else if (filter === "mock") {
        return getMockMentors();
      } else if (filter === "consultation") {
        return getConsultMentors();
      } else if (filter === "mentoring") {
        return getMentoringMentors();
      } else {
        return getMentorsList();
      }
    },
  });

  if (isLoading) return <Loader />;

  return (
    <section id="home" className="py-12 flex flex-col items-center">
      <h1 className="text-center font-bold text-xl">Find Your Best Mentor</h1>
      <Search />
      <Filter filter={filter} setFilter={setFilter} />
      <MentorList mentors={mentorsList} />
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

export default Homepage;
