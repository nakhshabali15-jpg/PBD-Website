import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";

// One unique image per step — from Figma
const imgImage1736 = "https://www.figma.com/api/mcp/asset/ae733419-1482-414c-ba81-e2e2ca79ae23";
const imgImage1737 = "https://www.figma.com/api/mcp/asset/89da0fc2-6d44-4205-af50-c53bbe2e0ed1";
const imgImage1738 = "https://www.figma.com/api/mcp/asset/5309b3e7-e1fa-4b6c-ae86-e2eb944abceb";
const imgImage1739 = "https://www.figma.com/api/mcp/asset/75a3d9ba-3f66-4af8-80b8-e505b9203181";

const steps = [
  {
    step: "01",
    title: "Apply to Join",
    description: "Submit your store information and we review your location, size, and product mix.",
    tags: ["Application", "Store review"],
    image: imgImage1736,
  },
  {
    step: "02",
    title: "Evaluate the Store",
    description: "We assess your categories, pricing, and vendor participation to identify opportunities.",
    tags: ["Category review", "Vendor assessment"],
    image: imgImage1737,
  },
  {
    step: "03",
    title: "Activate and Implement",
    description: "Vendor programs are activated, pricing is aligned, and your store is prepared for execution.",
    tags: ["Vendor activation", "Pricing alignment"],
    image: imgImage1738,
  },
  {
    step: "04",
    title: "Generate Results",
    description: "Your store begins producing rebates, improving pricing, and driving performance across key categories.",
    tags: ["Monthly rebates", "Performance"],
    image: imgImage1739,
  },
];

export function HowProgramsWorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      ref={sectionRef}
      className="bg-[#111642]"
      style={{ fontFamily: "'Inter', sans-serif", padding: "80px 0" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] flex flex-col gap-[56px]">

        {/* Header */}
        <div className="flex flex-col gap-4">
          <motion.p
            className="text-[#888] uppercase tracking-[1.68px]"
            style={{ fontSize: "11.2px", fontWeight: 500, lineHeight: "16.8px" }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            THE PROCESS
          </motion.p>
          <motion.p
            className="text-white"
            style={{
              fontSize: "clamp(32px, 3.5vw, 48px)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-1.44px",
              maxWidth: "520px",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            How our programs work
          </motion.p>
        </div>

        {/* Accordion + Image */}
        <div className="flex flex-col lg:flex-row gap-[64px] items-start">

          {/* Left: accordion steps */}
          <div className="flex flex-col flex-1 min-w-0">
            {steps.map((step, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div
                  key={step.step}
                  className="border-t border-[#333]"
                  style={{ borderBottom: index === steps.length - 1 ? "1px solid #333" : undefined }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease: "easeOut" }}
                >
                  {/* Row header — always visible */}
                  <button
                    className="w-full flex items-center gap-3 cursor-pointer"
                    style={{ height: "62.4px" }}
                    onClick={() => setActiveIndex(index)}
                  >
                    {/* Dot */}
                    <span
                      className="shrink-0 size-[6px] transition-colors"
                      style={{ background: isActive ? "#ea1528" : "#666" }}
                    />
                    {/* Step label */}
                    <span
                      className="transition-colors"
                      style={{
                        fontSize: "16px",
                        fontWeight: 400,
                        lineHeight: "22.4px",
                        letterSpacing: "-0.16px",
                        whiteSpace: "nowrap",
                        color: isActive ? "#fff" : "#aaa",
                      }}
                    >
                      {step.step}.{step.title}
                    </span>
                  </button>

                  {/* Expanded content */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pl-[18px] pb-5 flex flex-col gap-[16px]">
                          {/* Description */}
                          <p
                            className="text-[#d4d4d4]"
                            style={{
                              fontSize: "16px",
                              fontWeight: 400,
                              lineHeight: "27.2px",
                              maxWidth: "416px",
                            }}
                          >
                            {step.description}
                          </p>
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {step.tags.map((tag) => (
                              <span
                                key={tag}
                                className="border border-[#d4d4d4] text-[#d4d4d4] px-3 py-1"
                                style={{ fontSize: "11px", fontWeight: 400, lineHeight: "16.5px", whiteSpace: "nowrap" }}
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

          {/* Right: image — switches per active step */}
          <motion.div
            className="flex-1 min-w-0 overflow-hidden sticky top-24 self-start"
            style={{ height: "440px" }}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={steps[activeIndex].image}
                alt={steps[activeIndex].title}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
