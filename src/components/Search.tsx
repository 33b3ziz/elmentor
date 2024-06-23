import { Input } from "./ui/input";
import { FaFilter, FaSearch } from "react-icons/fa";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Checkbox } from "./ui/checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  search: z.string().min(3),
  specialization: z.array(z.string()).min(1),
  levelOfExperience: z.array(z.string()).min(1),
});

const yearsExp = ["1-3", "3-7", "7-10"];
const specializations = ["ui-ux", "frontend", "backend", "flutter", "android"];

const Search = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
      specialization: [],
      levelOfExperience: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="relative py-3 mx-auto md:w-96">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 basis-full sm:basis-1/3 relative"
        >
          <div>
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Search"
                      {...field}
                      className="px-4 py-6 rounded-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FaSearch className="absolute right-10 top-2" />

          <Dialog>
            <DialogTrigger className="absolute right-0 -top-2" asChild>
              <Button
                variant="outline"
                className="flex justify-start text-black bg-transparent border-none hover:bg-transparent font-normal px-4 py-6"
              >
                <FaFilter size={16} />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Years Of Experience</DialogTitle>
              </DialogHeader>
              <div className="grid py-4">
                {yearsExp.map((year) => (
                  <FormField
                    key={year}
                    control={form.control}
                    name="levelOfExperience"
                    render={({ field }) => (
                      <FormItem>
                        <div className="grid grid-cols-4 items-center gap-4 p-3 border-b">
                          <Label className="text-right">{year}</Label>
                          <Checkbox
                            id={year}
                            checked={field.value.includes(year)}
                            onCheckedChange={(checked) => {
                              const newValue = checked
                                ? [...field.value, year]
                                : field.value.filter((value) => value !== year);
                              field.onChange(newValue);
                            }}
                          />
                        </div>
                      </FormItem>
                    )}
                  />
                ))}
              </div>
              <div className="grid py-4">
                <h2 className="font-bold">Specialization</h2>
                {specializations.map((el) => (
                  <FormField
                    key={el}
                    control={form.control}
                    name="specialization"
                    render={({ field }) => (
                      <FormItem>
                        <div className="grid grid-cols-4 items-center gap-4 p-3 border-b">
                          <Label className="text-right">{el}</Label>
                          <Checkbox
                            id={el}
                            checked={field.value.includes(el)}
                            onCheckedChange={(checked) => {
                              const newValue = checked
                                ? [...field.value, el]
                                : field.value.filter((value) => value !== el);
                              field.onChange(newValue);
                            }}
                          />
                        </div>
                      </FormItem>
                    )}
                  />
                ))}
              </div>
              <DialogClose className="flex justify-end">Done</DialogClose>
            </DialogContent>
          </Dialog>
        </form>
      </Form>
    </div>
  );
};

export default Search;
