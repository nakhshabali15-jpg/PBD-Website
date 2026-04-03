import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import capitalInvestmentImage from "figma:asset/4cce4569ea9311d16b02dfe55f2c542b0e13491e.png";
import storeEvaluationImage from "figma:asset/9dcbfcc12bee5a793d63cf2c12980d9f1f126ed7.png";
import categoryResetsImage from "figma:asset/ad929877d38f4114073a4f67ae3f2241d0cdcdc8.png";
import vendorActivationImage from "figma:asset/25d641be9f086163453e7c5a1e96818100a60816.png";
import consultancyImage from "figma:asset/17e7a379335502592f4c15274741b1e4222700a2.png";

const steps = [
  {
    title: "Capital investment",
    description: "PBD funds the store reset and program activation at no cost to you.",
    image: capitalInvestmentImage,
  },
  {
    title: "Store evaluation",
    description: "We identify gaps in your product mix, layout, and vendor coverage.",
    image: storeEvaluationImage,
  },
  {
    title: "Category resets",
    description: "Optimizing shelf space, product placement, and overall store flow.",
    image: categoryResetsImage,
  },
  {
    title: "Vendor activation",
    description: "Connecting your store to qualifying national vendor programs.",
    image: vendorActivationImage,
  },
  {
    title: "Hands-on consultancy",
    description: "The PBD team works in your store during the transition.",
    image: consultancyImage,
  },
];

export function JumpstartProgramSection() {
  const outerRef = useRef<HTMLDivElement>(null);
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isInView = useInView(outerRef, { once: true, margin: "-80px" });
  const [activeStep, setActiveStep] = useState(0);

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

  const progressPercent = (activeStep / (steps.length - 1)) * 100;
  const anchorPercents = steps.map((_, i) => (i / (steps.length - 1)) * 100);

  return (
    <div
      ref={outerRef}
      className="relative"
      style={{ height: `${steps.length * 100}vh` }}
    >
      {/* Sticky inner panel */}
      <div
        className="sticky top-0 h-screen overflow-hidden bg-[#FAFAFA] flex flex-col justify-center"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-10 lg:px-16 flex flex-col gap-[56px]">

          {/* Header */}
          <div className="flex flex-col gap-8">
            <p
              className="text-[#999] uppercase tracking-[0.15em]"
              style={{ fontSize: "0.7rem", fontWeight: 500 }}
            >
              The Jumpstart Program
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
              We invest in your store before you earn a single rebate.
            </motion.h2>
          </div>

          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

            {/* Left: progress track + steps */}
            <div className="flex-1 flex" style={{ gap: "42px" }}>
              {/* Vertical progress track */}
              <div className="relative flex-shrink-0" style={{ width: "2px" }}>
                <div className="absolute inset-0 bg-[#111642]/10" />
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
                <motion.div
                  className="absolute top-0 left-0 w-full bg-[#ea1528]"
                  animate={{ height: `${progressPercent}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
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
              <div className="flex-1 flex flex-col" style={{ gap: "clamp(35px, 6vh, 60px)" }}>
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

            {/* Right: image frame */}
            <div
              className="flex-1 overflow-hidden"
              style={{ height: "clamp(380px, 45vw, 540px)", alignSelf: "flex-start" }}
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

      {/* Sentinels */}
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
