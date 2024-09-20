import React from "react";
import { Block } from "./Block";
import {
  FiArrowUpRight,
  FiClipboard,
  FiCoffee,
  FiDollarSign,
  FiFeather,
  FiInbox,
  FiMove,
  FiRepeat,
  FiSmile,
} from "react-icons/fi";
import { twMerge } from "tailwind-merge";
import { CardTitle } from "./CardTitle";
import { CardSubtitle } from "./CardSubtitle";

export const HighlighBlocks = () => {
  return (
    <>
      <HighlightBlock
        Icon={FiDollarSign}
        iconClassName="text-green-500"
        title="Global Reach, Local Expertise"
        subtitle="We combine international experience with deep knowledge of regional markets in India, China, Bangladesh, and Vietnam."
      />
      <HighlightBlock
        Icon={FiArrowUpRight}
        iconClassName="text-pink-500"
        title="Fast, Efficient, and Reliable Reports"
        subtitle="Timely, accurate insights empower you to make informed decisions."
      />
      <HighlightBlock
        Icon={FiSmile}
        iconClassName="text-blue-500"
        title="ISO 17020 Accredited"
        subtitle="Globally recognized standards, ensuring quality at every level."
      />
      <HighlightBlock
        Icon={FiCoffee}
        iconClassName="text-orange-500"
        title="15+ Years of Proven Results"
        subtitle="Working with US, EU, and local Asian businesses for over a decade, guaranteeing lasting expertise."
      />
      <HighlightBlock
        Icon={FiFeather}
        iconClassName="text-zinc-500"
        title="Dedicated Customer Service"
        subtitle="Receive personalized support, proactive communication, and streamlined service."
      />
      <HighlightBlock
        Icon={FiInbox}
        iconClassName="text-purple-500"
        title="Sustainable Practices"
        subtitle="Committed to ethical sourcing, environmental responsibility, and building a brighter future for your supply chain."
      />
      <HighlightBlock
        Icon={FiMove}
        iconClassName="text-fuchsia-500"
        title="Remain flexible"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <HighlightBlock
        Icon={FiClipboard}
        iconClassName="text-red-500"
        title="Stay on track"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <HighlightBlock
        Icon={FiRepeat}
        iconClassName="text-yellow-500"
        title="Repeat what works"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
    </>
  );
};

const HighlightBlock = ({ iconClassName, Icon, title, subtitle }) => (
  <Block className="col-span-3 space-y-1.5 md:col-span-1">
    <Icon className={twMerge("text-3xl text-indigo-600", iconClassName)} />
    <CardTitle>{title}</CardTitle>
    <CardSubtitle>{subtitle}</CardSubtitle>
  </Block>
);
