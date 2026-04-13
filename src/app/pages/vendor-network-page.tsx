import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Navbar } from "../components/navbar";
import { FooterSection } from "../components/footer-section";
import { ContactFormSection } from "../components/contact-form-section";
import { LogoCloudSection } from "../components/logo-cloud-section";
// Timeline brand logos — new card design (Figma node 5789-799)
const tlConvenienceValet = "https://www.figma.com/api/mcp/asset/63cba3b8-d956-4060-ad8d-f7e93e475dc2";
const tlBalanceBar       = "https://www.figma.com/api/mcp/asset/b0317d5b-6d20-4468-abc6-86dd5c6682df";
// Remaining brand logos from Figma node 5761-604
const tlFijiWater        = "https://www.figma.com/api/mcp/asset/8e7392b1-b238-4825-8d31-2fe620cf85fa";
const tlMonster          = "https://www.figma.com/api/mcp/asset/dec40f34-5f55-4ffb-b6d9-f0017e534d68";
const tlGeneralMills     = "https://www.figma.com/api/mcp/asset/852f5ca6-63a8-4d4b-8380-f88c53e9ac0f";
const tl7Up              = "https://www.figma.com/api/mcp/asset/ab00c56e-08d7-499b-b4f0-c32472ada524";
const tlTobaccoBackbar   = "https://www.figma.com/api/mcp/asset/916eeffb-a9f8-4856-bc90-3f8668cbe7f4";
const tlVenomEnergy      = "https://www.figma.com/api/mcp/asset/19ee420a-268a-453e-825f-f59cf0ffaa36";
// Hero composite image from Figma (node 5755-567)
const heroCompositeImg =
  "https://www.figma.com/api/mcp/asset/1778b31e-5f83-40d4-a4ca-053add9d50a3";

// Core-Mark story image from Figma (expires in 7 days — replace with a local asset later)
const coreMarkImg =
  "https://www.figma.com/api/mcp/asset/42921a68-d840-4854-8fc8-24761e9b43c4";

// Why Vendors section — right panel images from Figma node 5768-4420
const whyImg0 = "https://www.figma.com/api/mcp/asset/653b15fd-28f8-417b-b778-2e90d4f6b93f"; // Network Access
const whyImg1 = "https://www.figma.com/api/mcp/asset/71a8b9a1-800e-4bc4-aed3-b5476e3112a4"; // Execute Programs
const whyImg2 = "https://www.figma.com/api/mcp/asset/a1946029-5a7e-4319-9a8a-cc0cb7fac0ce"; // Program Accountability
const whyImg3 = "https://www.figma.com/api/mcp/asset/48be4c62-d956-4d80-9d6a-8b068ddbadd5"; // Growth Partnership

// ─── 1. Hero — matches Programs / How It Works pattern ───────────────────────
function VendorNetworkHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#111642] overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif", paddingTop: "79px" }}
      data-navbar-theme="dark"
    >
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] flex flex-col gap-[80px] py-16 md:py-20">
        {/* Top Row: Headline + Description */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[20px] items-end">
          {/* Headline */}
          <motion.div
            className="flex-shrink-0 lg:w-[686px]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h1
              className="text-white"
              style={{
                fontSize: "clamp(40px, 6vw, 64px)",
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              Built on decades of vendor relationships that drive real results
            </h1>
          </motion.div>

          {/* Description */}
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
              PBD's network is built on long-standing relationships with national vendors and distributors, allowing independent retailers to access programs, pricing, and funding typically reserved for large chains.
            </p>
          </motion.div>
        </div>

        {/* Hero composite image — from Figma node 5755-567 */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <img
            src={heroCompositeImg}
            alt="Vendor Network — three-panel hero"
            className="w-full object-cover"
            style={{ height: "405px", objectPosition: "center" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

// ─── 2. Stats Bar — separate red section matching Figma design ────────────────
function VendorStatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  const stats = [
    { value: "50", suffix: "+", label: "National brand programs" },
    { value: "$12M", suffix: "+", label: "In rebates distribution annually" },
    { value: "12", suffix: "+", label: "Active vendor partners" },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#EA1528] py-10 md:py-[60px]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[64px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center gap-[72px]">
              {index > 0 && (
                <div className="hidden md:block w-px h-[121px] bg-white/20 shrink-0" />
              )}
              <motion.div
                className="flex gap-3 items-start"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
              >
                <div className="flex items-end text-white">
                  <span
                    style={{
                      fontSize: "90px",
                      fontWeight: 500,
                      lineHeight: 1,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontSize: "53px",
                      fontWeight: 600,
                      lineHeight: 1,
                      paddingBottom: "4px",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {stat.suffix}
                  </span>
                </div>
                <p
                  className="text-[#e5e5e5] max-w-[114px] pt-1"
                  style={{ fontSize: "16px", fontWeight: 500, lineHeight: 1.4 }}
                >
                  {stat.label}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 3. Core-Mark Story — matches Figma node 5737-10567 ──────────────────────
function PartnershipStorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="bg-white"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] py-[80px] flex flex-col gap-[56px]">
        {/* Section Header */}
        <div className="flex flex-col gap-6">
          <motion.p
            className="text-[#999] uppercase tracking-[0.105em]"
            style={{ fontSize: "16px", fontWeight: 500 }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
          >
            THE CORE-MARK STORY
          </motion.p>

          <div className="flex flex-col lg:flex-row gap-[64px] items-start">
            <motion.h2
              className="text-[#111642] flex-1"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Partnerships that reshape convenience distribution.
            </motion.h2>

            {/* Right description — hidden on mobile, shown on desktop per Figma (opacity-0 in design = decorative space) */}
            <div className="hidden lg:flex flex-1 items-center justify-center" />
          </div>
        </div>

        {/* Image + Body copy — 2 column grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-[64px]"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {/* Left: Image with overlay caption */}
          <div className="relative overflow-hidden" style={{ height: "430px" }}>
            <img
              src={coreMarkImg}
              alt="Core-Mark partnership"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
            {/* Caption */}
            <p
              className="absolute bottom-[25px] left-[25px] text-white"
              style={{
                fontSize: "30px",
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: "-0.03em",
                maxWidth: "232px",
              }}
            >
              From early 1990s to today.
            </p>
          </div>

          {/* Right: Body text + pull quote */}
          <div className="flex flex-col justify-between gap-6 pt-2">
            <div className="flex flex-col gap-6">
              <p
                className="text-[#525252]"
                style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.6 }}
              >
                In the early 1990s, PBD entered into a strategic relationship with Core-Mark during a pivotal period in the company's history, helping support its restructuring and repositioning within the convenience retail industry.
              </p>
              <p
                className="text-[#525252]"
                style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.6 }}
              >
                Today, Core-Mark is one of the largest convenience distributors in the United States, and the partnership with PBD continues.
              </p>
            </div>

            {/* Pull quote — red left border per Figma */}
            <div className="border-l-2 border-[#EA1528] pl-5 py-1">
              <p
                className="text-[#222]"
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: 1.75,
                }}
              >
                This wasn't a passive relationship. PBD played an active role in supporting one of the industry's most important distribution companies.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── 4. Vendor Timeline — horizontal scroll on vertical input ─────────────────
const timelineItems = [
  {
    year: "1994",
    brand: "Convenience Valet",
    body: "Helped launch and scale a curated health and personal care program across independent retailers, proving the concept in key Western markets and supporting national expansion.",
    img: tlConvenienceValet,
    imgAlt: "Convenience Valet logo",
  },
  {
    year: "1996",
    brand: "Balance Bar",
    body: "Recognized early potential in convenience and supported packaging, pricing, merchandising, and distribution strategy to successfully introduce the category to the channel.",
    img: tlBalanceBar,
    imgAlt: "Balance Bar logo",
  },
  {
    year: "1996",
    brand: "FIJI Water",
    body: "Supported a relaunch into convenience with a new package size and value price point, helping validate the product and drive national rollout.",
    img: tlFijiWater,
    imgAlt: "FIJI Water logo",
  },
  {
    year: "1998",
    brand: "Monster Energy",
    body: "We identified it early and helped get it into stores and grow before the energy category reached scale, becoming the first chain to put Monster on the shelf west of the Mississippi.",
    img: tlMonster,
    imgAlt: "Monster Energy logo",
  },
  {
    year: "1998",
    brand: "General Mills",
    body: "Helped bring General Mills' convenience-focused product line into market across member stores, supporting early adoption in key regions.",
    img: tlGeneralMills,
    imgAlt: "General Mills logo",
  },
  {
    year: "2000",
    brand: "Tobacco Backbar",
    body: "Developed and deployed large-scale tobacco backbar programs, introducing new merchandising standards and improving product visibility and pricing structure.",
    img: tlTobaccoBackbar,
    imgAlt: "Tobacco backbar logo",
  },
  {
    year: "2003",
    brand: "7Up Value Strategy",
    body: "Advised on product positioning and value pricing strategy, becoming one of the first networks to distribute the new package size in convenience.",
    img: tl7Up,
    imgAlt: "7Up logo",
  },
  {
    year: "2005",
    brand: "Venom Energy",
    body: "Helped position and validate a value-driven energy product in convenience, supporting early distribution and category expansion.",
    img: tlVenomEnergy,
    imgAlt: "Venom Energy logo",
  },
  {
    year: "2006",
    brand: "Juul",
    body: "Supported early proof-of-concept in convenience through store-level execution, display strategy, and targeted distribution.",
    img: "https://www.figma.com/api/mcp/asset/7180e94d-8361-4c82-9442-1d41eae3eb0b",
    imgAlt: "Juul logo",
  },
];

// Card width + gap — must match the inline style below
const CARD_W = 650;
const CARD_GAP = 80;

function VendorTimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  // Total scrollable distance = (cards - 1 visible) * (card + gap)
  // We expose ~1 card worth of scroll per card after the first
  const totalCards = timelineItems.length;
  // scrollable px = total track width minus one viewport-wide window
  // We compute it dynamically via state so SSR/resize is handled
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    function calc() {
      const vw = window.innerWidth;
      // total track width: all cards + gaps between them
      const trackW = totalCards * CARD_W + (totalCards - 1) * CARD_GAP;
      // how much we can shift: track overflows viewport minus left padding
      setScrollDistance(Math.max(0, trackW - vw + 160)); // 160 = ~2×80px padding
    }
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [totalCards]);

  // Pin the section for `scrollDistance` px of scroll
  // useScroll on the outer wrapper div (which has that explicit height)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Header fade-in
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    // Outer: tall enough to provide the scroll distance for pinning
    <div
      ref={containerRef}
      style={{
        height: scrollDistance > 0 ? `calc(100vh + ${scrollDistance}px)` : "auto",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Sticky wrapper — stays in view while we scroll through the distance */}
      <div
        ref={stickyRef}
        className="sticky top-0 overflow-hidden bg-[#fafafa]"
      >
        {/* Header — constrained + padded, same as every other section */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] pt-[80px]">
          <div ref={headerRef} className="mb-[80px]">
            <motion.p
              className="text-[#999] uppercase tracking-[0.14em] mb-5"
              style={{ fontSize: "12px", fontWeight: 500 }}
              initial={{ opacity: 0 }}
              animate={isHeaderInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              Vendor Timeline
            </motion.p>
            <div className="flex items-end justify-between gap-8">
              <motion.h2
                className="text-[#0a0a0a] flex-1"
                style={{
                  fontSize: "clamp(28px, 3.5vw, 48px)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
              >
                Helping brands grow in convenience retail for over 30 years
              </motion.h2>
              <motion.p
                className="text-[#aaa] shrink-0 hidden lg:block"
                style={{ fontSize: "13px", fontWeight: 400 }}
                initial={{ opacity: 0 }}
                animate={isHeaderInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Scroll to explore →
              </motion.p>
            </div>
            <motion.p
              className="text-[#555] max-w-[640px] mt-4"
              style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.6 }}
              initial={{ opacity: 0, y: 16 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
            >
              PBD has worked alongside emerging and established brands to introduce, position, and scale products within the convenience channel, long before many categories reached mainstream adoption.
            </motion.p>
          </div>
        </div>

        {/* Card track — starts at same left indent as section content, scrolls freely right */}
        <div className="overflow-hidden px-6 md:px-10 lg:px-[80px]">
          <motion.div
            className="flex items-end"
            style={{
              x,
              gap: CARD_GAP,
              width: "max-content",
            }}
          >
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.brand}
                className="shrink-0 flex gap-6 items-end"
                style={{ width: CARD_W }}
                initial={{ opacity: 0, y: 24 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: 0.1 + index * 0.06,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                {/* Square logo image — 209×209 per Figma */}
                <div
                  className="shrink-0 overflow-hidden"
                  style={{ width: 209, height: 209 }}
                >
                  <img
                    src={item.img}
                    alt={item.imgAlt}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Text block */}
                <div className="flex flex-col gap-6 py-1 flex-1 min-w-0">
                  <div className="flex flex-col gap-1">
                    <p
                      className="text-[#ec2c3e]"
                      style={{ fontSize: "16px", fontWeight: 500, lineHeight: "23.8px" }}
                    >
                      {item.year}
                    </p>
                    <h3
                      className="text-[#0a0a0a]"
                      style={{
                        fontSize: "24px",
                        fontWeight: 500,
                        lineHeight: 1.2,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {item.brand}
                    </h3>
                  </div>
                  <p
                    className="text-[#737373]"
                    style={{ fontSize: "14px", fontWeight: 400, lineHeight: "20px" }}
                  >
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Progress bar — also padded consistently */}
        <div className="px-6 md:px-10 lg:px-[80px] pb-[80px]">
          <div className="mt-[56px] h-px bg-[#e5e5e5] relative">
            <motion.div
              className="absolute left-0 top-0 h-full bg-[#ec2c3e]"
              style={{ width: progressWidth }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

// ─── 5. Why Vendors Partner with PBD ─────────────────────────────────────────
// Figma node 5768-4420 — dark navy section, accordion left + red stat panel right
const whyItems = [
  {
    title: "Network Access",
    body: "Access a coordinated network of independent c-stores, gas stations, and truck stops across 20+ states through a single relationship.",
    tags: ["20+ states", "300+ Locations", "Single Point of Contact"],
    stat: "20+",
    statLabel: "States covered",
    img: whyImg0,
  },
  {
    title: "Program Execution",
    body: "Ensure pricing, promotions, and merchandising are implemented consistently across hundreds of locations.",
    tags: ["Category Resets", "In-Store Activation", "Planogram Compliance"],
    stat: "100+",
    statLabel: "Locations across the United States",
    img: whyImg1,
  },
  {
    title: "Performance and Accountability",
    body: "Track participation, measure results, and improve program effectiveness across the network.",
    tags: ["Distributor Data", "Program Tracking", "Transparent Reporting"],
    stat: "100%",
    statLabel: "Transparent reporting",
    img: whyImg2,
  },
  {
    title: "Growth Partnership",
    body: "Work with a partner focused on driving volume, expanding distribution, and improving long-term performance.",
    tags: ["Product Launches", "Brand Strategy", "Long-Term Relationships"],
    stat: "30+",
    statLabel: "Years of brand launches",
    img: whyImg3,
  },
];

function WhyVendorsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const active = whyItems[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="bg-[#111642] py-20 md:py-[80px]"
      style={{ fontFamily: "'Inter', sans-serif" }}
      data-navbar-theme="dark"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px]">

        {/* ── Header ── */}
        <div className="mb-14">
          <motion.p
            className="text-[#888] uppercase tracking-[0.14em] mb-6"
            style={{ fontSize: "12px", fontWeight: 500 }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            For Vendors
          </motion.p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px]">
            <motion.h2
              className="text-white"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Why vendors partner with PBD
            </motion.h2>
            <motion.p
              className="text-[#aaa] self-end"
              style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.6 }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Independent convenience is fragmented, difficult to coordinate, and nearly impossible to activate at scale without a structured network. PBD solves that.
            </motion.p>
          </div>
        </div>

        {/* ── Two-col: accordion left + red stat panel right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px] items-stretch">

          {/* LEFT: accordion list */}
          <div className="flex flex-col">
            {whyItems.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div
                  key={item.title}
                  className="border-t border-[#333]"
                  style={{ borderBottom: index === whyItems.length - 1 ? "1px solid #333" : undefined }}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.08 + index * 0.07,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  {/* Row trigger */}
                  <button
                    onClick={() => setActiveIndex(index)}
                    className="w-full text-left group flex items-center gap-3 py-[19px]"
                  >
                    {/* Dot */}
                    <motion.div
                      className="shrink-0 rounded-full"
                      animate={isActive
                        ? { width: 6, height: 6, backgroundColor: "#ea1528" }
                        : { width: 6, height: 6, backgroundColor: "#555" }
                      }
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    />
                    {/* Title */}
                    <motion.span
                      className="flex-1"
                      animate={{ color: isActive ? "#ffffff" : "#aaaaaa" }}
                      transition={{ duration: 0.25 }}
                      style={{ fontSize: "16px", fontWeight: isActive ? 500 : 400, letterSpacing: "-0.01em", lineHeight: 1.4 }}
                    >
                      {item.title}
                    </motion.span>
                  </button>

                  {/* Expanded content */}
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
                        className="text-[#d4d4d4] mb-4"
                        style={{ fontSize: "14px", fontWeight: 400, lineHeight: 1.7 }}
                      >
                        {item.body}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="border border-[#444] text-[#d4d4d4] px-3 py-[3px]"
                            style={{ fontSize: "11px", fontWeight: 400 }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT: sticky red stat panel */}
          <motion.div
            className="hidden lg:block sticky top-24 self-start"
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative overflow-hidden" style={{ height: "384px" }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={`img-${activeIndex}`}
                  src={active.img}
                  alt={active.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ─── 6. For Retailers ─────────────────────────────────────────────────────────
// Figma node 5768-3957
const retailersImg = "https://www.figma.com/api/mcp/asset/eaffff43-17eb-4fe9-80af-d0ef97b2997d";

const retailerBullets = [
  "Access to national vendor programs backed by trusted brands",
  "Rebate opportunities tied to real product performance",
  "Category management built on real retail experience",
  "Merchandising programs developed with vendor partners",
];

function ForRetailersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="bg-white"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] py-[80px] flex flex-col gap-[56px]">

        {/* ── Header ── */}
        <div className="flex flex-col gap-6">
          <motion.p
            className="text-[#999] uppercase tracking-[0.12em]"
            style={{ fontSize: "14px", fontWeight: 500 }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
          >
            For Retailers
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px] items-start">
            <motion.h2
              className="text-[#111642]"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Decades of relationships. Working for your store.
            </motion.h2>

            <motion.p
              className="text-[#555]"
              style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.6 }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Every vendor relationship in the PBD network was built through years of real collaboration. These relationships give PBD members access to programs, pricing, and funding that independent stores can't access on their own.
            </motion.p>
          </div>
        </div>

        {/* ── Image + Bullets ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px] items-stretch">

          {/* Left: c-store aisle image */}
          <motion.div
            className="overflow-hidden"
            style={{ height: "430px" }}
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <img
              src={retailersImg}
              alt="Convenience store aisle"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right: bullet list + CTA */}
          <motion.div
            className="flex flex-col justify-between"
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Bullet rows */}
            <div className="flex flex-col">
              {retailerBullets.map((bullet, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 border-b border-[#e0e0e0]"
                  style={{ height: "62px" }}
                  initial={{ opacity: 0, x: 16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.25 + index * 0.08,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <div className="w-[6px] h-[6px] bg-[#EA1528] shrink-0" />
                  <p
                    className="text-[#333]"
                    style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.35 }}
                  >
                    {bullet}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              className="mt-8"
            >
              <Link
                to="/programs"
                className="inline-flex items-center gap-3 border border-[#EA1528] text-[#EA1528] px-[25px] py-[13px] group transition-all hover:bg-[#EA1528] hover:text-white"
                style={{ fontSize: "16px", fontWeight: 500 }}
              >
                Explore Our Program
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ─── 7. CTA Banner — Figma node 5775-1257 ────────────────────────────────────
const ctaBgImg = "https://www.figma.com/api/mcp/asset/b48be672-9029-465f-9c94-d265b0cfaca3";

function CTABannerSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      className="flex flex-col lg:flex-row w-full"
      style={{ fontFamily: "'Inter', sans-serif", minHeight: "343px" }}
      data-navbar-theme="dark"
    >
      {/* LEFT — navy→blue gradient with dot-grid bg image */}
      <motion.div
        className="relative flex-1 overflow-hidden flex flex-col justify-between px-[80px] py-[32px] gap-8"
        style={{
          background: "linear-gradient(to bottom, #111642, #2b38a8)",
          minHeight: "343px",
        }}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Decorative dot-grid background image (flipped vertically, centered) */}
        <div
          className="absolute inset-x-0 top-0 pointer-events-none"
          style={{ height: "343px", transform: "scaleY(-1) rotate(180deg)" }}
        >
          <img
            src={ctaBgImg}
            alt=""
            className="absolute w-full h-full object-cover opacity-40"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-3">
          <h3
            className="text-white"
            style={{
              fontSize: "clamp(28px, 3.2vw, 42px)",
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              maxWidth: "540px",
            }}
          >
            Join the PBD network and start accessing vendor programs, pricing, and rebates.
          </h3>
        </div>

        <Link
          to="/contact"
          className="relative z-10 inline-flex items-center gap-2 self-start bg-[#EA1528] border border-[#EA1528] text-white px-[25px] py-[13px] group transition-all hover:bg-white hover:text-[#EA1528]"
          style={{ fontSize: "14px", fontWeight: 500 }}
        >
          Become a Member
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>

      {/* RIGHT — bright lavender panel */}
      <motion.div
        className="relative flex flex-col justify-between overflow-hidden px-[32px] lg:px-[80px] py-[32px]"
        style={{
          backgroundColor: "#e3dcfb",
          minHeight: "343px",
          flexShrink: 0,
          flexBasis: "clamp(320px, 42%, 595px)",
        }}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h3
          style={{
            fontSize: "clamp(28px, 3.2vw, 42px)",
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
            color: "#171717",
            maxWidth: "480px",
          }}
        >
          Partner with PBD to reach independent retailers <br />at scale.
        </h3>

        <Link
          to="/contact"
          className="inline-flex items-center gap-3 self-start border border-[#EA1528] text-[#EA1528] px-[25px] py-[13px] group transition-all hover:bg-[#EA1528] hover:text-white"
          style={{ fontSize: "16px", fontWeight: 500 }}
        >
          Contact Us
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function VendorNetworkPage() {
  return (
    <div className="size-full">
      <Navbar />
      <VendorNetworkHero />
      {/* VendorStatsSection hidden for this page */}
      <PartnershipStorySection />
      <VendorTimelineSection />
      <WhyVendorsSection />
      <ForRetailersSection />
      <LogoCloudSection />
      <CTABannerSection />
      <ContactFormSection />
      <div data-navbar-theme="dark" className="relative">
        <FooterSection />
      </div>
    </div>
  );
}
