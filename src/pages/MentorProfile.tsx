import { useState } from 'react';
import { Button } from '../components/ui/button'
import EditMentorProfile from '@/components/EditMentorProfile';

function MentorProfile() {
    const [openEditProfileMentor, setOpenEditProfileMentor] = useState<boolean>(false);
    return (
        <div className='w-full px-32 py-96 text-start'>

            <h4 className='mb-5 text-[#272444] '>Description about me</h4>
            <p className='mb-10 text-[#272444] opacity-70 w-full '>I've been working with Students remotely for seven years . My experience has likely allowed you to build strong <br></br>communication skills, enabling me to connect with students , understand their needs, and deliver effective and <br></br>inspiring sessions. My goal is support stutends in achieving their educational and professional objectives .</p>
            <Button className='bg-transparant border text-[#272444] hover:text-white ' onClick={() => setOpenEditProfileMentor(true)} >
                Edit Profile
            </Button>
            {openEditProfileMentor && <EditMentorProfile onClose={() => setOpenEditProfileMentor(false)} />}
        </div>
    )
}

export default MentorProfile
