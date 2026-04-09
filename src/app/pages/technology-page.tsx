import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Navbar } from "../components/navbar";
import { FooterSection } from "../components/footer-section";

import { ContactFormSection } from "../components/contact-form-section";

// ─── 1. Hero ──────────────────────────────────────────────────────────────────
function TechnologyHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#111642] overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif", paddingTop: "79px" }}
      data-navbar-theme="dark"
    >
      {/* Grid lines overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[79px] bottom-0 w-full">
          {[0, 25, 50, 75, 100].map((pct) => (
            <div
              key={pct}
              className="absolute top-0 bottom-0 w-[0.5px] bg-[#292d55]"
              style={{ left: `${pct}%` }}
            />
          ))}
          <div className="absolute left-0 right-0 h-[0.5px] bg-[#292d55]" style={{ top: "0%" }} />
          <div className="absolute left-0 right-0 h-[0.5px] bg-[#292d55]" style={{ top: "50%" }} />
          <div className="absolute left-0 right-0 h-[0.5px] bg-[#292d55]" style={{ top: "100%" }} />
        </div>
      </div>

      {/* Decorative red block */}
      <div className="absolute bg-[#ea1528]" style={{ left: "75%", top: "79px", width: "25%", height: "45px" }} />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] py-16 md:py-24 flex flex-col gap-[80px]">
        {/* Headline + description */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[20px] items-end">
          <motion.div
            className="flex-shrink-0 lg:w-[686px]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <p
              className="text-[#888] uppercase tracking-[0.15em] mb-6"
              style={{ fontSize: "11.2px", fontWeight: 500 }}
            >
              Technology
            </p>
            <h1
              className="text-white"
              style={{
                fontSize: "clamp(40px, 6vw, 64px)",
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              Technology built for the PBD retail network.
            </h1>
          </motion.div>

          <motion.div
            className="flex-1 flex items-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          >
            <p
              className="text-[#e5e5e5]"
              style={{
                fontSize: "clamp(14px, 1.5vw, 16px)",
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              Managing vendor rebate programs across a network of independent
              convenience stores requires precision at every step — from tracking
              program participation to reconciling distributor data and issuing
              accurate payments. PBD's technology infrastructure handles the
              complexity so retailers don't have to.
            </p>
          </motion.div>
        </div>

        {/* Feature chips */}
        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
        >
          {[
            "Vendor program management",
            "Data reconciliation",
            "EDI 810 & ABC formats",
            "ScanAlytics platform",
            "Distributor data processing",
            "Accurate rebate payments",
          ].map((chip) => (
            <span
              key={chip}
              className="border border-[#292d55] text-[#d4d4d4] px-4 py-2"
              style={{ fontSize: "13px", fontWeight: 400 }}
            >
              {chip}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── 2. Managing Vendor Programs at Scale ─────────────────────────────────────
const vendorProgramItems = [
  {
    number: "01",
    title: "Coordinating programs across independent stores",
    description:
      "Running vendor rebate programs across a network of independent stores — each with different sales volumes, product mixes, and distributor relationships — requires centralized infrastructure that most independents can't build on their own.",
    detail:
      "PBD manages program enrollment, compliance tracking, and reporting across the full network, giving each store access to programs that would otherwise require chain-level scale to participate in.",
  },
  {
    number: "02",
    title: "Promotional pricing & program execution",
    description:
      "Vendor programs involve promotional pricing windows, display requirements, and sales thresholds that must be tracked and verified. PBD's systems monitor participation and flag when adjustments are needed.",
    detail:
      "Retailers are notified of their promotional price updates. PBD handles the program-side execution — tracking, reporting, and rebate calculation.",
  },
  {
    number: "03",
    title: "Rebate calculation and payment disbursement",
    description:
      "Once vendor data is reconciled, PBD calculates each store's rebate earnings by program and issues payments on the schedule established in each vendor agreement.",
    detail:
      "Payments are made directly to each member retailer. Monthly statements provide a full breakdown of which programs contributed, at what rate, and for what volume.",
  },
];

function VendorProgramsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="bg-white"
      style={{ fontFamily: "'Inter', sans-serif", padding: "80px 0" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] flex flex-col gap-[56px]">
        {/* Header */}
        <div className="flex flex-col gap-6">
          <p
            className="text-[#999] uppercase tracking-[0.15em]"
            style={{ fontSize: "11.2px", fontWeight: 500 }}
          >
            Vendor Programs
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <motion.h2
              className="text-[#0a0a0a]"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Managing Vendor Programs at Scale
            </motion.h2>
            <motion.p
              className="text-[#555]"
              style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.7 }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            >
              Independent retailers gain access to vendor programs typically
              reserved for large chains — without the administrative burden of
              managing them. PBD's infrastructure handles program coordination,
              compliance, and payment across the entire network.
            </motion.p>
          </div>
        </div>

        {/* Feature cards */}
        <div className="flex flex-col gap-5">
          {vendorProgramItems.map((item, index) => (
            <motion.div
              key={item.number}
              className="grid grid-cols-1 lg:grid-cols-[80px_1fr_1fr] gap-6 p-6 md:p-8 bg-[#FAFAFA]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: 0.1 + index * 0.1,
                ease: "easeOut",
              }}
            >
              {/* Number */}
              <p
                className="text-[#888]"
                style={{ fontSize: "13px", fontWeight: 500, letterSpacing: "0.05em", paddingTop: "4px" }}
              >
                {item.number}
              </p>

              {/* Title + description */}
              <div>
                <h3
                  className="text-[#0a0a0a] mb-3"
                  style={{
                    fontSize: "clamp(18px, 2vw, 22px)",
                    fontWeight: 400,
                    lineHeight: 1.3,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[#444]"
                  style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.65 }}
                >
                  {item.description}
                </p>
              </div>

              {/* Detail callout */}
              <p
                className="text-[#555] border-l border-[#d4d4d4] pl-5 self-center"
                style={{ fontSize: "13px", fontWeight: 400, lineHeight: 1.65 }}
              >
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 3. Data Reconciliation ────────────────────────────────────────────────────
const reconciliationSteps = [
  {
    step: "01",
    title: "Distributor reporting received",
    body: "PBD receives sales data directly from distributors — including Core-Mark and others — covering product movement across participating retail locations.",
  },
  {
    step: "02",
    title: "Data cross-referenced against vendor programs",
    body: "Sales records are matched against active vendor program parameters — promotional periods, qualifying SKUs, volume thresholds, and store-level compliance requirements.",
  },
  {
    step: "03",
    title: "Discrepancies identified and resolved",
    body: "Where distributor data contains gaps, errors, or delays, PBD's reconciliation process flags and resolves issues before rebate calculations are finalized.",
  },
  {
    step: "04",
    title: "Rebate calculations finalized",
    body: "Once data is verified, rebate amounts are calculated per store, per program, and per vendor — based on actual verified sell-through, not estimates.",
  },
  {
    step: "05",
    title: "Statements issued and payments disbursed",
    body: "Each retailer receives a detailed statement showing program-by-program breakdowns. Payments follow the schedule defined in each vendor agreement.",
  },
];

function DataReconciliationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="bg-[#111642]"
      style={{ fontFamily: "'Inter', sans-serif", padding: "80px 0" }}
      data-navbar-theme="dark"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] flex flex-col gap-[56px]">
        {/* Header */}
        <div className="flex flex-col gap-6">
          <p
            className="text-[#888] uppercase tracking-[0.15em]"
            style={{ fontSize: "11.2px", fontWeight: 500 }}
          >
            Data Reconciliation
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <motion.h2
              className="text-white"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Data Reconciliation and Program Accuracy
            </motion.h2>
            <motion.p
              className="text-[#aaa]"
              style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.7 }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            >
              Distributor reporting isn't always clean or complete. PBD's
              reconciliation process ensures that every vendor program is measured
              against accurate sell-through data — and that retailers receive the
              rebate payments they've earned.
            </motion.p>
          </div>
        </div>

        {/* Steps flow */}
        <div className="flex flex-col">
          {reconciliationSteps.map((step, index) => (
            <motion.div
              key={step.step}
              className="flex items-start gap-5 pb-8 relative"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.08,
                ease: "easeOut",
              }}
            >
              {/* Connector line */}
              {index < reconciliationSteps.length - 1 && (
                <div
                  className="absolute left-[15px] w-[1px] bg-[#292d55]"
                  style={{ top: "28px", bottom: "0" }}
                />
              )}

              {/* Dot */}
              <div
                className="w-[8px] h-[8px] mt-[6px] shrink-0 relative z-10"
                style={{
                  backgroundColor: index === reconciliationSteps.length - 1 ? "#EA1528" : "#414568",
                  marginTop: "6px",
                }}
              />

              {/* Content */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:gap-8 flex-1">
                <span
                  className="text-[#555] shrink-0"
                  style={{ fontSize: "12px", fontWeight: 500, minWidth: "30px" }}
                >
                  {step.step}
                </span>
                <div className="flex flex-col gap-1 flex-1">
                  <span
                    className="text-white"
                    style={{ fontSize: "16px", fontWeight: 500, lineHeight: 1.4, letterSpacing: "-0.01em" }}
                  >
                    {step.title}
                  </span>
                  <span
                    className="text-[#aaa]"
                    style={{ fontSize: "14px", fontWeight: 400, lineHeight: 1.7 }}
                  >
                    {step.body}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note callout */}
        <motion.div
          className="border border-[#292d55] p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          <p
            className="text-[#aaa]"
            style={{ fontSize: "14px", fontWeight: 400, lineHeight: 1.7, fontStyle: "italic" }}
          >
            *Payments are highly dependent on vendors providing timely, accurate
            tracking, sales data, as well as payments. PBD's reconciliation
            process is designed to maximize accuracy within the constraints of
            what distributors and vendors provide.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 4. Electronic Data for Retail Accounting ─────────────────────────────────
const ediVendors = [
  { name: "Coca-Cola", formats: ["EDI 810", "ABC"] },
  { name: "Pepsi", formats: ["EDI 810", "ABC"] },
  { name: "Frito-Lay", formats: ["EDI 810"] },
  { name: "Farmer Brothers", formats: ["EDI 810", "ABC"] },
  { name: "Core-Mark", formats: ["EDI 810", "ABC"] },
  { name: "Keurig Dr Pepper", formats: ["EDI 810"] },
];

function ElectronicDataSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="bg-[#FAFAFA]"
      style={{ fontFamily: "'Inter', sans-serif", padding: "80px 0" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] flex flex-col gap-[56px]">
        {/* Header */}
        <div className="flex flex-col gap-6">
          <p
            className="text-[#999] uppercase tracking-[0.15em]"
            style={{ fontSize: "11.2px", fontWeight: 500 }}
          >
            Electronic Data
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <motion.h2
              className="text-[#0a0a0a]"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Electronic Data for Retail Accounting
            </motion.h2>
            <motion.p
              className="text-[#555]"
              style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.7 }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            >
              PBD processes vendor invoicing and rebate data in the electronic
              formats used by major national vendors — including EDI 810 (standard
              electronic invoice transactions) and ABC (Activity-Based Costing)
              formats. This allows PBD to receive, process, and reconcile
              large-scale vendor data without manual entry.
            </motion.p>
          </div>
        </div>

        {/* Format explanation + vendor grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: format cards */}
          <div className="flex flex-col gap-5">
            <motion.div
              className="bg-white p-6 md:p-8 border border-[#E0E0E0]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="bg-[#111642] text-white px-3 py-1"
                  style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.05em" }}
                >
                  EDI 810
                </span>
                <span
                  className="text-[#555]"
                  style={{ fontSize: "13px", fontWeight: 400 }}
                >
                  Electronic Invoice Transaction
                </span>
              </div>
              <p
                className="text-[#444]"
                style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.65 }}
              >
                The EDI 810 is the standard electronic invoice format used across
                large consumer goods vendors. It allows PBD to receive structured
                invoice data directly from vendors — enabling automated processing
                and reconciliation at scale.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 md:p-8 border border-[#E0E0E0]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="bg-[#d6eefc] text-[#111642] px-3 py-1"
                  style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.05em" }}
                >
                  ABC
                </span>
                <span
                  className="text-[#555]"
                  style={{ fontSize: "13px", fontWeight: 400 }}
                >
                  Activity-Based Costing Format
                </span>
              </div>
              <p
                className="text-[#444]"
                style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.65 }}
              >
                ABC format data is used by several major beverage and distribution
                vendors to report promotional activity and rebate-eligible
                transactions. PBD's systems ingest and process ABC data alongside
                EDI feeds for a complete picture of program participation.
              </p>
            </motion.div>
          </div>

          {/* Right: vendor grid */}
          <div className="flex flex-col gap-4">
            <motion.p
              className="text-[#999] uppercase tracking-[0.12em]"
              style={{ fontSize: "11.2px", fontWeight: 500 }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Vendors processed
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ediVendors.map((vendor, index) => (
                <motion.div
                  key={vendor.name}
                  className="bg-white border border-[#E0E0E0] p-5 flex flex-col gap-3"
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.07,
                    ease: "easeOut",
                  }}
                >
                  <p
                    className="text-[#0a0a0a]"
                    style={{ fontSize: "15px", fontWeight: 500, lineHeight: 1.3 }}
                  >
                    {vendor.name}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {vendor.formats.map((fmt) => (
                      <span
                        key={fmt}
                        className="border border-[#E0E0E0] text-[#555] px-2 py-[3px]"
                        style={{ fontSize: "11px", fontWeight: 400 }}
                      >
                        {fmt}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 5. ScanAlytics Platform ───────────────────────────────────────────────────
const scanAlyticsFeatures = [
  {
    title: "Store-level scan data",
    body: "ScanAlytics captures item-level scan data from participating PBD member locations — giving vendors and PBD visibility into actual product movement at the store level.",
  },
  {
    title: "Program performance tracking",
    body: "Vendor programs can be evaluated against real sell-through data. Promotional lifts, compliance rates, and category performance are measurable — not estimated.",
  },
  {
    title: "Reporting for retailers and vendors",
    body: "Member retailers will have access to their own performance data through the ScanAlytics interface. Vendors gain aggregated network-level reporting to inform future programs.",
  },
  {
    title: "Free basic access for PBD members",
    body: "Basic ScanAlytics access will be provided to PBD member retailers at no additional cost. Advanced analytics tiers will be available for retailers and vendors who want deeper insight.",
  },
];

function ScanAlyticsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      ref={sectionRef}
      className="bg-[#111642]"
      style={{ fontFamily: "'Inter', sans-serif", padding: "80px 0" }}
      data-navbar-theme="dark"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] flex flex-col gap-[56px]">
        {/* Header */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <p
              className="text-[#888] uppercase tracking-[0.15em]"
              style={{ fontSize: "11.2px", fontWeight: 500 }}
            >
              ScanAlytics
            </p>
            <span
              className="bg-[#EA1528] text-white px-3 py-1"
              style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}
            >
              Coming Q4 2026
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <motion.h2
              className="text-white"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              ScanAlytics Platform
            </motion.h2>
            <motion.p
              className="text-[#aaa]"
              style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.7 }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            >
              PBD is developing ScanAlytics — a scan-data platform purpose-built
              for independent convenience retail. ScanAlytics will connect
              point-of-sale data from PBD member stores with vendor program
              tracking, giving both retailers and vendors a clearer view of
              what's actually selling.
            </motion.p>
          </div>
        </div>

        {/* Accordion features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: accordion */}
          <div className="flex flex-col">
            {scanAlyticsFeatures.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div
                  key={item.title}
                  className="border-t border-[#292d55]"
                  style={{ borderBottom: index === scanAlyticsFeatures.length - 1 ? "1px solid #292d55" : undefined }}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.08 + index * 0.07,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <button
                    onClick={() => setActiveIndex(index)}
                    className="w-full text-left flex items-center gap-3 py-5"
                  >
                    <motion.div
                      className="shrink-0 rounded-full"
                      animate={
                        isActive
                          ? { width: 6, height: 6, backgroundColor: "#ea1528" }
                          : { width: 6, height: 6, backgroundColor: "#555" }
                      }
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    />
                    <motion.span
                      className="flex-1"
                      animate={{ color: isActive ? "#ffffff" : "#aaaaaa" }}
                      transition={{ duration: 0.25 }}
                      style={{
                        fontSize: "16px",
                        fontWeight: isActive ? 500 : 400,
                        letterSpacing: "-0.01em",
                        lineHeight: 1.4,
                      }}
                    >
                      {item.title}
                    </motion.span>
                  </button>

                  <motion.div
                    initial={false}
                    animate={isActive ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <motion.div
                      initial={false}
                      animate={isActive ? { y: 0, opacity: 1 } : { y: 8, opacity: 0 }}
                      transition={{ duration: 0.35, delay: isActive ? 0.08 : 0, ease: "easeOut" }}
                      className="pl-[18px] pb-6"
                    >
                      <p
                        className="text-[#d4d4d4]"
                        style={{ fontSize: "14px", fontWeight: 400, lineHeight: 1.7 }}
                      >
                        {item.body}
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: callout card */}
          <motion.div
            className="bg-[#0d1135] border border-[#292d55] p-8 flex flex-col gap-6"
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex flex-col gap-3">
              <p
                className="text-[#888] uppercase tracking-[0.15em]"
                style={{ fontSize: "11.2px", fontWeight: 500 }}
              >
                For PBD Members
              </p>
              <h3
                className="text-white"
                style={{
                  fontSize: "clamp(22px, 2.5vw, 30px)",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}
              >
                Free basic access included with PBD membership.
              </h3>
              <p
                className="text-[#aaa]"
                style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.65 }}
              >
                When ScanAlytics launches, all active PBD member retailers will
                receive complimentary access to the basic tier — including
                store-level sales data and program performance reporting.
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-[6px] h-[6px] bg-[#EA1528] shrink-0" />
                <p className="text-[#d4d4d4]" style={{ fontSize: "14.4px", fontWeight: 400, lineHeight: 1.5 }}>
                  Item-level scan data visibility
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-[6px] h-[6px] bg-[#EA1528] shrink-0" />
                <p className="text-[#d4d4d4]" style={{ fontSize: "14.4px", fontWeight: 400, lineHeight: 1.5 }}>
                  Program participation reporting
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-[6px] h-[6px] bg-[#EA1528] shrink-0" />
                <p className="text-[#d4d4d4]" style={{ fontSize: "14.4px", fontWeight: 400, lineHeight: 1.5 }}>
                  No additional cost for basic access
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-[6px] h-[6px] bg-[#EA1528] shrink-0" />
                <p className="text-[#d4d4d4]" style={{ fontSize: "14.4px", fontWeight: 400, lineHeight: 1.5 }}>
                  Advanced analytics tiers available
                </p>
              </div>
            </div>

            <div
              className="border-t border-[#292d55] pt-5 mt-2"
            >
              <p
                className="text-[#555]"
                style={{ fontSize: "13px", fontWeight: 400, lineHeight: 1.6, fontStyle: "italic" }}
              >
                Launching Q4 2026. Current PBD members will be notified ahead of launch.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── 6. Supporting the PBD Network ────────────────────────────────────────────
const supportingItems = [
  {
    title: "Technology built for independence",
    body: "Independent retailers shouldn't need to build their own technology infrastructure to access vendor programs. PBD's systems exist so individual store owners can participate in national programs without the overhead that chain stores take for granted.",
  },
  {
    title: "Accuracy that protects retailers",
    body: "Reconciliation errors, missing distributor data, and payment delays are common problems in the vendor rebate ecosystem. PBD's process is designed to catch and correct these issues — ensuring retailers receive the payments they've earned.",
  },
  {
    title: "A platform that grows with the network",
    body: "As the PBD network expands across more states and more stores, the underlying technology scales with it. New vendor programs, new data formats, and new analytics capabilities are added on top of the same infrastructure.",
  },
];

function SupportingNetworkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="bg-white"
      style={{ fontFamily: "'Inter', sans-serif", padding: "80px 0" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] flex flex-col gap-[56px]">
        {/* Header */}
        <div className="flex flex-col gap-6">
          <p
            className="text-[#999] uppercase tracking-[0.15em]"
            style={{ fontSize: "11.2px", fontWeight: 500 }}
          >
            Our Approach
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <motion.h2
              className="text-[#0a0a0a]"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Supporting the PBD Network
            </motion.h2>
            <motion.p
              className="text-[#555]"
              style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.7 }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            >
              PBD's technology isn't a product sold to retailers — it's the
              operational backbone that makes the network function. Every dollar
              of rebate earned by a member store passes through systems built to
              ensure accuracy, transparency, and reliable payment.
            </motion.p>
          </div>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {supportingItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-[#FAFAFA] p-8 flex flex-col gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + index * 0.12,
                ease: "easeOut",
              }}
            >
              <div
                className="w-8 h-8 bg-[#111642] flex items-center justify-center text-white shrink-0"
                style={{ fontSize: "13px", fontWeight: 500 }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3
                className="text-[#0a0a0a]"
                style={{
                  fontSize: "clamp(18px, 1.8vw, 22px)",
                  fontWeight: 400,
                  lineHeight: 1.3,
                  letterSpacing: "-0.02em",
                }}
              >
                {item.title}
              </h3>
              <p
                className="text-[#555]"
                style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.7 }}
              >
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          className="bg-[#111642] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-2">
            <h3
              className="text-white"
              style={{
                fontSize: "clamp(20px, 2.5vw, 28px)",
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              Ready to join the PBD network?
            </h3>
            <p
              className="text-[#aaa]"
              style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.5 }}
            >
              No fees. No royalties. Just access to the programs and technology that power independent retail.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#EA1528] border border-[#EA1528] text-white px-[25px] py-[13px] shrink-0 group transition-all hover:bg-white hover:text-[#EA1528]"
            style={{ fontSize: "14px", fontWeight: 500 }}
          >
            Become a Member
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function TechnologyPage() {
  return (
    <div className="size-full">
      <Navbar />
      <TechnologyHero />
      <VendorProgramsSection />
      <DataReconciliationSection />
      <ElectronicDataSection />
      <ScanAlyticsSection />
      <SupportingNetworkSection />
      <ContactFormSection />
      <div data-navbar-theme="dark" className="relative">
        <FooterSection />
      </div>
    </div>
  );
}
