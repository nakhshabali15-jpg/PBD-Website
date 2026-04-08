import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { InfiniteSlider } from "./ui/infinite-slider";
import CocaColaLogoLogo from "../../imports/CocaColaLogoLogo";
import PepsiLogo from "../../imports/PepsiLogo";
import coreMarkImg from "figma:asset/76ae85636fb2e8ca4563996d77720afdc1ab84bb.png";
import farmerBrothersImg from "figma:asset/d5513c3625609331d9b0a53c18b8e0e4b9796dd7.png";
import monsterEnergyImg from "figma:asset/02b6b1430d604c3e159615c7ea356acbfb8d6d36.png";
import logo1775 from "../../assets/logo-1775.svg";
import logo1776 from "../../assets/logo-1776.svg";
import logo1777 from "../../assets/logo-1777.svg";
import logo1780 from "../../assets/logo-1780.svg";

export function LogoCloudSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      className="bg-[#FAFAFA]"
      style={{ fontFamily: "'Inter', sans-serif", padding: "80px 0" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px]">
        {/* "Trusted Brands Trust Us" Tag */}
        <motion.p
          className="text-center text-[#999] uppercase tracking-[0.15em] mb-[56px]"
          style={{ fontSize: "11.2px", fontWeight: 500 }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Trusted by Leading Brands
        </motion.p>

        {/* Logo slider */}
        <motion.div
          className="overflow-hidden py-3"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
        >
          <InfiniteSlider gap={80} reverse duration={25} durationOnHover={50}>
            {/* Core-Mark */}
            <div className="flex items-center shrink-0">
              <img
                src={coreMarkImg}
                alt="Core-Mark"
                className="h-8 md:h-10 w-auto object-contain pointer-events-none select-none opacity-70"
              />
            </div>

            {/* Coca-Cola */}
            <div className="flex items-center shrink-0 h-8 md:h-10 w-[100px] md:w-[120px] relative">
              <CocaColaLogoLogo />
            </div>

            {/* Pepsi */}
            <div className="flex items-center shrink-0 h-8 md:h-10 w-[90px] md:w-[110px] relative">
              <PepsiLogo />
            </div>

            {/* Farmer Brothers */}
            <div className="flex items-center shrink-0">
              <img
                src={farmerBrothersImg}
                alt="Farmer Brothers"
                className="h-8 md:h-10 w-auto object-contain pointer-events-none select-none opacity-70"
              />
            </div>

            {/* Monster Energy */}
            <div className="flex items-center shrink-0">
              <img
                src={monsterEnergyImg}
                alt="Monster Energy"
                className="h-8 md:h-10 w-auto object-contain pointer-events-none select-none opacity-70"
              />
            </div>

            {/* Logo 1775 */}
            <div className="flex items-center shrink-0">
              <img
                src={logo1775}
                alt="Brand Partner"
                className="h-8 md:h-10 w-auto object-contain pointer-events-none select-none opacity-70"
              />
            </div>

            {/* Logo 1776 */}
            <div className="flex items-center shrink-0">
              <img
                src={logo1776}
                alt="Brand Partner"
                className="h-8 md:h-10 w-auto object-contain pointer-events-none select-none opacity-70"
              />
            </div>

            {/* Logo 1777 */}
            <div className="flex items-center shrink-0">
              <img
                src={logo1777}
                alt="Brand Partner"
                className="h-8 md:h-10 w-auto object-contain pointer-events-none select-none opacity-70"
              />
            </div>

            {/* Logo 1780 */}
            <div className="flex items-center shrink-0">
              <img
                src={logo1780}
                alt="Brand Partner"
                className="h-8 md:h-10 w-auto object-contain pointer-events-none select-none opacity-70"
              />
            </div>
          </InfiniteSlider>
        </motion.div>
      </div>
    </section>
  );
}