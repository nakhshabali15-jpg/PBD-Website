import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import vendorRebateImage from "figma:asset/2ea1facd6b3fb6633dfb2100f366f615400d3e01.png";
import promotionalFundingImage from "figma:asset/9f0f8d3cb1ad34e5370168234cf33728f17cae43.png";
import categoryManagementImage from "figma:asset/b8eb7919780a6fe788d7e5d52a99c1f42e142b00.png";
import merchandisingSupportImage from "figma:asset/f89765bdf996612cf7eeba1a421500ab09ecc433.png";
import distributorPromotionsImage from "figma:asset/e387e30ec66227070dba7cf16d9fe92a81067423.png";
import dedicatedSupportImage from "figma:asset/fac15b34fe20320dab4651c9c5cd0f284e045b64.png";

const benefits = [
  {
    title: "Vendor Rebate Programs",
    description:
      "Earn monthly rebates from national brands based on qualifying product sales.",
    image: vendorRebateImage,
  },
  {
    title: "Promotional Funding",
    description:
      "Access vendor-funded campaigns that drive traffic and increase basket size.",
    image: promotionalFundingImage,
  },
  {
    title: "Category Management",
    description:
      "Optimize product mix, pricing, and shelf placement to improve performance.",
    image: categoryManagementImage,
  },
  {
    title: "Merchandising Support",
    description:
      "Hands-on help with store layout, planograms, and product positioning.",
    image: merchandisingSupportImage,
  },
  {
    title: "Distributor Programs",
    description:
      "Participate in distributor-backed promotions and pricing across key categories.",
    image: distributorPromotionsImage,
  },
  {
    title: "Dedicated Support",
    description:
      "PBD coordinates everything — from program activation to tracking and payment distribution.",
    image: dedicatedSupportImage,
  },
];

export function WhatMembersReceiveSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    updateScrollButtons();
    container.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 400;
    const newScrollLeft =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#FAFAFA] py-16 md:py-20"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Label */}
        <p
          className="text-[#999] uppercase tracking-[0.15em] mb-6"
          style={{ fontSize: "0.7rem", fontWeight: 500 }}
        >
          What Members Receive
        </p>

        {/* Headline */}
        <motion.h2
          className="text-[#0a0a0a] max-w-[700px] mb-6"
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
          Everything your store needs to compete.
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-[#555] max-w-[700px] mb-10 md:mb-14"
          style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.7 }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          All managed through one coordinated program designed to improve performance, simplify operations, and drive consistent results.
        </motion.p>

        {/* Scrollable Cards Container with Gradient Fades */}
        <div className="relative">
          {/* Left Gradient Fade */}
          {canScrollLeft && (
            <div
              className="hidden lg:block absolute left-0 top-0 bottom-0 w-20 pointer-events-none z-10"
              style={{
                background: "linear-gradient(to right, #FAFAFA 0%, transparent 100%)",
              }}
            />
          )}

          {/* Right Gradient Fade */}
          {canScrollRight && (
            <div
              className="hidden lg:block absolute right-0 top-0 bottom-0 w-20 pointer-events-none z-10"
              style={{
                background: "linear-gradient(to left, #FAFAFA 0%, transparent 100%)",
              }}
            />
          )}

          {/* Left Arrow Button */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center bg-white border border-[#E0E0E0] hover:border-[#111642] hover:bg-[#FAFAFA] transition-all shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} className="text-[#0a0a0a]" />
            </button>
          )}

          {/* Right Arrow Button */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center bg-white border border-[#E0E0E0] hover:border-[#111642] hover:bg-[#FAFAFA] transition-all shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} className="text-[#0a0a0a]" />
            </button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto pb-4"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#E0E0E0 transparent",
            }}
          >
            <div className="flex gap-6" style={{ minWidth: "min-content" }}>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="flex-shrink-0"
                  style={{ width: "280px" }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  {/* Image */}
                  <div className="overflow-hidden mb-4 rounded-none">
                    <ImageWithFallback
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-[258px] object-cover"
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[#0a0a0a] mb-3"
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.3,
                    }}
                  >
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[#555]"
                    style={{
                      fontSize: "clamp(0.75rem, 1vw, 0.8125rem)",
                      fontWeight: 400,
                      lineHeight: 1.65,
                    }}
                  >
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator for Mobile */}
          <div className="lg:hidden flex items-center justify-center gap-2 mt-6">
            <div className="flex items-center gap-1.5">
              {benefits.map((_, index) => (
                <div
                  key={index}
                  className="w-1.5 h-1.5 rounded-full bg-[#E0E0E0]"
                />
              ))}
            </div>
            <span className="text-[#999] text-xs ml-2">Swipe to see more</span>
          </div>
        </div>
      </div>
    </section>
  );
}