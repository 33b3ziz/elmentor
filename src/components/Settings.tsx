
import { AiOutlineUser, AiOutlineDelete, AiOutlineClose, AiOutlineDown, AiOutlineKey } from "react-icons/ai"
import React, { useRef, useState } from 'react';
import { Separator } from "@/components/ui/separator"
import PasswordManager from "./PasswordManager";
import DeleteAccount from "./DeleteAccount";

type propTypes = {
    onClose: () => void;
}

const Settings: React.FC<propTypes> = ({ onClose }) => {
    const SettingsRef = useRef();
    const closeSettings = (e) => {
        if (SettingsRef.current === e.target) {
            onClose();
        }
    }
    const [openPassword, setOpenPassword] = useState<boolean>(false);
    const [openDeleteAcc, setOpenDeleteAcc] = useState<boolean>(false);

    return (
        <div ref={SettingsRef} onClick={closeSettings} className={`fixed inset-0 bg-black bg-opacity-90 bgdrop-blur-sm  `}>
            <div className='max-w-md mx-auto bg-white shadow-xl rounded-xl overflow-hidden my-80 flex flex-col '>
                <button className='place-self-end pt-3 pr-3 text-[#272444]' onClick={onClose}><AiOutlineClose size={20} /></button>

                <div className=' py-4 px-1 '>

                    <div className="mb-2 flex justify-between items-center mx-12 ">
                        <div className="flex justify-start items-center gap-2">
                            <AiOutlineUser className="" />
                            <p>Notification Settings</p>
                        </div>
                        <button>
                            <AiOutlineDown />
                        </button>
                    </div>
                    <Separator className="mb-2" />
                    <div className="mb-2 flex justify-between items-center	mx-12">
                        <div className="flex justify-start items-center gap-2">
                            <AiOutlineKey />
                            <p>Password Manager </p>
                        </div>
                        <button onClick={() => setOpenPassword(true)} >
                            <AiOutlineDown />
                        </button>
                        {openPassword && <PasswordManager onClose={() => setOpenPassword(false)} />}

                    </div>
                    <Separator className="mb-2" />
                    <div className="mb-5 flex justify-between items-center	mx-12">
                        <div className="flex justify-start items-center gap-2">
                            <AiOutlineDelete />
                            <p>Delete Account  </p></div>
                        <button onClick={() => setOpenDeleteAcc(true)}>
                            <AiOutlineDown />
                        </button>
                        {openDeleteAcc && <DeleteAccount onClose={() => setOpenDeleteAcc(false)} />}

                    </div>
                </div>
            </div>
        </div >

    )
};

export default Settings;