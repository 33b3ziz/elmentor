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
import { getMentorsList } from "@/services/apiMentors";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";

const Homepage = () => {
  const { isLoading, data: mentorsList } = useQuery({
    queryKey: ["mentorsList"],
    queryFn: getMentorsList,
  });
  if (isLoading) return <Loader />;

  console.log(mentorsList);

  return (
    <section id="home" className="py-12 flex flex-col items-center">
      <h1 className="text-center font-bold text-xl">Find Your Best Mentor</h1>
      <Search />
      <Filter />
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
