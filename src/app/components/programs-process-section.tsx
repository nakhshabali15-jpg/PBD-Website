import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
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

export function ProgramsProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const activeStep = steps[activeIndex >= 0 ? activeIndex : 0];

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 md:py-20"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Label */}
        <p
          className="text-[#888] uppercase tracking-[0.15em] mb-6"
          style={{ fontSize: "0.7rem", fontWeight: 500 }}
        >
          The Process
        </p>

        {/* Top Row: Headline left */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10 md:mb-14">
          <motion.h2
            className="text-[#111642] max-w-[520px]"
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
            From application to earning rebates
          </motion.h2>
        </div>

        {/* Bottom Row: Accordion left + Image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Column: Accordion List */}
          <div className="flex flex-col">
            {steps.map((step, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div
                  key={step.title}
                  className="border-t border-[#e5e5e5] last:border-b"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.08,
                    ease: "easeOut",
                  }}
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
                      <span className={`mr-2 ${isActive ? "text-[#111642]" : "text-[#888]"}`}>{step.step}.</span>
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
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Image */}
          <motion.div
            className="relative overflow-hidden rounded-none sticky top-24 self-start aspect-[4/3]"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="h-full"
              >
                <ImageWithFallback
                  src={activeStep.image}
                  alt={activeStep.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
