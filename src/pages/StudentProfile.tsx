import StudentSection from "@/components/StudentSection";
function StudentProfile() {
  return <StudentSection />;
}

export default StudentProfile;

// import { useState } from "react";
// import { FaExchangeAlt, FaPen } from "react-icons/fa";
// import {
//   AiOutlineEdit,
//   AiOutlineShareAlt,
//   AiOutlineLogout,
//   AiOutlineSetting,
// } from "react-icons/ai";

// import ProfilePic from "../assets/profile-pic.png";
// import EditProfile from "@/components/EditProfile";
// import AsAMentor from "@/components/AsAMentor";
// import Settings from "@/components/Settings";
// interface Profile {
//   name: string;
// }

// const Profile: React.FC = () => {
//   const [profile] = useState<Profile>({
//     name: "John Doe",
//   });

//   const [openEditPofile, setOpenEditPofile] = useState<boolean>(false);
//   const [openAsAMentor, setOpenAsAMentor] = useState<boolean>(false);
//   const [openSettings, setOpenSettings] = useState<boolean>(false);

//   return (
//     <div className="max-w-md mx-auto bg-white w-full md:w-1/3  overflow-hidden my-10 text-gray-500 ">
//       <div className="px-4 py-2 my-5 ">
//         <div className=" relative  w-40 h-40  flex items-center justify-center m-auto   ">
//           <img
//             src={ProfilePic}
//             alt=" profile Picture "
//             className="rounded-full w-full h-full"
//           />
//           <button className="p-2 absolute bottom-3 right-0 bg-white rounded-full border">
//             <FaPen className="w-4 h-4 text-gray-600 " />
//           </button>
//         </div>
//         <div className="ml-4 text-center ">
//           <h2 className="text-2xl font-semibold text-[#272444] mt-2">
//             {profile.name}
//           </h2>
//         </div>
//       </div>

//       <div className="px-4 py-2 my-3">
//         <button className="w-full" onClick={() => setOpenEditPofile(true)}>
//           <div className="border p-5  flex justify-content gap-4 rounded mb-2 text-[#272444]">
//             <AiOutlineEdit className="w-6 h-6 text-[#DCDCDC]" />
//             Edit Profile
//           </div>
//         </button>
//         {openEditPofile && (
//           <EditProfile onClose={() => setOpenEditPofile(false)} />
//         )}

//         <button className="w-full" onClick={() => setOpenAsAMentor(true)}>
//           <div className="border p-5  flex justify-content gap-4 w-full rounded mb-2 text-[#272444]">
//             <FaExchangeAlt className="w-6 h-6 text-[#DCDCDC]" />
//             As a Mentor
//           </div>
//         </button>
//         {openAsAMentor && <AsAMentor onClose={() => setOpenAsAMentor(false)} />}

//         <button className="w-full" onClick={() => setOpenSettings(true)}>
//           <div className="border p-5  flex justify-content gap-4 w-full rounded mb-2 text-[#272444]">
//             <AiOutlineSetting className="w-6 h-6 text-[#DCDCDC]" />
//             Setting
//           </div>
//         </button>
//         {openSettings && <Settings onClose={() => setOpenSettings(false)} />}

//         <button className="w-full">
//           <div className="border p-5  flex justify-content gap-4 w-full rounded mb-2 text-[#272444]">
//             <AiOutlineLogout className="w-6 h-6 text-[#DCDCDC]" />
//             Share App
//           </div>
//         </button>

//         <button className="w-full">
//           <div className="border p-5  flex justify-content gap-4 w-full rounded mb-2 text-[#272444]">
//             <AiOutlineShareAlt className="w-6 h-6 text-[#DCDCDC]" />
//             Log Out
//           </div>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile;
