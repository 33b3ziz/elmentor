import { useForm } from "react-hook-form";
import {
    AiOutlineUser,
    AiOutlinePhone,
    AiOutlineMail,
} from "react-icons/ai";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface FormData {
    name: string;
    email: string | number;
    phone: number;
    message: string | number;
}

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data); // Handle form submission here
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-1/3 m-auto ">
            <h1 className="text-5xl font-semibold m-5 text-center">Contact Us</h1>

            <div className="mb-4">
                <Label htmlFor="name">Name</Label>
                <div className="relative">
                    <Input
                        type="text"
                        id="name"
                        {...register("name", { required: "Name is required" })}
                        className="py-6"
                    />

                    <AiOutlineUser className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
                </div>
                {errors.name && (
                    <span className="text-red-500 text-sm">{errors.name.message}</span>
                )}
            </div>

            <div className="mb-4">
                <Label htmlFor="phone">Phone number</Label>
                <div className="relative">
                    <Input
                        type="phone"
                        id="phone"
                        {...register("phone", { required: "Phone is required" })}
                        className=" py-6 "
                    />
                    <AiOutlinePhone className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
                </div>
                {errors.phone && (
                    <span className="text-red-500 text-sm">{errors.phone.message}</span>
                )}
            </div>

            <div className="mb-4">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                    <Input
                        type="email"
                        id="email"
                        {...register("email", { required: "Email is required" })}
                        className="py-6"
                    />
                    <AiOutlineMail className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
                </div>
                {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email.message}</span>
                )}
            </div>

            <div className="mb-4">
                <Label htmlFor="message">Your Message</Label>
                <div className="relative">
                    <textarea
                        id="message"
                        {...register("message", { required: "Message is required" })}
                        rows={5}
                        className="opacity-70 bg-transparent w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
                    ></textarea>
                </div>
                {errors.message && (
                    <span className="text-red-500 text-sm">{errors.message.message}</span>
                )}
            </div>

            <Button
                type="submit"
                size="lg"
                className="w-full py-7 text-lg bg-[#294C74] "
            >
                Send
            </Button>
        </form>
    );


export default Contact;
