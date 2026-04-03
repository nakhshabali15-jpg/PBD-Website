import { HeroSection } from "../components/hero-section";
import { TrustedNumbers } from "../components/trusted-numbers";
import { AboutSection } from "../components/about-section";
import { ServicesSection } from "../components/services-section";
import { ProgramsPreviewSection } from "../components/programs-preview-section";
import { CalculatorCTASection } from "../components/calculator-cta-section";
import { HowItWorksSection } from "../components/how-it-works-section";
import { ResultsSection } from "../components/results-section";
import { ProvenPerformanceSection } from "../components/proven-performance-section";
import { LogoCloudSection } from "../components/logo-cloud-section";
import { WhyChooseSection } from "../components/why-choose-section";
import { CTASection } from "../components/cta-section";
import { TestimonialsSection } from "../components/testimonials-section";
import { FAQSection } from "../components/faq-section";
import { ContactFormSection } from "../components/contact-form-section";
import { FooterSection } from "../components/footer-section";
import { Navbar } from "../components/navbar";

export default function HomePage() {
  return (
    <div className="w-full">
      <Navbar />
      <div data-navbar-theme="dark">
        <HeroSection />
      </div>
      <TrustedNumbers />
      <AboutSection />
      <LogoCloudSection />
      {/* <ServicesSection /> */}
      <ProgramsPreviewSection />
      <div data-navbar-theme="dark">
        <CalculatorCTASection />
      </div>
      <HowItWorksSection />
      <WhyChooseSection />
      <ResultsSection />
      <div data-navbar-theme="dark">
        <ProvenPerformanceSection />
      </div>
      <div data-navbar-theme="dark">
        <CTASection />
      </div>
      <TestimonialsSection />
      <FAQSection />
      <ContactFormSection />
      <div data-navbar-theme="dark">
        <FooterSection />
      </div>
    </div>
  );
}