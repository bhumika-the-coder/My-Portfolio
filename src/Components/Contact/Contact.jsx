import React, { useRef, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [isSending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          alert("Email sent successfully");
          formRef.current.reset();
          setSending(false);
        },
        (error) => {
          alert("Failed to send email");
          console.error(error);
          setSending(false);
        },
      );
  };
  return (
    <div
      id="contact"
      className="flex flex-col lg:flex-row items-center justify-between mt-10 text-white min-h-screen"
    >
      <div className="w-full lg:w-1/2 p-4 lg:pl-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 sm:text-center md:text-left">
          Contact
        </h1>
        <h3 className="text-xl md:text-2xl font-normal sm:text-center md:text-left">
          Feel free to reach out!
        </h3>

        <div className="text-normal">
          <div className="flex justify-center md:justify-start mb-2 mt-5">
            <a
              href="mailto:bhumikaprajapatiofficial@gmail.com"
              className="flex items-center"
            >
              <MdOutlineEmail size={25} />
              <p className="ml-2">bhumikaprajapatiofficial@gmail.com</p>
            </a>
          </div>
          <div className="flex justify-center md:justify-start gap-6 mt-5">
            <a href="www.linkedin.com/in/bhumikathecoder" className="flex items-center">
              <CiLinkedin size={25} />
              <p className="ml-2">LinkedIn</p>
            </a>

            <a href="https://github.com/bhumika-the-coder" className="flex items-center">
              <FaGithub size={25} />
              <p className="ml-2">GitHub</p>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-4 lg:pl-10">
        <fieldset className="rounded-4xl border focus:outline-none focus:shadow-[0_0_15px_#ffffff30] hover:shadow-2xl hover:shadow-[0_0_15px_#ffffff30] transition duration-300 rounded-3xl">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="w-full p-10 text-white"
          >
            <div className="mb-5">
              <label htmlFor="name" className="text-xl mb-5 font-bold">
                Enter your Full Name :{" "}
              </label>
              <input
                type="text"
                name="name"
                placeholder="eg.. TOM HOLLAND"
                required
                className="w-full text-white border border-gray-500 px-4 py-2 mt-5 focus:border-white transition focus:outline-none focus:shadow-[0_0_15px_#ffffff30]"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="text-xl mb-5 font-bold">
                Email :{" "}
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full text-white border border-gray-500 px-4 py-2 mt-5 focus:border-white transition focus:outline-none focus:shadow-[0_0_15px_#ffffff30]"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="phone" className="text-xl mb-5 font-bold">
                Phone No. :{" "}
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full text-white border border-gray-500 px-4 py-2 mt-5 focus:border-white transition focus:outline-none focus:shadow-[0_0_15px_#ffffff30]"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="requirement" className="text-xl mb-5 font-bold">
                Tell me about your requirements :{" "}
              </label>
              <textarea
                name="requirement"
                placeholder="Tell us about your requirements..."
                rows="5"
                required
                className="w-full text-white border border-gray-500 px-4 py-2 mt-5 focus:border-white transition focus:outline-none focus:shadow-[0_0_15px_#ffffff30]"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full py-3 border border-gray-400 
               text-white hover:shadow-2xl  
               transition duration-300 rounded-3xl bg-[#001E2B] hover:shadow-[0_0_15px_#ffffff30]"
            >
              {isSending ? "Sending..." : "Send"}
            </button>
          </form>
        </fieldset>
      </div>
    </div>
  );
};

export default Contact;
