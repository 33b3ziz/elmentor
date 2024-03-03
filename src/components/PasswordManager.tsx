import React, { useState, useRef } from 'react';
import { AiOutlineClose, AiOutlineLock } from "react-icons/ai"


type propTypes = {
    onClose: () => void;

}

const PasswordManager: React.FC<propTypes> = ({ onClose }) => {
    const PasswordManagerRef = useRef();
    const closePasswordManager = (e) => {
        if (PasswordManagerRef.current === e.target) {
            onClose();
        }
    }
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Current Password:', currentPassword);
        console.log('New Password:', newPassword);
        console.log('Confirm Password:', confirmPassword);
    };

    return (
        <div ref={PasswordManagerRef} onClick={closePasswordManager} className={`fixed inset-0 bg-black bg-opacity-90 bgdrop-blur-sm  `}>
            <div className='max-w-md   bg-white mx-auto shadow-lg rounded-lg flex align-center my-48  flex-col  p-10  overflow-hidden'>
                <button className='place-self-end  text-[#272444]  p-0 ' onClick={onClose}><AiOutlineClose size={20} /></button>
                <h1 className="text-2xl font-bold mb-7 text-[#272444] text-center">Password Manager</h1>
                <form onSubmit={handleSubmit} className="max-w-md">
                    <div className='relative'>
                        <label htmlFor="currentPassword" className="block text-[#272444] font-medium  mb-2">Current Password</label>
                        <div className="mb-10 flex justify-center items-center ">
                            <AiOutlineLock className="absolute  left-3  text-gray-400 	" size={20} />
                            <input
                                type="password"
                                id="currentPassword"
                                placeholder=" Current Password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                className="border p-2 w-full rounded  pl-10"
                            />
                        </div>
                    </div>
                    <div className='relative'>
                        <label htmlFor="newPassword" className="block text-[#272444] font-medium  mb-2">New Password</label>
                        <div className="mb-4 flex justify-center items-center">
                            <AiOutlineLock className="absolute  left-3  text-gray-400 	" size={20} />
                            <input
                                type="password"
                                id="newPassword"
                                placeholder="Enter New Password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="border p-2 w-full rounded  pl-10"
                            />
                        </div>
                    </div>
                    <div className='relative'>
                        <label htmlFor="confirmPassword" className="block text-[#272444] font-medium  mb-2">Confirm New Password</label>
                        <div className="mb-4 flex justify-center items-center">
                            <AiOutlineLock className="absolute  left-3  text-gray-400 	" size={20} />
                            <input
                                type="password"
                                id="confirmPassword"
                                placeholder="Confirm New Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="border p-2 w-full rounded pl-10"
                            />
                        </div>
                    </div>
                    {/* <button type="submit" className="bg-[#272444] text-white p-3 w-full">Change Password</button> */}
                </form>
            </div>
        </div>
    );
};

export default PasswordManager;
