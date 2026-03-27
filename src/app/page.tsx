import { HeroSection } from "@/components/sections/Hero";
import { LogoBar } from "@/components/sections/LogoBar";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ProductModules } from "@/components/sections/ProductModules";
import { SocialProof } from "@/components/sections/SocialProof";
import { Industries } from "@/components/sections/Industries";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { Security } from "@/components/sections/Security";
import { Integrations } from "@/components/sections/Integrations";
import { BlogFeed } from "@/components/sections/BlogFeed";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { OrganizationSchema, WebsiteSchema, SoftwareSchema } from "@/components/seo/JsonLd";

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <WebsiteSchema />
      <SoftwareSchema />
      <HeroSection />
      <LogoBar />
      <ProblemSolution />
      <StatsStrip />
      <HowItWorks />
      <ProductModules />
      <SocialProof />
      <Industries />
      <PricingPreview />
      <Security />
      <Integrations />
      <BlogFeed />
      <FinalCTA />
    </>
  );
}
