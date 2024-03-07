// DeleteAccountPage.tsx
import { useRef } from 'react';
import { AiOutlineClose } from "react-icons/ai";

type propTypes = {
    onClose: () => void;
}
const DeleteAccount: React.FC<propTypes> = ({ onClose }) => {
    const handleDelete = () => {
        // Handle account deletion logic
    };
    const DeleteAccount = useRef();

    const closeDeleteAcc = (e) => {
        if (DeleteAccount.current === e.target) {
            onClose();
        }
    }
    return (
        <div ref={DeleteAccount} onClick={closeDeleteAcc} className={`fixed inset-0 bg-black bg-opacity-90 bgdrop-blur-sm `}>
            <div className='max-w-md  mx-auto bg-white shadow-lg rounded-lg  my-80  flex flex-col text-center p-10  overflow-hidden'>
                <button className='place-self-end p-0 text-[#272444]' onClick={onClose}><AiOutlineClose size={20} /></button>

                <h1 className="text-2xl font-bold mb-4 text-[#272444]">Delete Account</h1>
                <p className=" text-[#272444B2]">Are you sure you want to delete an account?</p>
                <div className="flex justify-around mt-6 gap-3">
                    <button className="px-5 py-3 border text-[#294C74]  rounded hover:bg-primary hover:text-white w-full">
                        Cancel
                    </button>
                    <button className="px-5 py-53 border text-[#294C74] rounded hover:bg-destructive hover:text-white w-full" onClick={handleDelete}>
                        Yes, I Want Delete
                    </button>


                </div>
            </div>
        </div >
    );
};

export default DeleteAccount;
