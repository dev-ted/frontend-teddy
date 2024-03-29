import { Button, Input, Loading, Textarea } from "@nextui-org/react";
import { useRef, useState } from "react";

import Link from "next/link";
import { SendButton } from "./utils/Icons";
import { sendMail } from "@/services/mail";
import { toast } from "react-toastify";
import { useTheme } from "@nextui-org/react";

export default function Form() {
  const { isDark, type } = useTheme();
    const form = useRef<HTMLFormElement>(null);

        const [errors, setErrors] = useState({
                name: "",
                email: "",
                phone: "",
                message: "",
       

        })
  const [loading, setLoading] = useState(false);

        const [values, setValues] = useState({
                name: "",
                email: "",
                phone: "",
                message: "",
        })
  


  const handleSubmit = async () => {

  

    // e.preventDefault();

    if (!values?.name) {
      setErrors({ ...errors, name: "Name is required" });
      return null;
    }
    if (!values?.email) {
      setErrors({ ...errors, email: "Email is required" });
      return null;
    }
    if (!values?.phone) {
      setErrors({ ...errors, phone: "Phone is required" });
      return null;
    }
    if (!values?.message) {
      setErrors({ ...errors, message: "Message is required" });
      return null;
    }
    
    setLoading(true);

    await sendMail(form).then((res) => {
   
      
        toast.success("Message sent successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: type === "dark" ? "dark" : "light",
        });
        setValues({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      
      setLoading(false);
    }
    ).catch((err) => {
      setLoading(false);
      console.log(err);
      toast.error("Something went wrong, please try again later.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: type === "dark" ? "dark" : "light",
      });
    }
    )
  };

    
    
 
        
  return (
    <section className="max-w-screen-lg flex flex-col py-10 gap-4 h-full">
      <div className="  grid place-items-center justify-center gap-2">
        <span
          className="text-xl py-2
          bg-gradient-to-r from-pink-400 to-orange-500
         
        bg-[length:0_3px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-500
          hover:bg-[length:100%_3px]"
        >
          Socials
        </span>
        <div className="flex justify-center  space-x-6">
          <Link
            href="https://twitter.com/devted19"
            target="_blank"
            className=""
          >
            <span className="sr-only">Twitter</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </Link>
          <Link href="https://github.com/dev-ted" target="_blank" className="">
            <span className="sr-only">GitHub</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <Link href="mailto:devted19@gmail.com" className="">
            <span className="sr-only">Mail</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
              />
            </svg>
          </Link>
        </div>
      </div>
      <form ref={form} className="w-full  flex flex-col gap-10 px-10">
        <h6 className=" text-3xl text-center py-8">Leave me a message</h6>

        <div>
          <Input
            underlined
            required
            name="from_name"
            value={values.name}
            className="w-full"
            onChange={(e) => {
              setValues({ ...values, name: e.target.value });
            }}
            fullWidth
            clearable
            helperColor="error"
            helperText={errors.name}
            labelPlaceholder="Full name"
            color="default"
          />
        </div>
        <div>
          <Input
            underlined
            className="w-full"
            fullWidth
            name="reply_to"
            required
            type="email"
            clearable
            helperColor="error"
            helperText={errors.email}
            labelPlaceholder="Email"
            color="default"
            value={values.email}
            onChange={(e) => {
              setValues({ ...values, email: e.target.value });
            }}
          />
        </div>
        <div>
          <Input
            underlined
            className="w-full"
            fullWidth
            required
            type="tel"
            name="phone"
            clearable
            maxLength={10}
            value={values.phone}
            onChange={(e) => {
              setValues({ ...values, phone: e.target.value });
            }}
            helperColor="error"
            helperText={errors.phone}
            labelPlaceholder="Phone number"
            color="default"
          />
        </div>
        <div>
          <Textarea
            fullWidth
            required
            name="message"
            value={values.message}
            onChange={(e) => {
              setValues({ ...values, message: e.target.value });
            }}
            underlined
            color="default"
            labelPlaceholder="Your enquiry"
            helperText={errors.message}
            helperColor="error"
          />
        </div>

        {loading ? (
          <Loading type="spinner" size="lg" />
        ) : (
          <Button
            onPress={handleSubmit}
            auto
            className="relative rounded-lg  px-20 py-4 md:w-[200px]  dark:bg-black bg-white ring-offset-black will-change-transform focus:outline-none focus:ring-1 focus:ring-offset-2"
          >
            <span className="absolute  inset-px z-10 grid place-items-center rounded-lg dark:bg-black bg-white bg-gradient-to-t dark:from-neutral-800 text-black dark:text-neutral-300">
              Submit
            </span>
            <span
              aria-hidden
              className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conics before:from-gray-200 before:via-pink-500 before:to-orange-400"
            />
          </Button>
        )}
      </form>
    </section>
  );
}
