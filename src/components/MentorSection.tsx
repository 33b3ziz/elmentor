import { Button } from '../components/ui/button'
import EditMentorProfile from '@/components/EditMentorProfile';
import { useState } from 'react';

export default function MentorSection() {
    const [openEditProfileMentor, setOpenEditProfileMentor] = useState<boolean>(false);
    return (
        <div className='py-4'>
            <div className='py-6 '>
                <h4 className='font-bold text-lg pb-4'>Description about me</h4>
                <p>I've been working with Students remotely for seven years .
                    My experience has likely allowed you to build strong communication skills,
                    enabling me to connect with students , understand their needs,
                    and deliver effective and inspiring sessions.
                    My goal is support stutends in achieving their educational and professional objectives .
                </p>
            </div>
            <div className="my-6">
                <Button className='bg-white border-2 mr-5 border-slate-600 text-primary hover:text-white ' onClick={() => setOpenEditProfileMentor(true)} >
                    Edit Profile
                </Button>
                {openEditProfileMentor && <EditMentorProfile onClose={() => setOpenEditProfileMentor(false)} />}
            </div>
        </div>)
}


        <div className='w-full px-32 py-96 text-start'>
            <h4 className='mb-5 text-[#272444] '>Description about me</h4>
            <p className='mb-10 text-[#272444] opacity-70 w-full '>I've been working with Students remotely for seven years . My experience has likely allowed you to build strong <br></br>communication skills, enabling me to connect with students , understand their needs, and deliver effective and <br></br>inspiring sessions. My goal is support stutends in achieving their educational and professional objectives .</p>
            <Button className='bg-transparant border text-[#272444] hover:text-white ' onClick={() => setOpenEditProfileMentor(true)} >
                Edit Profile
            </Button>
            {openEditProfileMentor && <EditMentorProfile onClose={() => setOpenEditProfileMentor(false)} />}
        </div>)
}