import { useRef } from "react";
import { motion, useInView } from "motion/react";
import imgImageWithFallback from "figma:asset/aff8ae7a81a4030f5a4de2351a33a9f20d1a0151.png";

export function ProgramsResultsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="bg-[#111642] py-16 md:py-20"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Label */}
        <motion.p
          className="text-[#888] uppercase tracking-[0.15em] mb-6"
          style={{ fontSize: "0.7rem", fontWeight: 500 }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Results
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="text-white max-w-[520px] mb-10 md:mb-12"
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          Real results from stores that joined PBD
        </motion.h2>

        {/* Two-column layout: image left, content right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Image */}
          <motion.div
            className="relative overflow-hidden rounded-none"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <img
              src={imgImageWithFallback}
              alt="PBD Store Success"
              className="w-full aspect-[4/3] object-cover object-center"
              style={{ objectPosition: '50% 35%' }}
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            {/* Description */}
            <p
              className="text-[#d4d4d4] mb-10 md:mb-12"
              style={{
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: 1.7,
              }}
            >
              Performance driven by program execution, category resets, and consistent participation across vendor programs.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 px-[0px] pt-[177px] pb-[0px]">
              {/* Stat 1 */}
              <motion.div
                className="border-t border-[#292d55] pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <p
                  className="text-white mb-4"
                  style={{
                    fontSize: "clamp(48px, 6vw, 72px)",
                    fontWeight: 700,
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                  }}
                >
                  30%
                </p>
                <p
                  className="text-[#d4d4d4]"
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  Average increase in sales during<br />Jumpstart
                </p>
              </motion.div>

              {/* Stat 2 */}
              <motion.div
                className="border-t border-[#292d55] pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              >
                <p
                  className="text-white mb-4"
                  style={{
                    fontSize: "clamp(48px, 6vw, 72px)",
                    fontWeight: 700,
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                  }}
                >
                  2X–3X
                </p>
                <p
                  className="text-[#d4d4d4]"
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  Annual sales growth potential with full program execution
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}