import { Navbar } from "../components/navbar";
import { FooterSection } from "../components/footer-section";
import { AboutHeroNew } from "../components/about-hero-new";
import { AboutStorySection } from "../components/about-story-section";
import { AboutTimelineSection } from "../components/about-timeline-section";
import { WhoWeServeSection } from "../components/who-we-serve-section";
import { ForRetailersAboutSection } from "../components/for-retailers-about-section";
import { AboutRoiSection } from "../components/about-roi-section";

import { ContactFormSection } from "../components/contact-form-section";
import { TrustedNumbers, aboutStats } from "../components/trusted-numbers";

export default function AboutPage() {
  return (
    <div className="size-full">
      <Navbar />
      <div data-navbar-theme="dark" className="relative">
        <AboutHeroNew />
      </div>
      <TrustedNumbers stats={aboutStats} />
      <AboutStorySection />
      <AboutTimelineSection />
      <div data-navbar-theme="dark" className="relative">
        <WhoWeServeSection />
      </div>
      <ForRetailersAboutSection />
      <AboutRoiSection />
      <ContactFormSection />
      <div data-navbar-theme="dark" className="relative">
        <FooterSection />
      </div>
    </div>
  );
}