import { EmailCapture } from "@/components/email-capture/EmailCapture";
import { FeatureToggles } from "@/components/feature-toggles/FeatureToggles";
import { Supports } from "@/components/supports/Supports";
import { Hero } from "@/components/hero/Hero";
import { Logos } from "@/components/logos/Logos";
import { ExpandableNavBar } from "@/components/navigation/ExpandableNavBar";
import { NAV_LINKS } from "@/components/navigation/constants";
import { Stats } from "@/components/stats/Stats";
import { BenefitsGrid } from "@/components/benefits-grid/BenefitsGrid";
import { font } from "@/fonts";
import { BlogCarousel } from "@/components/blog/BlogCarousel";
import { FinalCTA } from "@/components/final-cta/FinalCTA";
import { Pricing } from "@/components/pricing/Pricing";
import { Footer } from "@/components/footer/Footer";
import { Contact } from "@/components/contact/Form";

export default function Home() {
  return (
    <main className={`${font.className} overflow-hidden`}>
      <ExpandableNavBar links={NAV_LINKS}>
        <Hero />
      </ExpandableNavBar>
      <Logos />
      <div className="pt-24 pb-24 space-y-36 bg-zinc-50 md:pt-32">
        <FeatureToggles />
        <Stats />
        <Supports />
        <BenefitsGrid />
        <Pricing />
        <BlogCarousel />
      </div>
      <EmailCapture />
      <Contact />
      <FinalCTA />
      <Footer />
    </main>
  );
}
