import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Navbar } from "../components/navbar";
import { FooterSection } from "../components/footer-section";
import { ServicesSection } from "../components/services-section";
import { ResultsSection } from "../components/results-section";
import { ProvenPerformanceSection } from "../components/proven-performance-section";

import { ContactFormSection } from "../components/contact-form-section";

function ProductIncubationHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#111642] overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif", paddingTop: "79px" }}
      data-navbar-theme="dark"
    >
      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[79px] bottom-0 w-full">
          {[0, 25, 50, 75, 100].map((pct) => (
            <div
              key={pct}
              className="absolute top-0 bottom-0 w-[0.5px] bg-[#292d55]"
              style={{ left: `${pct}%` }}
            />
          ))}
        </div>
      </div>
      {/* Red accent block */}
      <div className="absolute bg-[#ea1528]" style={{ left: "25%", top: "79px", width: "12.5%", height: "60px" }} />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[64px] py-16 md:py-24 flex flex-col gap-12">
        {/* Eyebrow */}
        <motion.p
          className="text-[#888] uppercase tracking-[0.15em]"
          style={{ fontSize: "0.7rem", fontWeight: 500 }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          Product Incubation
        </motion.p>

        {/* Headline + description row */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[20px] items-end">
          <motion.h1
            className="text-white flex-shrink-0 lg:w-[686px]"
            style={{
              fontSize: "clamp(40px, 6vw, 64px)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
          >
            Two programs. One goal: growing your store.
          </motion.h1>

          <motion.p
            className="text-[#e5e5e5] flex-1"
            style={{ fontSize: "clamp(14px, 1.5vw, 16px)", fontWeight: 400, lineHeight: 1.6 }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          >
            PBD offers two programs tailored to where your store is in its
            growth journey — the ongoing PBD Program for established members,
            and the Jumpstart Program for new members ready to reset and scale.
          </motion.p>
        </div>

        {/* Program cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 border-t border-[#292d55] pt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
        >
          <div className="bg-[#292d55] p-6">
            <p className="text-[#888] uppercase tracking-[0.15em] mb-3" style={{ fontSize: "0.65rem", fontWeight: 500 }}>
              Ongoing
            </p>
            <h3
              className="text-white mb-3"
              style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.3 }}
            >
              The PBD Program
            </h3>
            <p className="text-[#888]" style={{ fontSize: "14px", fontWeight: 400, lineHeight: 1.65 }}>
              Category management, vendor connectivity, marketing support, and
              promotional funding — all five pillars of retail growth, managed
              for you on an ongoing basis.
            </p>
          </div>
          <div className="bg-[#ea1528] p-6">
            <p className="text-white/60 uppercase tracking-[0.15em] mb-3" style={{ fontSize: "0.65rem", fontWeight: 500 }}>
              For New Members
            </p>
            <h3
              className="text-white mb-3"
              style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.3 }}
            >
              The Jumpstart Program
            </h3>
            <p className="text-white/80" style={{ fontSize: "14px", fontWeight: 400, lineHeight: 1.65 }}>
              A focused 90-day onboarding program that resets your store,
              activates your vendor programs, and gets you earning from day one.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ProductIncubationPage() {
  return (
    <div className="size-full">
      <Navbar />
      <ProductIncubationHero />
      <ServicesSection />
      <ResultsSection />
      <div data-navbar-theme="dark">
        <ProvenPerformanceSection />
      </div>
      <ContactFormSection />
      <div data-navbar-theme="dark">
        <FooterSection />
      </div>
    </div>
  );
}
