import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import applyImage from "figma:asset/7f8e78a0b6f2149e9344f681143d2c8df8e99fbb.png";
import qualifyImage from "figma:asset/089f3a5b94a579bae9fff7497c84ac1bf812282d.png";
import investImage from "figma:asset/32135403af1c21277ca6f79a8751b845837b79d9.png";
import earningImage from "figma:asset/0dd055c7d8ac7bc62f274845ec032161e5d5378a.png";

const steps = [
  {
    title: "Apply to join",
    description:
      "Submit your application. We review your store's location, size, and product categories to determine fit.",
    tags: ["Application", "Store review"],
    step: "01",
    image: applyImage,
  },
  {
    title: "Get qualified",
    description:
      "PBD evaluates whether your store has the volume potential to benefit from national vendor programs. Not every store qualifies — by design.",
    tags: ["Volume evaluation", "Qualification"],
    step: "02",
    image: qualifyImage,
  },
  {
    title: "PBD invests in you",
    description:
      "Qualifying stores enter Jumpstart. PBD invests capital in your store — resetting categories, activating programs, and providing hands-on support.",
    tags: ["Jumpstart Program", "Capital investment", "Support"],
    step: "03",
    image: investImage,
  },
  {
    title: "Start earning",
    description:
      "Your store participates in vendor programs and earns monthly rebates. PBD tracks everything and deposits payments directly to you.",
    tags: ["Monthly rebates", "Direct payment"],
    step: "04",
    image: earningImage,
  },
];

// ─── Desktop: sticky scroll-driven version ────────────────────────────────────
function ProcessSectionDesktop() {
  const [activeIndex, setActiveIndex] = useState(0);
  // One ref per step sentinel div
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Each sentinel is a full-viewport-height div. When it enters the viewport
    // (crossing the top 20% threshold) we mark that step as active.
    const observers: IntersectionObserver[] = [];

    sentinelRefs.current.forEach((el, index) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        {
          // Fire when the sentinel is 40% visible — feels natural mid-scroll
          threshold: 0.4,
        }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    /*
     * Outer wrapper — 400vh tall so the page has enough scroll room.
     * position: relative is required so the sticky child has an anchor.
     */
    <div className="relative" style={{ height: `${steps.length * 100}vh` }}>
      {/* ── Sticky UI panel ─────────────────────────────────────────────── */}
      <div
        className="sticky top-0 h-screen bg-white flex flex-col justify-center overflow-hidden"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="max-w-[1440px] mx-auto w-full px-10 lg:px-16">
          {/* Label */}
          <p
            className="text-[#888] uppercase tracking-[0.15em] mb-6"
            style={{ fontSize: "0.7rem", fontWeight: 500 }}
          >
            The Process
          </p>

          {/* Headline */}
          <h2
            className="text-[#111642] max-w-[520px] mb-10"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            From application to earning rebates
          </h2>

          {/* Two-column layout */}
          <div className="grid grid-cols-2 gap-16 items-start">
            {/* Left: step list */}
            <div className="flex flex-col">
              {steps.map((step, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={step.title}
                    className="border-t border-[#e5e5e5] last:border-b"
                  >
                    <div className="flex items-start gap-3 py-5">
                      {/* Red / grey dot */}
                      <span
                        className="mt-[7px] w-[6px] h-[6px] shrink-0 transition-colors duration-300"
                        style={{
                          backgroundColor: isActive ? "#ea1528" : "#ccc",
                        }}
                      />
                      <div className="flex flex-col gap-3 w-full">
                        {/* Title */}
                        <span
                          className="transition-colors duration-300"
                          style={{
                            fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
                            fontWeight: 400,
                            letterSpacing: "-0.01em",
                            lineHeight: 1.4,
                            color: isActive ? "#111642" : "#aaa",
                          }}
                        >
                          <span
                            className="mr-2 transition-colors duration-300"
                            style={{ color: isActive ? "#111642" : "#ccc" }}
                          >
                            {step.step}.
                          </span>
                          {step.title}
                        </span>

                        {/* Description + tags — expand/collapse with active step */}
                        <motion.div
                          animate={{
                            opacity: isActive ? 1 : 0,
                            height: isActive ? "auto" : 0,
                          }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p
                            className="text-[#444] mb-4 max-w-[440px]"
                            style={{
                              fontSize: "16px",
                              fontWeight: 400,
                              lineHeight: 1.7,
                            }}
                          >
                            {step.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {step.tags.map((tag) => (
                              <span
                                key={tag}
                                className="border border-[#d4d4d4] text-[#444] px-3 py-1"
                                style={{
                                  fontSize: "0.6875rem",
                                  fontWeight: 400,
                                  lineHeight: 1.5,
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: image frame — frame fixed, image crossfades */}
            <div className="relative overflow-hidden aspect-[4/3]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <ImageWithFallback
                    src={steps[activeIndex].image}
                    alt={steps[activeIndex].title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* ── Invisible sentinel divs — one per step ──────────────────────── */}
      {/*
       * These are stacked on top of the sticky panel (pointer-events-none so
       * they don't block clicks). As each one scrolls into view, the
       * IntersectionObserver fires and updates activeIndex.
       */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {steps.map((_, index) => (
          <div
            key={index}
            ref={(el) => { sentinelRefs.current[index] = el; }}
            style={{ height: "100vh", top: `${index * 100}vh` }}
            className="absolute w-full"
          />
        ))}
      </div>
    </div>
  );
}

// ─── Mobile: click-driven accordion (unchanged) ───────────────────────────────
function ProcessSectionMobile() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = steps[activeIndex >= 0 ? activeIndex : 0];

  return (
    <section
      className="bg-white py-16"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <p
          className="text-[#888] uppercase tracking-[0.15em] mb-6"
          style={{ fontSize: "0.7rem", fontWeight: 500 }}
        >
          The Process
        </p>

        <h2
          className="text-[#111642] max-w-[520px] mb-10"
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
        >
          From application to earning rebates
        </h2>

        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3] mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <ImageWithFallback
                src={activeStep.image}
                alt={activeStep.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Accordion steps */}
        <div className="flex flex-col">
          {steps.map((step, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={step.title}
                className="border-t border-[#e5e5e5] last:border-b"
              >
                <button
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                  className="w-full flex items-center gap-3 py-5 text-left cursor-pointer group"
                >
                  <span
                    className={`w-[6px] h-[6px] shrink-0 transition-colors rounded-[0px] ${
                      isActive ? "bg-[#ea1528]" : "bg-[#ccc]"
                    }`}
                  />
                  <span
                    className={`transition-colors ${
                      isActive ? "text-[#111642]" : "text-[#666]"
                    } group-hover:text-[#111642]`}
                    style={{
                      fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
                      fontWeight: 400,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.4,
                    }}
                  >
                    <span
                      className={`mr-2 ${isActive ? "text-[#111642]" : "text-[#888]"}`}
                    >
                      {step.step}.
                    </span>
                    {step.title}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-5 pl-[18px]">
                        <p
                          className="text-[#444] mb-4 max-w-[440px]"
                          style={{
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: 1.7,
                          }}
                        >
                          {step.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {step.tags.map((tag) => (
                            <span
                              key={tag}
                              className="border border-[#d4d4d4] text-[#444] px-3 py-1"
                              style={{
                                fontSize: "0.6875rem",
                                fontWeight: 400,
                                lineHeight: 1.5,
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export function ProgramsProcessSection() {
  return (
    <>
      <div className="hidden lg:block">
        <ProcessSectionDesktop />
      </div>
      <div className="lg:hidden">
        <ProcessSectionMobile />
      </div>
    </>
  );
}
