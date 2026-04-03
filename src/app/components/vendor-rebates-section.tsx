import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const storeImage = "https://www.figma.com/api/mcp/asset/c8141e6d-977d-4298-89f4-0c42adb44c42";

const phases = [
  {
    label: "FIRST 30 DAYS",
    title: "You sell qualifying products",
    bullets: [
      "Migrating pricing to national programs",
      "Tracking volume baselines",
      "Accruing rebate payments by participation level",
      "Setting up scan data & loyalty reporting",
    ],
    image: storeImage,
  },
  {
    label: "NEXT 30 DAYS",
    title: "Assess & Order",
    bullets: [
      "Onsite assessment by PBD consultant",
      "Competitive pricing environment analysis",
      "Equipment ordering and installation",
      "Vendor program confirmation",
    ],
    image: storeImage,
  },
  {
    label: "NEXT 30 DAYS",
    title: "Reset & Implement",
    bullets: [
      "Hands-on consulting in your store",
      "Full category implementation",
      "Store reset — beverage, tobacco, snacks, GM",
      "Promotional signage installed",
    ],
    image: storeImage,
  },
  {
    label: "WHATS NEXT",
    title: "Drive & Retrain",
    bullets: [
      "Aggressive promotions go live",
      "Deals designed to retrain customer behavior",
      "Drive new foot traffic through vendor campaigns",
      "Monthly rebate payments begin",
    ],
    image: storeImage,
  },
];

export function VendorRebatesSection() {
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

  const progressPercent = (activeStep / (phases.length - 1)) * 100;
  const anchorPercents = phases.map((_, i) => (i / (phases.length - 1)) * 100);

  return (
    <div
      ref={outerRef}
      className="relative"
      style={{ height: `${phases.length * 100}vh` }}
    >
      {/* Sticky inner panel */}
      <div
        className="sticky top-0 h-screen overflow-hidden bg-[#FAFAFA] flex flex-col justify-center"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-10 lg:px-[80px] flex flex-col gap-[56px]">

          {/* Header */}
          <div className="flex flex-col gap-6">
            <p
              className="text-[#999] uppercase tracking-[1.68px]"
              style={{ fontSize: "11.2px", fontWeight: 500 }}
            >
              THE JUMPSTART PROGRAM
            </p>
            <motion.h2
              className="text-[#0a0a0a]"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                maxWidth: "600px",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              90 days to a fundamentally better store.
            </motion.h2>
          </div>

          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

            {/* Left: progress track + phase steps */}
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

              {/* Phase steps */}
              <div className="flex-1 flex flex-col" style={{ gap: "clamp(40px, 7vh, 70px)" }}>
                {phases.map((phase, index) => {
                  const isPassed = activeStep >= index;
                  return (
                    <motion.div
                      key={phase.title}
                      className="flex flex-col gap-[8px]"
                      animate={{ opacity: isPassed ? 1 : 0.3 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <p
                        className="uppercase tracking-[1.68px]"
                        style={{
                          fontSize: "12px",
                          fontWeight: 600,
                          lineHeight: "16.8px",
                          color: isPassed ? "#ea1528" : "#a3a3a3",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {phase.label}
                      </p>
                      <h3
                        className="text-[#0a0a0a]"
                        style={{
                          fontSize: "18px",
                          fontWeight: 500,
                          lineHeight: "23.4px",
                          letterSpacing: "-0.18px",
                        }}
                      >
                        {phase.title}
                      </h3>
                      <ul
                        className="list-disc"
                        style={{
                          fontSize: "14px",
                          fontWeight: 400,
                          color: "#737373",
                          paddingLeft: "21px",
                        }}
                      >
                        {phase.bullets.map((b) => (
                          <li key={b} style={{ lineHeight: "26.4px" }}>{b}</li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right: image frame */}
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
                      src={phases[activeStep].image}
                      alt={phases[activeStep].title}
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
        {phases.map((_, index) => (
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
