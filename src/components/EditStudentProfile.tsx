import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from './ui/input';
import ProfilePic from './ProfilePic';

import {
    Dialog,
    DialogHeader,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogClose,
} from '@/components/ui/dialog';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"



interface profile {
    name: string;
    phone: number;
    email: number | string;

}
const EditProfileSchema = z.object({
    name: z.string(),
    phone: z.number(),
    email: z.string(),
})

const EditStudentProfile = () => {
    const form = useForm<z.infer<typeof EditProfileSchema>>({
        resolver: zodResolver(EditProfileSchema),
        defaultValues: {
            name: "John Doe",
            email: "john@example.com",
            phone: 12345678910,
        }
    });

    const onSubmit = (data: profile) => {
        console.log(data); // Handle form submission here
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2 basis-full sm:basis-1/3 relative"
            >
                <Dialog>
                    <DialogTrigger asChild>
                        <button className='text-secondary-foreground'>Edit Profile</button>
                    </DialogTrigger>
                    <DialogContent className="dialog-content overflow-y-scroll h-screen">
                        <DialogHeader>
                            <DialogTitle className="text-center text-2xl pt-5">Edit Profile</DialogTitle>
                        </DialogHeader>
                        <ProfilePic />
                        <FormField
                            name="name"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm">Name</FormLabel>
                                    <FormControl>
                                        <Input type="text" id="name" {...field} className="py-6" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="email"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm">Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            id="email"
                                            {...field}
                                            className="py-6"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="phone"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm">Phone Number</FormLabel>
                                    <FormControl>
                                        <Input type="text" id="phone" {...field} className="py-6 " />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <DialogClose className="flex justify-center ">
                            <Button type="button" className="w-full py-6 ">Submit</Button>
                        </DialogClose>
                    </DialogContent>
                </Dialog>
            </form>
        </Form >
    );
};

export default EditStudentProfile;