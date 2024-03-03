import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import { FaPen } from 'react-icons/fa';
import ProfilePic from '../assets/profile-pic.png';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Button } from '@/components/ui/button';
import { AiOutlineClose } from "react-icons/ai";


interface FormData {
    specialization: string;
    service: string;
    yearsOfExperience: number;
    linkedInURL: string;
    description: string;
}
// add proptype
type propTypes = {
    onClose: () => void;
}
const AsAMentor: React.FC<propTypes> = ({ onClose }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data); // Handle form submission here
    };


    //add useRef
    const AsAMentor = useRef();

    //add closeEditProfile
    const closeAsAMentor = (e) => {
        if (AsAMentor.current === e.target) {
            onClose();
        }
    }
    return (
        <div ref={AsAMentor} onClick={closeAsAMentor} className={`fixed inset-0 bg-black bg-opacity-90 bgdrop-blur-sm `}>
            <div className='max-w-md  mx-auto bg-white shadow-lg rounded-lg  my-10  flex flex-col h-full max-h-full overflow-hidden'>
                <button className='place-self-end pt-3 pr-3 text-[#272444]' onClick={onClose}><AiOutlineClose size={30} /></button>

                <div className='rounded-x2 py-3 px-4 flex flex-col '>
                    <h3 className='text-center font-semibold text-[#272444] py-1'>Submit your mentorship application</h3>
                    <p className='text-center'>Review your profile and tell us how you would like to mentor the community</p>
                    <h2 className='text-xl font-semibold py-4 text-center text-[#272444]'>Upload profile photo</h2>
                    <div className=" py-3 px-3 ">
                        <div className=" relative w-32 h-32  flex items-center justify-center mx-auto mb-2   ">
                            <img src={ProfilePic} alt=" profile Picture " className="rounded-full w-full h-full" />
                            <button className='p-2 absolute bottom-3 right-0 bg-white rounded-full border'>
                                <FaPen className="w-3.5 h-3.5 text-gray-600 " />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full m-auto  ">

                            <div className="mb-2">
                                <Label htmlFor="specialization">Specialization</Label>
                                <div className="relative">
                                    <Input
                                        type="text"
                                        id="specialization"
                                        {...register("specialization", { required: "Specialization is required" })}
                                        className="py-4"
                                    />

                                </div>
                                {errors.specialization && (
                                    <span className="text-red-500 text-sm">{errors.specialization.message}</span>
                                )}
                            </div>

                            <div className="mb-2">
                                <Label htmlFor="service">Service</Label>
                                <div className="relative">
                                    <Input
                                        type="text"
                                        id="service"
                                        {...register("service", { required: "Service is required" })}
                                        className=" py-4 "
                                    />
                                </div>
                                {errors.service && (
                                    <span className="text-red-500 text-sm">{errors.service.message}</span>
                                )}
                            </div>

                            <div className="mb-2">
                                <Label htmlFor="yearsOfExperience">Years of Experience</Label>
                                <div className="relative">
                                    <Input
                                        type="number"
                                        id="yearsOfExperience"
                                        {...register(" yearsOfExperience ", { required: "Years of Experience is required" })}
                                        className="py-4"
                                    />
                                </div>
                                {errors.yearsOfExperience && (
                                    <span className="text-red-500 text-sm">{errors.yearsOfExperience.message}</span>
                                )}
                            </div>

                            <div className="mb-2">
                                <Label htmlFor="linkedInURL">LinkedIn URL</Label>
                                <div className="relative">
                                    <Input
                                        type="url"
                                        id="linkedInURL"
                                        {...register(" linkedInURL ", { required: "LinkedIn URL is required" })}
                                        className="py-4"
                                    />
                                </div>
                                {errors.linkedInURL && (
                                    <span className="text-red-500 text-sm">{errors.linkedInURL.message}</span>
                                )}
                            </div>

                            <div className="mb-2">
                                <Label htmlFor="description">Description</Label>
                                <div className="relative">
                                    <textarea

                                        id="description"
                                        {...register("description", { required: "Description is required" })}
                                        rows={1}
                                        className="opacity-70 bg-transparent w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500 "
                                    ></textarea>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                className="w-full py-7 text-lg bg-[#294C74] "
                            >
                                Done
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AsAMentor;
