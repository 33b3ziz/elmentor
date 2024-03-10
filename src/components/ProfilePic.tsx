import { FaPen } from 'react-icons/fa';
import ProfilePicture from '../assets/mentor-2.webp';
import { Link } from 'react-router-dom';

function ProfilePic() {
    return (
        <div className="px-4 py-2 ">
            <div className=" relative  w-40 h-40  flex items-center justify-center mx-auto   ">
                <img src={ProfilePicture} alt=" profile Picture " className="rounded-full w-full h-full object-cover" />
                <Link to={`../components/EditProfile`} className='p-2 absolute bottom-3 right-0 bg-white rounded-full border'>
                    <FaPen className="w-4 h-4 text-gray-600 " />
                </Link>
            </div>
        </div>
    )
}

export default ProfilePic