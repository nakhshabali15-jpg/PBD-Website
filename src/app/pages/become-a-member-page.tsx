import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router";
import { Navbar } from "../components/navbar";
import { FooterSection } from "../components/footer-section";
import { LogoCloudSection } from "../components/logo-cloud-section";

// ─── Shared form constants ───────────────────────────────────────────────────
const storeCountOptions = ["1", "2–5", "6–10", "11–25", "25+"];
const salesAreaOptions = [
  "Under 1,500 sq ft",
  "1,500–3,000 sq ft",
  "3,000–5,000 sq ft",
  "Over 5,000 sq ft",
];
const fuelOptions = ["Branded", "Unbranded", "No Fuel"];

const selectBg = `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23999' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`;

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="block text-[#0a0a0a]"
        style={{ fontSize: "13px", fontWeight: 500, letterSpacing: "-0.13px" }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full bg-white border border-[#E0E0E0] px-4 py-3 text-[#0a0a0a] placeholder-[#999] outline-none focus:border-[#111642] transition-colors rounded-[12px]";
const inputSty: React.CSSProperties = { fontSize: "14px", fontWeight: 400 };
const selectCls =
  "w-full bg-white border border-[#E0E0E0] px-4 py-3 text-[#0a0a0a] outline-none focus:border-[#111642] transition-colors appearance-none cursor-pointer rounded-[12px]";
const selectSty: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: 400,
  backgroundImage: selectBg,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 16px center",
};

// ─── Above-fold hero: left pitch + right form ────────────────────────────────
function MemberHeroForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", contact: "", storeLocation: "",
    noOfStores: "", primaryDistributor: "", storeSalesArea: "", fuelBrand: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="relative grid grid-cols-1 lg:grid-cols-2"
      style={{ paddingTop: "79px", fontFamily: "'Inter', sans-serif", minHeight: "928px" }}
      data-navbar-theme="dark"
    >
      {/* ── LEFT: Navy pitch panel ── */}
      <div
        className="relative flex flex-col justify-between px-6 py-12 md:px-12 md:py-16 lg:px-[80px] lg:py-[143px] overflow-hidden"
        style={{ background: "#111642", minHeight: "849px" }}
      >
        <div className="relative z-10 flex flex-col justify-between h-full">
          {/* Top: Label + Heading + Bullets */}
          <div className="flex flex-col gap-[40px]">
            {/* Label + heading */}
            <div className="flex flex-col gap-4">
              <motion.p
                className="text-[#888] uppercase tracking-[1.68px]"
                style={{ fontSize: "11.2px", fontWeight: 500 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Join the PBD Network
              </motion.p>
              <motion.h1
                className="text-white"
                style={{
                  fontSize: "52px",
                  fontWeight: 400,
                  lineHeight: 1.08,
                  letterSpacing: "-1.56px",
                  maxWidth: "604px",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Get access to national vendor programs, designed to grow your store.
              </motion.h1>
            </div>

            {/* 3 trust bullets */}
            <motion.div
              className="flex flex-col gap-[12px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {[
                "No membership fees.",
                "No royalties.",
                "We'll walk you through everything.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-[12px]">
                  <CheckCircle size={14} className="text-[#EA1528] shrink-0 mt-[3px]" strokeWidth={1.5} />
                  <span className="text-[#f5f5f5]" style={{ fontSize: "16px", fontWeight: 400, lineHeight: "20.15px" }}>
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      {/* ── RIGHT: White form panel ── */}
      <div
        className="bg-white flex flex-col justify-center px-6 py-12 md:px-12 md:py-16 lg:px-[64px] lg:py-[143px]"
        style={{ minHeight: "849px" }}
      >
        {submitted ? (
          <motion.div
            className="flex flex-col gap-6 max-w-[520px]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-10 rounded-full border border-[#111642] flex items-center justify-center">
              <CheckCircle size={18} className="text-[#111642]" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-[#0a0a0a]" style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.025em" }}>
                Application received.
              </h2>
              <p className="text-[#555]" style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.7 }}>
                Thank you for your interest in PBD membership. A member of our team will be in touch within 1–2 business days to discuss next steps.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="w-full max-w-[520px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            style={{ paddingTop: "36px" }}
          >
            <p className="text-[#999] mb-6" style={{ fontSize: "13px", fontWeight: 400, lineHeight: 1.5 }}>
              Quick application. Takes less than a minute.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Contact Information */}
              <p className="text-[#0a0a0a]" style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "-0.13px" }}>
                Contact Information
              </p>
              <Field label="Full Name">
                <input type="text" id="name" name="name" value={form.name} onChange={handleChange}
                  placeholder="Full name" required autoComplete="name" className={inputCls} style={inputSty} />
              </Field>
              <Field label="Phone Number">
                <input type="tel" id="contact" name="contact" value={form.contact} onChange={handleChange}
                  placeholder="(000) 000-0000" required autoComplete="tel" className={inputCls} style={inputSty} />
              </Field>
              <Field label="Email Address">
                <input type="email" id="email" name="email" value={form.email} onChange={handleChange}
                  placeholder="you@example.com" required autoComplete="email" className={inputCls} style={inputSty} />
              </Field>

              {/* Store Information */}
              <p className="text-[#0a0a0a] mt-2" style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "-0.13px" }}>
                Store Information
              </p>
              <Field label="Number of Stores">
                <select id="noOfStores" name="noOfStores" value={form.noOfStores} onChange={handleChange}
                  required className={selectCls} style={selectSty}>
                  <option value="" disabled>Select</option>
                  {storeCountOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </Field>
              <Field label="Store Location (City, State)">
                <input type="text" id="storeLocation" name="storeLocation" value={form.storeLocation} onChange={handleChange}
                  placeholder="City, State" required autoComplete="address-level2" className={inputCls} style={inputSty} />
              </Field>
              <Field label="Primary Distributor">
                <input type="text" id="primaryDistributor" name="primaryDistributor" value={form.primaryDistributor} onChange={handleChange}
                  placeholder="e.g. Core-Mark, McLane" required autoComplete="off" className={inputCls} style={inputSty} />
              </Field>
              <Field label="Fuel Brand (optional)">
                <select id="fuelBrand" name="fuelBrand" value={form.fuelBrand} onChange={handleChange}
                  className={selectCls} style={selectSty}>
                  <option value="">Select</option>
                  {fuelOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </Field>
              <Field label="Approx. Store Size (Sq Ft) (optional)">
                <select id="storeSalesArea" name="storeSalesArea" value={form.storeSalesArea} onChange={handleChange}
                  className={selectCls} style={selectSty}>
                  <option value="">Select</option>
                  {salesAreaOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </Field>

              <div className="flex flex-col gap-[12px] mt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 border border-[#EA1528] text-[#EA1528] px-[25px] py-[13px] hover:bg-[#EA1528] hover:text-white transition-all cursor-pointer w-fit group"
                  style={{ fontSize: "14px", fontWeight: 500 }}
                >
                  Submit Application
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-[#999]" style={{ fontSize: "12px", fontWeight: 400, lineHeight: "19.2px" }}>
                  We'll follow up within 1–2 business days.
                </p>
              </div>
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
}

// ─── Contact CTA section (updated to match Figma gradient design) ─────────────
function ContactCTASection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="px-6 md:px-10 lg:px-[80px]"
      style={{
        background: "linear-gradient(to bottom, #111642, #2b38a8)",
        fontFamily: "'Inter', sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
      data-navbar-theme="dark"
    >
      {/* Radial red glow overlay */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0, left: 0, right: 0, bottom: 0,
          background: "radial-gradient(ellipse 40% 60% at 20% 50%, rgba(234,21,40,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 py-[96px]">
        {/* Left: heading + body */}
        <motion.div
          className="flex flex-col gap-[29px] max-w-[680px]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            className="text-white"
            style={{
              fontSize: "clamp(36px, 4.5vw, 65px)",
              fontWeight: 400,
              lineHeight: "64px",
              letterSpacing: "-1.68px",
            }}
          >
            Have a question first?
          </h2>
          <p
            className="text-white"
            style={{ fontSize: "16px", fontWeight: 400, lineHeight: "23.8px", maxWidth: "616px" }}
          >
            Talk to our team and we'll walk you through how PBD works.<br /><br />No pressure. Just a straightforward conversation.
          </p>
        </motion.div>

        {/* Right: filled red CTA button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="shrink-0"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#EA1528] border border-[#EA1528] text-white px-[25px] py-[13px] hover:bg-[#c8101f] hover:border-[#c8101f] transition-all duration-300 group whitespace-nowrap"
            style={{ fontSize: "14px", fontWeight: 500 }}
          >
            Talk to Our Team
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function BecomeAMemberPage() {
  return (
    <div className="size-full">
      <Navbar forceDark />
      <MemberHeroForm />
      {/* Logo cloud: bg-[#fafafa], "Trusted Brands Trust Us" label, infinite slider */}
      <div>
        <LogoCloudSection />
      </div>
      <ContactCTASection />
      <div data-navbar-theme="dark" className="relative">
        <FooterSection />
      </div>
    </div>
  );
}
