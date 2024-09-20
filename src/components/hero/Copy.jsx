import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "../shared/Button";

export const Copy = () => {
  return (
    <>
      <div className="mb-1.5 rounded-full bg-zinc-600">
        <Link
          href="https://qlingz.com/"
          target="_blank"
          rel="nofollow"
          className="flex origin-top-left items-center rounded-full border border-zinc-900 bg-white p-0.5 text-sm transition-transform hover:-rotate-2"
        >
          <span className="rounded-full bg-[#FF6154] px-2 py-0.5 font-medium text-white">
            HEY!
          </span>
          <span className="ml-1.5 mr-1 inline-block">
            We're live!
          </span>
          <FiArrowUpRight className="inline-block mr-2" />
        </Link>
      </div>
      <h1 className="max-w-4xl text-center text-4xl font-black leading-[1.15] md:text-7xl md:leading-[1.15]">
        Your solutions start here
      </h1>
      <p className="max-w-3xl mx-auto my-4 text-base leading-relaxed text-center md:my-6 md:text-2xl md:leading-relaxed">
        Commited to helping our clients succeed our mission is your success
      </p>
      <Button>
        <span className="font-bold">Get started - </span> no CC required
      </Button>
    </>
  );
};
