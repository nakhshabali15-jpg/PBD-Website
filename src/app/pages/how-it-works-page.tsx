import { Navbar } from "../components/navbar";
import { FooterSection } from "../components/footer-section";
import { HowItWorksHero } from "../components/how-it-works-hero";
import { ChallengesSection } from "../components/challenges-section";
import { BeforeAfterSection } from "../components/before-after-section";
import { HowProgramsWorkSection } from "../components/how-programs-work-section";
import { VendorRebatesSection } from "../components/vendor-rebates-section";
import { RebateStatementSection } from "../components/rebate-statement-section";
import { ProvenPerformanceSection } from "../components/proven-performance-section";

import { ContactFormSection } from "../components/contact-form-section";

export default function HowItWorksPage() {
  return (
    <div className="w-full">
      <Navbar />

      {/* Hero */}
      <HowItWorksHero />

      {/* 1. New: Challenges section — white bg, 2×2 grid of challenge cards */}
      <ChallengesSection />

      {/* 2. New: Before/After comparison — #fafafa bg */}
      <BeforeAfterSection />

      {/* 3. Updated: The Process — dark navy #111642, accordion + Figma image */}
      <div data-navbar-theme="dark">
        <HowProgramsWorkSection />
      </div>

      {/* 4. Updated: Jumpstart Program — #fafafa bg, 90-day timeline */}
      <VendorRebatesSection />

      {/* 5. Updated: Transparency — dark navy, left bullets + callout + right table */}
      <div data-navbar-theme="dark">
        <RebateStatementSection />
      </div>

      <div data-navbar-theme="dark">
        <ProvenPerformanceSection />
      </div>

      <ContactFormSection />

      <div data-navbar-theme="dark" className="relative">
        <FooterSection />
      </div>
    </div>
  );
}
