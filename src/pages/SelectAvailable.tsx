import { Button } from "@/components/ui/button";
import React from "react";
import { BiChevronRight } from "react-icons/bi";

const SelectAvailable = () => {
  return (
    <>
      <div className=" flex flex-col items-center justify-start w-auto gap-[49%] p-10 bg-white-A700 ">
        <p className="mt-[17px] text-base text-slate-600">STEP 3 of 3</p>
        <div className="flex flex-row justify-between items-start w-full pl-20 max-w-[1677px]">
          <div className="flex flex-col items-start justify-start w-[27%] gap-[55px]">
            <div className="flex flex-col items-start justify-start w-full gap-10">
              <div className="flex flex-row justify-start w-full pt-8 pb-[31px] border-gray-500 border-b border-solid">
                <div className="flex flex-row justify-start items-center w-full gap-4">
                  <img
                    src="src/assets/mentor-1.webp"
                    alt="circleimage"
                    className="h-32 w-32 rounded-[50%]"
                  />
                  <div className="flex flex-col items-start justify-center w-[70%] gap-[25px] py-[23px]">
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
          <div className="flex flex-col items-center justify-start w-[54%] gap-12 border-gray-600 border-l border-solid">
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
              <div className="flex flex-row justify-between w-full pr-1.5 ">
                <div className="flex flex-col items-center justify-start gap-8 ">
                  <Button className="  border-black border-2  font-semibold bg-white text-black">
                    11:00 AM
                  </Button>
                  <Button className="  border-black  border-2 font-semibold  bg-white text-black">
                    1:30 PM
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-start gap-8 ">
                  <Button className=" border-2 font-semibold  bg-white text-black  border-black">
                    11:50 AM
                  </Button>
                  <Button className=" border-2 font-semibold  bg-white text-black  border-black">
                    2:20 PM
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-start gap-8">
                  <Button className=" border-2 font-semibold  bg-white text-black  border-black">
                    12:40 PM
                  </Button>
                  <Button className="  border-2 font-semibold  bg-white text-black border-slate-950">
                    3:10 PM
                  </Button>
                </div>
              </div>
            </div>
            <Button
              color="blue_gray_700"
              size="lg"
              className="font-bold  w-[550px]"
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SelectAvailable;
