import { ArrowRight } from "lucide-react";
import svgPaths from "../../imports/svg-3nnxji4s90";
import imgStoreCustomer from "figma:asset/2a560efaf8266ade3923e055b689c6554d0710f8.png";

export function HeroSection() {
  return (
    <section
      className="relative bg-[#111642] overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif", minHeight: "859px" }}
    >
      {/* Main compositional grid container - desktop only */}
      <div className="hidden lg:block relative w-full mx-auto" style={{ maxWidth: "1339px", height: "859px" }}>
        
        {/* Grid Lines Layer - subtle vertical and horizontal lines */}
        <div className="absolute left-0 top-[79px] w-full h-[780px] pointer-events-none">
          {/* Vertical grid lines - positions as percentages of 1339px width */}
          <div className="absolute top-0 bottom-0 w-[0.5px] bg-[#292d55]" style={{ left: "0%" }} />
          <div className="absolute top-0 bottom-0 w-[0.5px] bg-[#292d55]" style={{ left: "47.12%" }} /> {/* 631px / 1339px */}
          <div className="absolute top-0 bottom-0 w-[0.5px] bg-[#292d55]" style={{ left: "60.34%" }} /> {/* 808px / 1339px */}
          <div className="absolute top-0 bottom-0 w-[0.5px] bg-[#292d55]" style={{ left: "73.56%" }} /> {/* 985px / 1339px */}
          <div className="absolute top-0 bottom-0 w-[0.5px] bg-[#292d55]" style={{ left: "86.63%" }} /> {/* 1160px / 1339px */}
          <div className="absolute top-0 bottom-0 w-[0.5px] bg-[#292d55]" style={{ left: "100%" }} />
          
          {/* Horizontal grid lines - positions as percentages of 780px height */}
          <div className="absolute left-0 right-0 h-[0.5px] bg-[#292d55]" style={{ top: "0%" }} />
          <div className="absolute left-0 right-0 h-[0.5px] bg-[#292d55]" style={{ top: "11.45%" }} /> {/* 89px / 780px */}
          <div className="absolute left-0 right-0 h-[0.5px] bg-[#292d55]" style={{ top: "34.10%" }} /> {/* 266px / 780px */}
          <div className="absolute left-0 right-0 h-[0.5px] bg-[#292d55]" style={{ top: "56.67%" }} /> {/* 442px / 780px */}
          <div className="absolute left-0 right-0 h-[0.5px] bg-[#292d55]" style={{ top: "74.36%" }} /> {/* 580px / 780px */}
          <div className="absolute left-0 right-0 h-[0.5px] bg-[#292d55]" style={{ top: "92.44%" }} /> {/* 721px / 780px */}
          <div className="absolute left-0 right-0 h-[0.5px] bg-[#292d55]" style={{ top: "100%" }} />
        </div>

        {/* Decorative Blocks Layer - positioned using grid percentages */}
        <div className="absolute left-0 top-[79px] w-full h-[780px] pointer-events-none">
          {/* Top left red block - aligned to grid */}
          <div 
            className="absolute bg-[#ea1528] border-[#292d55] border-[0.5px] border-solid" 
            style={{ 
              left: "31.92%", // 427.41px / 1339px
              top: "0%",
              width: "15.28%", // 204.559px / 1339px
              height: "11.45%", // 89.371px / 780px
            }} 
          />
          
          {/* Top right empty block */}
          <div 
            className="absolute border-[#292d55] border-[0.5px] border-solid" 
            style={{ 
              left: "86.63%", // 1160.26px / 1339px
              top: "0%",
              width: "13.35%", // 178.741px / 1339px
              height: "11.45%", // 89.371px / 780px
            }} 
          />
          
          {/* Middle right red block with arrow */}
          <div 
            className="absolute bg-[#ea1528] border-[#292d55] border-[0.5px] border-solid" 
            style={{ 
              left: "86.63%", // 1160.26px / 1339px
              top: "11.20%", // 87.39px / 780px
              width: "13.35%", // 178.741px / 1339px
              height: "22.92%", // 178.741px / 780px
            }}
          >
            {/* White arrow inside red block */}
            <div 
              className="absolute flex items-center justify-center" 
              style={{
                left: "27.78%", // 49.65px / 178.741px
                top: "28.77%", // 51.43px / 178.741px
                width: "44.45%", // 79.44px / 178.741px
                height: "43.17%", // 77.171px / 178.741px
              }}
            >
              <div className="-rotate-90 scale-y-[-1]">
                <svg width="100%" height="100%" viewBox="0 0 77.1707 79.4405" fill="none" preserveAspectRatio="none">
                  <path d={svgPaths.p335d0e00} fill="white" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Center subtle red tint block */}
          <div 
            className="absolute bg-[rgba(234,21,40,0.09)]" 
            style={{ 
              left: "47.12%", // 631px / 1339px
              top: "11.41%", // 89px / 780px
              width: "13.22%", // 177px / 1339px
              height: "22.69%", // 177px / 780px
            }} 
          />
          
          {/* Bottom right empty block */}
          <div 
            className="absolute border-[#292d55] border-[0.5px] border-solid" 
            style={{ 
              left: "60.27%", // 806.93px / 1339px
              top: "33.78%", // 263.51px / 780px
              width: "13.37%", // 179.038px / 1339px
              height: "22.95%", // 179.038px / 780px
            }} 
          />
          
          {/* Bottom far right empty block */}
          <div 
            className="absolute border-[#292d55] border-[0.5px] border-solid" 
            style={{ 
              left: "86.62%", // 1159.95px / 1339px
              top: "33.78%", // 263.51px / 780px
              width: "13.37%", // 179.038px / 1339px
              height: "22.87%", // 178.407px / 780px
            }} 
          />
        </div>

        {/* Content Layer - positioned using grid percentages */}
        <div className="absolute left-0 top-[79px] w-full h-[780px]">
          
          {/* Main headline and CTA - vertically centered left */}
          <div
            className="absolute flex flex-col gap-[45px]"
            style={{
              left: "80px",
              top: "calc(50% + 111px)",
              transform: "translateY(-50%)",
              width: "606px",
            }}
          >
            {/* Eyebrow text */}
            <p
              className="text-white/40"
              style={{
                fontSize: "39px",
                fontWeight: 400,
                letterSpacing: "-3.92px",
                lineHeight: "67.2px",
                width: "578px",
              }}
            >
              Power Buying Dealers
            </p>

            {/* Headline + Subtitle group */}
            <div className="flex flex-col gap-[8px]">
              {/* Main Headline */}
              <h1
                className="text-white"
                style={{
                  fontSize: "56px",
                  fontWeight: 400,
                  lineHeight: "67.2px",
                  letterSpacing: "-3.92px",
                  width: "606px",
                }}
              >
                A national retail network for independent operators
              </h1>

            </div>

            {/* CTA Button */}
            <a
              href="#"
              className="inline-flex items-center gap-[22px] bg-white text-[#0a0a0a] px-[24px] py-[12px] hover:bg-[#EA1528] hover:text-white transition-all w-fit"
              style={{ fontSize: "14px", fontWeight: 500 }}
            >
              Join the Network
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Store image - positioned in grid */}
          <div 
            className="absolute" 
            style={{ 
              left: "60.42%", // 809px / 1339px
              top: "34.10%", // 266px / 780px
              width: "26.36%", // 353px / 1339px
              height: "40.26%", // 314px / 780px
            }}
          >
            <img
              src={imgStoreCustomer}
              alt="Woman shopping in convenience store"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Caption text below image */}
          <p 
            className="absolute text-[#d4d4d4]"
            style={{ 
              left: "60.27%", // 807px / 1339px
              top: "77.18%", // 602px / 780px
              width: "26.51%", // 355px / 1339px
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "22px",
              letterSpacing: "-0.8px",
            }}
          >
            Helping independent convenience stores, gas stations, and truck stops operate with the programs, funding, and support typically reserved for large chains.
          </p>
        </div>

        {/* Navbar - positioned at top */}
        <div className="absolute left-0 top-0 w-full h-[79px] px-6 md:px-10 lg:px-16">
          {/* Navbar content stays as is - not modifying per user request */}
        </div>
      </div>

      {/* Mobile/tablet view */}
      <div className="lg:hidden relative z-10 px-6 md:px-10 py-20" style={{ paddingTop: "calc(79px + 48px)" }}>
        <div className="flex flex-col gap-8">
          {/* Eyebrow */}
          <p className="text-white/40 text-[24px] md:text-[32px] font-normal" style={{ letterSpacing: "-2px", lineHeight: "1.4" }}>
            Power Buying Dealers
          </p>

          {/* Headline + Subtitle */}
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-[36px] md:text-[48px] leading-[1.05] tracking-[-0.03em] font-normal">
              A national retail network for independent operators
            </h1>
            <p className="text-[#A3A3A3] text-[14px] md:text-[16px] leading-[22px] font-normal" style={{ letterSpacing: "-0.8px" }}>
              Helping independent convenience stores, gas stations, and truck stops operate with the programs, funding, and support typically reserved for large chains.
            </p>
          </div>

          {/* CTA Button */}
          <a
            href="#"
            className="inline-flex items-center gap-[22px] bg-white text-[#0a0a0a] px-[24px] py-[12px] hover:bg-[#EA1528] hover:text-white transition-all w-fit"
            style={{ fontSize: "14px", fontWeight: 500 }}
          >
            Join the Network
            <ArrowRight size={16} />
          </a>

          {/* Store Image */}
          <div className="w-full max-w-[353px]">
            <div className="w-full aspect-[353/314] mb-5">
              <img
                src={imgStoreCustomer}
                alt="Woman shopping in convenience store"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[#d4d4d4] text-[16px] leading-[22px] font-normal" style={{ letterSpacing: "-0.8px" }}>
              Giving independent C-store owners the marketing support that national chains rely on, at no cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}