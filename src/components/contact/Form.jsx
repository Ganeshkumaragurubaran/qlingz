import { AiFillMail } from "react-icons/ai";
import Link from "next/link";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className="max-w-3xl px-8 py-12 mx-auto bg-white border border-gray-300 rounded-lg shadow-lg">
        {/* Header */}
        <h4 className="mb-6 text-4xl font-bold text-center text-black md:text-5xl">
          Contact
        </h4>

        {/* Description */}
        <p className="mb-8 leading-relaxed text-center text-gray-700">
          I'd love to hear from you! Send me a message via the form below or
          connect with me on{" "}
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            className="hover:underline"
          >
            Linkedin
          </Link>{" "}
          or{" "}
          <Link
            href="https://www.twitter.com"
            target="_blank"
            className="hover:underline"
          >
            Twitter
          </Link>
          .
        </p>

        {/* Contact Form */}
        <form
          action="#"
          method="POST"
          className="flex flex-col gap-4 text-black"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Your email"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Write your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 font-bold text-white transition-colors bg-black rounded-md hover:bg-gray-800"
          >
            Send Message
          </button>
        </form>

        {/* Email Link */}
        <div className="flex items-center justify-center gap-2 mx-auto mt-8 text-lg text-black transition-colors w-fit hover:text-gray-600 md:text-2xl">
          <AiFillMail />
          <Link href="mailto:bob.ross@notreal.com">
            <span>sathyamurthy@qlingz.com</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
