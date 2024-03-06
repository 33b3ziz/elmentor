import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Button } from '@/components/ui/button';
import { AiOutlineClose } from "react-icons/ai";

// add proptype

type propTypes = {
    onClose: () => void;
}

interface profile {
    name: string;
    phone: number;
    email: number | string;
    specialization: string;
    service: string;
    yearsOfExperience: number;
    linkedInURL: string;
    description: string;

}

const onSubmit = (data: profile) => {
    console.log(data); // Handle form submission here
};

const EditProfileMentor: React.FC<propTypes> = ({ onClose }) => {
    const [profile, setProfile] = useState<profile>({
        name: 'John Doe',
        email: 'john@example.com',
        phone: 12345678910,
        specialization: "frontend",
        service: "mentoring",
        yearsOfExperience: 2,
        linkedInURL: "https://www.linkedin.com",
        description: "I've been working with Students remotely for seven years . My experience has likely allowed you to build strong communication skills, enabling me to connect with students , understand their needs, and deliver effective and inspiring sessions. My goal is support stutends in achieving their educational and professional objectives .",
    });
    const {
        handleSubmit,
    } = useForm<profile>();
    //add useRef
    const EditProfileMentor = useRef();

    //add closeEditProfile
    const closeEditProfileMentor = (e) => {
        if (EditProfileMentor.current === e.target) {
            onClose();
        }
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setProfile((prevState: any) => ({
            ...prevState,
            [value]: value,
        }));
    };

    return (
        <div ref={EditProfileMentor} onClick={closeEditProfileMentor} className={`fixed inset-0 bg-black bg-opacity-90 bgdrop-blur-sm`}>
            <div className='max-w-md  mx-auto bg-white shadow-lg rounded-lg max-h-full  my-2 justify-center  flex flex-col  overflow-hidden '>
                <button className='place-self-end pt-3 pr-3 text-[#272444]' onClick={onClose}><AiOutlineClose size={25} /></button>
                <div className='rounded-x2 px-5 py-4 flex flex-col '>
                    <h1 className='text-xl mb-1  font-semibold  text-center text-[#272444]'>Edit Profile</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full m-auto text-[#272444]  ">
                        <div className="mb-2">
                            <Label htmlFor="name" className='text-sm'>Name</Label>
                            <Input
                                id='name'
                                type="text"
                                name="name"
                                value={profile.name}
                                onChange={handleChange}
                                className=" py-6 focus:border-none text-xs text-[#272444] opacity-30"
                            />
                        </div>
                        <div className="mb-2">
                            <Label htmlFor="email" className='text-sm'>Email</Label>
                            <Input
                                id='email'
                                type="email"
                                name="email"
                                value={profile.email}
                                onChange={handleChange}
                                className=" py-6 focus:border-none text-xs text-[#272444] opacity-30"
                            />
                        </div>
                        <div className="mb-2">
                            <Label htmlFor="phone" className='text-sm'>Phone Number</Label>
                            <Input
                                type="tel"
                                id='phone'
                                name="phone"
                                value={profile.phone}
                                onChange={handleChange}
                                className=" py-6 focus:border-none text-xs text-[#272444] opacity-30 "
                            />
                        </div>
                        <div className="mb-2">
                            <Label htmlFor="specialization" className='text-sm'>Specialization</Label>
                            <Input
                                type="text"
                                id="specialization"
                                name="specialization"
                                value={profile.specialization}
                                onChange={handleChange}
                                className=" py-6 focus:border-none text-xs text-[#272444] opacity-30 "

                            />
                        </div>
                        <div className="mb-2">
                            <Label htmlFor="service" className='text-sm'>Service</Label>

                            <Input
                                type="text"
                                id="service"
                                name="service"
                                value={profile.service}
                                onChange={handleChange}
                                className=" py-6 text-[#272444] text-xs opacity-30 focus:border-none "
                            />

                        </div>
                        <div className="mb-2">
                            <Label htmlFor="yearsOfExperience" className='text-sm'>Years of Experience</Label>
                            <Input
                                type="number"
                                id="yearsOfExperience"
                                name="yearsOfExperience"
                                value={profile.yearsOfExperience}
                                onChange={handleChange}
                                className="py-6 text-[#272444] text-xs opacity-30 focus:border-none"
                            />
                        </div>
                        <div className="mb-2">
                            <Label htmlFor="linkedInURL" className='text-sm'>LinkedIn URL</Label>
                            <Input
                                type="url"
                                id="linkedInURL"
                                name="linkedInURL"
                                value={profile.linkedInURL}
                                onChange={handleChange}
                                className="py-6 text-[#272444] text-xs opacity-30 focus:border-none"
                            />
                        </div>
                        <div className="mb-2">
                            <Label htmlFor="description" className='text-sm'>Description</Label>
                            <textarea
                                id="description"
                                rows={3}
                                name="description"
                                value={profile.description}
                                className="text-xs  w-full px-4 rounded border scr py-2 text-[#272444] opacity-30 focus:border-none"
                            ></textarea>
                        </div>
                        <Button
                            type="submit"
                            size="lg"
                            className="w-full  py-6 text-base bg-[#294C74] ">
                            Update Profile
                        </Button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default EditProfileMentor;