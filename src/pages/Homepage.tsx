import MentorList from "@/components/MentorList";
import Search from "@/components/Search";
import { Button } from "@/components/ui/button";
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

const Homepage = () => {
  const [filter, setFilter] = useState("all");

  const { isLoading, data: mentorsList } = useQuery({
    queryKey: ["mentorsList", filter],
    queryFn: () => {
      if (filter === "all") {
        return getMentorsList();
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

      <div className="flex gap-2 flex-wrap justify-center">
        <Button
          onClick={() => setFilter("all")}
          className={`bg-muted border-2 border-border text-primary hover:text-white hover:border-primary px-4 md:px-10 
              ${filter === "all" ? "bg-slate-800 text-white" : " "}`}
        >
          All
        </Button>
        <Button
          onClick={() => setFilter("mock")}
          className={`bg-muted border-2 border-border text-primary hover:text-white hover:border-primary px-4 md:px-10 
            ${filter === "mock" ? "bg-slate-800 text-white" : " "}`}
        >
          Mock interview
        </Button>
        <Button
          onClick={() => setFilter("consultation")}
          className={`bg-muted border-2 border-border text-primary hover:text-white hover:border-primary px-4 md:px-10 
            ${filter === "consultation" ? "bg-slate-800 text-white" : " "}`}
        >
          Consultation
        </Button>
        <Button
          onClick={() => setFilter("mentoring")}
          className={`bg-muted border-2 border-border text-primary hover:text-white hover:border-primary px-4 md:px-10 
            ${filter === "mentoring" ? "bg-slate-800 text-white" : " "}`}
        >
          Mentoring
        </Button>
      </div>
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
