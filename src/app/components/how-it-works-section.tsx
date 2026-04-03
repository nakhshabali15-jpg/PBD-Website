import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import step1Image from "figma:asset/d53d8c98d92bf4951a4fe6b032e083859b247ad5.png";
import step2Image from "figma:asset/f854561c8f7679840783f5d293116468ec50da59.png";
import step3Image from "figma:asset/0f505cce767ac3a8236f5ac06db5845284724c64.png";
import step4Image from "figma:asset/4fae2e2c85a6d15f382dbd189b9c54bb6a55d10f.png";

const steps = [
  {
    title: "Apply for Membership",
    description:
      "Independent gas stations, convenience stores, and truck stops apply to join the PBD network.",
    image: step1Image,
  },
  {
    title: "Complete the Jumpstart Program",
    description:
      "PBD performs a store review, resets key categories, and activates vendor programs and funding.",
    image: step2Image,
  },
  {
    title: "Activate Vendor Programs",
    description:
      "Your store is connected to PBD National vendor programs to enable on-invoice discounts, promotional funding, and merchandising support.",
    image: step3Image,
  },
  {
    title: "Earn Rebates & Grow Sales",
    description:
      "Stores receive vendor rebates and promotional funding while PBD continues to support merchandising, pricing, and program execution.",
    image: step4Image,
  },
];

export function HowItWorksSection() {
  const outerRef = useRef<HTMLDivElement>(null);
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isInView = useInView(outerRef, { once: true, margin: "-80px" });
  const [activeStep, setActiveStep] = useState(0);

  // IntersectionObserver: one sentinel per step, each 100vh tall stacked in the outer wrapper.
  // When a sentinel crosses 40% into view, that step becomes active.
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sentinelRefs.current.forEach((el, index) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveStep(index);
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Progress bar: fraction of steps completed
  const progressPercent = (activeStep / (steps.length - 1)) * 100;
  const anchorPercents = steps.map((_, i) => (i / (steps.length - 1)) * 100);

  return (
    // Outer wrapper — tall enough to scroll through all steps (1 step per 100vh)
    <div
      ref={outerRef}
      className="relative"
      style={{ height: `${steps.length * 100}vh` }}
    >
      {/* Sticky inner panel — pins to viewport while user scrolls through outer */}
      <div
        className="sticky top-0 h-screen overflow-hidden bg-white flex flex-col justify-center"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-10 lg:px-[80px] flex flex-col gap-[56px]">

          {/* Header */}
          <div className="flex flex-col gap-6">
            <p
              className="text-[#999] uppercase tracking-[0.15em]"
              style={{ fontSize: "11.2px", fontWeight: 500 }}
            >
              Our Process
            </p>
            <motion.h2
              className="text-[#0a0a0a] max-w-[700px]"
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
              Simple process. Serious results.
            </motion.h2>
          </div>

          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

            {/* Left: progress track + steps */}
            <div className="flex-1 flex" style={{ gap: "42px" }}>
              {/* Vertical progress track */}
              <div className="relative flex-shrink-0" style={{ width: "2px" }}>
                <div className="absolute inset-0 bg-[#111642]/10" />
                {/* Anchor dots */}
                {anchorPercents.map((pct, i) => (
                  <div
                    key={i}
                    className="absolute left-1/2 rounded-full transition-colors duration-300"
                    style={{
                      width: "5px",
                      height: "5px",
                      top: `${pct}%`,
                      transform: "translate(-50%, -50%)",
                      backgroundColor: activeStep >= i ? "#111642" : "rgba(17,22,66,0.2)",
                    }}
                  />
                ))}
                {/* Red fill */}
                <motion.div
                  className="absolute top-0 left-0 w-full bg-[#ea1528]"
                  animate={{ height: `${progressPercent}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                {/* Square indicator */}
                <motion.div
                  className="absolute"
                  animate={{ top: `${progressPercent}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#EA1528",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>

              {/* Step list */}
              <div className="flex-1 flex flex-col" style={{ gap: "clamp(40px, 7vh, 70px)" }}>
                {steps.map((step, index) => {
                  const isPassed = activeStep >= index;
                  return (
                    <motion.div
                      key={step.title}
                      animate={{ opacity: isPassed ? 1 : 0.3 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <div className="mb-1.5">
                        <span
                          className="text-[#111642]"
                          style={{
                            fontSize: "clamp(0.75rem, 1vw, 0.875rem)",
                            fontWeight: 500,
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {index + 1}.
                        </span>
                        <h3
                          className="text-[#0a0a0a] inline ml-2"
                          style={{
                            fontSize: "clamp(0.9375rem, 1.4vw, 1.125rem)",
                            fontWeight: 500,
                            letterSpacing: "-0.01em",
                            lineHeight: 1.3,
                          }}
                        >
                          {step.title}
                        </h3>
                      </div>
                      <p
                        className="text-[#555] max-w-[380px]"
                        style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.65 }}
                      >
                        {step.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right: image frame — stays fixed, image crossfades */}
            <div
              className="flex-1 overflow-hidden"
              style={{ height: "clamp(340px, 42vw, 480px)", alignSelf: "flex-start" }}
            >
              <div className="relative w-full h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  >
                    <ImageWithFallback
                      src={steps[activeStep].image}
                      alt={steps[activeStep].title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Invisible sentinels — one per step, stacked vertically in the outer wrapper.
          IntersectionObserver fires when each enters the viewport. */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {steps.map((_, index) => (
          <div
            key={index}
            ref={(el) => { sentinelRefs.current[index] = el; }}
            className="absolute w-full"
            style={{ height: "100vh", top: `${index * 100}vh` }}
          />
        ))}
      </div>
    </div>
  );
}
