import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from "@/components/ui/form";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// import { useBookingsMentor } from "@/contexts/BookingsMentorContext";
// import { getMentorAvailablity } from "@/services/apiMentors";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useEffect, useRef, useState } from "react";
// import { useForm } from "react-hook-form";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
// import { z } from "zod";

// const timeSlotsSchema = z.object({
//   timeslot: z.string({
//     required_error: "Please select a time slot",
//   }),
// });

const SelectTimeAvailable = () => {
  const navigate = useNavigate();
  // const [timeSlots, setTimeSlots] = useState();
  // const { value, setValue } = useBookingsMentor()!;
  // const { mentorId } = useParams();
  // const ref = useRef();
  // console.log(value);

  // const form = useForm<z.infer<typeof timeSlotsSchema>>({
  //   resolver: zodResolver(timeSlotsSchema),
  // });

  // useEffect(() => {
  //   if (value) {
  //     if (value.mentorId) {
  //       setTimeSlots(getMentorAvailablity(mentorId));
  //     }
  //     console.log(value.mentorId);
  //     console.log(timeSlots);
  //   }
  // }, []);

  // function onSubmit(values: z.infer<typeof timeSlotsSchema>) {
  //   setValue({ ...value, timeslot: values.timeslot });
  //   navigate("");
  // }

  return (
    <>
      <div className=" flex flex-col items-center justify-start w-auto gap-[49%] p-10 bg-white-A700 ">
        <p className="mt-[17px] text-base text-slate-600">STEP 2 of 2</p>
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-start w-full pl-20 max-w-[1677px]">
          <div className="flex flex-col items-start justify-start w-[27%] gap-[55px]">
            <div className="flex flex-col items-center justify-start w-full gap-10">
              <div className="flex flex-row justify-center w-full pt-8 pb-[31px] border-gray-500 border-b border-solid">
                <div className="flex flex-row justify-center items-center w-full gap-4">
                  <img
                    src="src/assets/mentor-1.webp"
                    alt="circleimage"
                    className="h-32 w-32 rounded-[50%]"
                  />
                  <div className="flex flex-col items-center md:items-start justify-center w-[70%] gap-[25px] py-[23px]">
                    <div className="flex flex-row justify-start">
                      <h1 className="mt-px w-52">Mohamed Abdelaziz</h1>
                    </div>
                    <p className=" text-zinc-500">Frontend</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start">
                <h2 className="  w-52  text-xl">30-mins 1:1 Session</h2>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[40%] ">
              <p className=" text-gray-600">Session duration</p>
              <div className="flex flex-row justify-start">
                <h3 className="mt-px">30 minutes</h3>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[60%] gap-[25px]">
              <p className=" text-gray-500 ">About</p>
              <div className="flex flex-row justify-start pt-[5px]">
                <h4 className=" text-1xl">General mentorship</h4>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:justify-start w-[54%] gap-12 md:border-gray-600 md:border-l md:border-solid">
            <div className="flex flex-col items-center justify-start w-4/5 gap-10">
              <div className="flex flex-col items-center justify-start w-full gap-20">
                <div className="flex flex-col items-start justify-start w-full gap-[50px]">
                  <h2>Selecte available time</h2>
                  <div className="flex flex-row justify-start items-center w-[98%] gap-2">
                    <h3>Date:</h3>
                    <div className="flex flex-row justify-between w-[88%]">
                      <p className="mt-[4px] text-gray-400">
                        Tuesday, Jan 23 January 2024
                      </p>
                      <div className="flex flex-row justify-center pt-1">
                        <a href="#" className=" text-blue-600 font-normal">
                          Change
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-center w-full pb-[31px] border-blue_gray-900_59 border-b border-solid">
                  <div className="flex flex-row justify-between items-center w-full">
                    <p className=" text-gray-500">Available time slots</p>
                    <BiChevronRight className=" text-3xl  text-gray-600" />
                  </div>
                </div>
              </div>
              {/* <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col gap-16 justify-center items-center"
                > */}
              {/* <FormField
                    name="timeslot"
                    render={({ field }) => ( */}
              {/* // <FormItem {...field}> */}
              <Tabs>
                <div className="flex flex-row justify-between w-full pr-1.5 ">
                  {/* <FormControl> */}
                  <TabsList className="flex gap-10 bg-transparent">
                    <div className="flex flex-col items-center justify-start gap-8 ">
                      <TabsTrigger
                        value="11:15 AM"
                        className="border-2 font-semibold  bg-white text-black border-slate-950 data-[state=active]:bg-primary data-[state=active]:text-white"
                      >
                        11:15 AM
                      </TabsTrigger>
                      <TabsTrigger
                        value="1:30 PM"
                        className="border-2 font-semibold  bg-white text-black border-slate-950 data-[state=active]:bg-primary data-[state=active]:text-white"
                      >
                        1:30 PM
                      </TabsTrigger>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-8 ">
                      <TabsTrigger
                        value="11:50 AM"
                        className="border-2 font-semibold  bg-white text-black border-slate-950 data-[state=active]:bg-primary data-[state=active]:text-white"
                      >
                        11:50 AM
                      </TabsTrigger>
                      <TabsTrigger
                        value="2:20 PM"
                        className="border-2 font-semibold  bg-white text-black border-slate-950 data-[state=active]:bg-primary data-[state=active]:text-white"
                      >
                        2:20 PM
                      </TabsTrigger>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-8">
                      <TabsTrigger
                        value="12:40 PM"
                        className="border-2 font-semibold  bg-white text-black border-slate-950 data-[state=active]:bg-primary data-[state=active]:text-white"
                      >
                        12:40 PM
                      </TabsTrigger>
                      <TabsTrigger
                        value="3:10 PM"
                        className="border-2 font-semibold  bg-white text-black border-slate-950 data-[state=active]:bg-primary data-[state=active]:text-white"
                      >
                        3:10 PM
                      </TabsTrigger>
                    </div>
                  </TabsList>
                  {/* </FormControl> */}
                  {/* <FormMessage /> */}
                </div>
              </Tabs>
              {/* </FormItem> */}
              {/* )} */}
              {/* /> */}

              <Button
                color="blue_gray_700"
                size="lg"
                className="font-bold  w-[550px]"
                onClick={() => {
                  navigate("/payment");
                }}
              >
                Next
              </Button>
              {/* </form>
              </Form> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SelectTimeAvailable;
