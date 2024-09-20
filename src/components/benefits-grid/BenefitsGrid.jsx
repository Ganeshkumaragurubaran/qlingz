import React from "react";
import { motion } from "framer-motion";
import { IntegrationsBlock } from "./IntegrationsBlock";
import { CollaborateBlock } from "./CollaborateBlock";
import { HighlighBlocks } from "./HighlighBlocks";
import { SectionHeading } from "../shared/SectionHeading";
import { SectionSubheading } from "../shared/SectionSubheading";
import { Button } from "../shared/Button";

export const BenefitsGrid = () => {
  return (
    <motion.section
      transition={{
        staggerChildren: 0.1,
      }}
      initial="initial"
      whileInView="whileInView"
      className="relative grid max-w-6xl grid-cols-3 gap-4 px-2 mx-auto md:px-4"
    >
      <div className="col-span-3">
        <SectionHeading>Why Choose Us?</SectionHeading>
        <SectionSubheading>
          Discover the key benefits that set us apart in delivering quality
          inspection and audit services.
        </SectionSubheading>
      </div>
      <IntegrationsBlock />
      <CollaborateBlock />
      <HighlighBlocks />
      <div className="flex justify-center col-span-3 mt-6">
        <Button intent="outline">
          <span className="font-bold">Get started - </span> no commitment needed
        </Button>
      </div>
    </motion.section>
  );
};
