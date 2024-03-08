import React, { useRef, useState } from 'react';
import { FaPen } from 'react-icons/fa';
import ProfilePic from '../assets/profile-pic.png';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Button } from '@/components/ui/button';
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';


type propTypes = {
    onClose: () => void;
}


interface profile {
    name: string;
    phone: number;
    email: number | string;

}


const EditStudentProfile: React.FC<propTypes> = ({ onClose }) => {
    const [profile, setProfile] = useState<profile>({
        name: 'John Doe',
        email: 'john@example.com',
        phone: 1234 - 567 - 8910,
    });
    //add useRef
    const EditProfile = useRef();

    //add closeEditProfile
    const closeEditProfile = (e) => {
        if (EditProfile.current === e.target) {
            onClose();
        }
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProfile((prevState: any) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div ref={EditProfile} onClick={closeEditProfile} className={`fixed inset-0 bg-black bg-opacity-90 bgdrop-blur-sm `}>
            <div className='max-w-md  mx-auto bg-white shadow-lg rounded-lg  my-10  flex flex-col h-full max-h-full overflow-hidden'>
                <button className='place-self-end pt-3 pr-3 text-[#272444]' onClick={onClose}><AiOutlineClose size={30} /></button>
                <div className='rounded-x2 py-3 px-4 flex flex-col '>

                    <h1 className='text-3xl font-semibold my-6 text-center text-[#272444]'>Edit Profile</h1>
                    <div className="px-4 py-2 my-5 ">
                        <div className=" relative  w-40 h-40  flex items-center justify-center mx-auto mb-5   ">
                            <img src={ProfilePic} alt=" profile Picture " className="rounded-full w-full h-full" />
                            <Link to={`../components/EditProfile`} className='p-2 absolute bottom-3 right-0 bg-white rounded-full border'>
                                <FaPen className="w-4 h-4 text-gray-600 " />
                            </Link>
                        </div>
                        <div className="mb-5">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id='name'
                                type="text"
                                name="name"
                                value={profile.name}
                                onChange={handleChange}
                                className=" py-6 focus:border-none text-[#DCDCDC]"
                            />
                        </div>
                        <div className="mb-5">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id='email'
                                type="email"
                                name="email"
                                value={profile.email}
                                onChange={handleChange}
                                className=" py-6 focus:border-none text-[#DCDCDC]"
                            />
                        </div>
                        <div className="mb-5">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                                type="tel"
                                id='phone'
                                name="phone"
                                value={profile.phone}
                                onChange={handleChange}
                                className=" py-6 focus:border-none text-[#DCDCDC] "
                            />
                        </div>
                        <Button
                            type="submit"
                            size="lg"
                            className="w-full py-7 text-lg bg-[#294C74] ">
                            Update Profile
                        </Button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default EditStudentProfile;