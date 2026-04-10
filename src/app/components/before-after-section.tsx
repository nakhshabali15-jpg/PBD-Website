import { useRef } from "react";
import { motion, useInView } from "motion/react";

const imgImage1770 = "https://www.figma.com/api/mcp/asset/65b7e44c-f729-4e61-bb52-500c74705059";
const imgPicture21 = "https://www.figma.com/api/mcp/asset/d974523d-2e36-4cfa-94d5-3a040bcdce7d";
const imgFrame     = "https://www.figma.com/api/mcp/asset/e1a4c622-3eef-4cd4-a6bd-f1b30de963fc";

export function BeforeAfterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      className="bg-[#fafafa]"
      style={{ fontFamily: "'Inter', sans-serif", padding: "80px 0" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] flex flex-col gap-[56px] items-center">

        {/* Header */}
        <div className="flex flex-col gap-6 w-full">
          <motion.p
            className="text-[#888] uppercase tracking-[1.68px]"
            style={{ fontSize: "11.2px", fontWeight: 500, lineHeight: "16.8px" }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            THE TRANSFORMATION
          </motion.p>
          <motion.p
            className="text-[#111642]"
            style={{
              fontSize: "clamp(32px, 3.5vw, 48px)",
              fontWeight: 400,
              lineHeight: "1.1",
              letterSpacing: "-1.44px",
              maxWidth: "557px",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            This is what we actually do to your store.
          </motion.p>
        </div>

        {/* Before / Arrow / After */}
        <div className="flex gap-6 items-center w-full" style={{ height: "519px" }}>

          {/* ── Before column ── */}
          <motion.div
            className="flex flex-col flex-1 h-full min-w-0"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            {/* Image — fills available height */}
            <div className="flex-1 min-h-0 relative overflow-hidden">
              <img
                alt="Before — disorganized store"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                src={imgImage1770}
              />
            </div>

            {/* Caption */}
            <div className="flex flex-col gap-2 pt-4 shrink-0">
              {/* Badge */}
              <div
                className="flex items-center justify-center px-3 py-2 border border-[#d4d4d4] w-fit"
                style={{ background: "#e5e5e5" }}
              >
                <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "16.5px", color: "#000", whiteSpace: "nowrap" }}>
                  Before
                </p>
              </div>
              {/* Title */}
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "27px",
                  letterSpacing: "-0.18px",
                  color: "#0a0a0a",
                  whiteSpace: "nowrap",
                }}
              >
                Disorganized. Underfunded. Invisible.
              </p>
              {/* Description */}
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "22.1px",
                  color: "#555",
                  maxWidth: "469px",
                }}
              >
                Messy tobacco backbar, no promotional signage, missing out on chain-level contracts.
              </p>
            </div>
          </motion.div>

          {/* ── Arrow button ── */}
          <motion.div
            className="flex items-center overflow-hidden p-2 shrink-0"
            style={{ background: "#0f143b" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative size-[32px]">
              <img alt="" className="absolute block max-w-none size-full" src={imgFrame} />
            </div>
          </motion.div>

          {/* ── After column ── */}
          <motion.div
            className="flex flex-col flex-1 h-full min-w-0"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          >
            {/* Image — fills available height */}
            <div className="flex-1 min-h-0 relative overflow-hidden">
              <img
                alt="After — professional store"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                src={imgPicture21}
              />
            </div>

            {/* Caption */}
            <div className="flex flex-col gap-2 pt-4 shrink-0">
              {/* Badge */}
              <div
                className="flex items-center justify-center px-3 py-2 border border-[#d4d4d4] w-fit"
                style={{ background: "#ea1528" }}
              >
                <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "16.5px", color: "#fff", whiteSpace: "nowrap" }}>
                  After
                </p>
              </div>
              {/* Title */}
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "27px",
                  letterSpacing: "-0.18px",
                  color: "#0a0a0a",
                  whiteSpace: "nowrap",
                }}
              >
                Professional. Funded. Competing like a chain.
              </p>
              {/* Description */}
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "22.1px",
                  color: "#555",
                  maxWidth: "469px",
                }}
              >
                National contracts activated and promotional signage installed — all at no cost.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
