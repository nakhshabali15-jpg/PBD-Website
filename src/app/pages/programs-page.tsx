import { Navbar } from "../components/navbar";
import { FooterSection } from "../components/footer-section";
import { ProgramsHero } from "../components/programs-hero";
import { ProgramsProcessSection } from "../components/programs-process-section";
import { JumpstartProgramSection } from "../components/jumpstart-program-section";
import { ProgramsResultsSection } from "../components/programs-results-section";
import { WhatMembersReceiveSection } from "../components/what-members-receive-section";
import { OurModelSection } from "../components/our-model-section";
import { CoreProgramsSection } from "../components/core-programs-section";

import { ContactFormSection } from "../components/contact-form-section";

export default function ProgramsPage() {
  return (
    <div className="w-full">
      <Navbar />
      <ProgramsHero />
      <CoreProgramsSection />
      <ProgramsProcessSection />
      <JumpstartProgramSection />
      <ProgramsResultsSection />
      <WhatMembersReceiveSection />
      <OurModelSection />
      <ContactFormSection />
      <div data-navbar-theme="dark" className="relative">
        <FooterSection />
      </div>
    </div>
  );
}