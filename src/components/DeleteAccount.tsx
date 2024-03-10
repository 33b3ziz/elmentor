import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogClose,
} from '@/components/ui/dialog';
import { Button } from '../components/ui/button';

const DeleteAccount = () => {
    const handleDelete = () => {
        // Handle account deletion logic
    };


    return (
        <Dialog>
            <DialogTrigger>
                <button className='w-36'>Delete Account</button>
            </DialogTrigger>
            <DialogContent className="dialog-content">
                <DialogHeader>
                    <DialogTitle className="text-center text-2xl pt-5">Delete Account</DialogTitle>
                </DialogHeader>
                <DialogDescription className=" text-center">Are you sure you want to delete an account?</DialogDescription>
                <DialogClose className="flex justify-around mt-6 gap-3">
                    <Button className=" w-full hover:text-white">
                        Cancel
                    </Button>
                    <Button className=" hover:bg-destructive hover:text-white w-full" onClick={handleDelete}>
                        Yes, I Want Delete
                    </Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteAccount;
