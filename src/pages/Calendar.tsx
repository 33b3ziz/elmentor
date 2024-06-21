import Spinner from "@/components/Spinner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useBookingsMentor } from "@/contexts/BookingsMentorContext";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const navigate = useNavigate();
  const { value, setValue } = useBookingsMentor()!;
  const { mentorId } = useParams();
  const { data: mentor, isLoading: isLoadingMentor } = useQuery({
    queryKey: ["mentor", mentorId],
    queryFn: async () => {
      const res = await fetch(
        `https://radwan.up.railway.app/listMentor/${mentorId}`
      );
      const data = await res.json();
      return data;
    },
  });

  const { data: mentorAvailability } = useQuery({
    queryKey: ["mentorAvailability", mentorId],
    queryFn: async () => {
      const res = await fetch(
        `https://ali.up.railway.app/api/v1/availability/check`,
        {
          method: "POST",
          body: JSON.stringify({ mentorId }),
          headers: {
            ContentType: "application/json",
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  console.log(mentorAvailability);

  if (isLoadingMentor) {
    return <Spinner />;
  }

  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <h2>Step 1 of 2</h2>
      <div className="flex gap-28 w-full">
        <div className="flex basis-1/2 flex-col gap-3 justify-center items-center border-b p-2">
          <div className="flex justify-center items-center gap-3">
            <Avatar className="w-[75px] h-[75px]">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                width={100}
                height={100}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-bold text-primary text-xl">
                {mentor?.mentor.userName}
              </h2>
              <span className="text-gray-500">
                {mentor?.mentor.specialization}
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-primary text-xl">
              30-mins 1:1 Session
            </h2>
            <p className="mt-8 text-gray-500">session duration</p>
            <h2 className="font-bold text-primary text-xl">30 minutes</h2>
            <p className="mt-8 text-gray-500">About</p>
            <h2 className="font-bold text-primary text-xl">
              {mentor?.mentor.services}
            </h2>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 basis-1/2">
          <h2 className="font-bold text-primary">Selecte date and time</h2>
          <div>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
            <Button
              className="w-full mt-4"
              onClick={() => {
                setValue({ ...value, day: date?.toISOString().split("T")[0] });
                navigate(`/booking/timeslots/${mentorId}`);
              }}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CalendarPage;
