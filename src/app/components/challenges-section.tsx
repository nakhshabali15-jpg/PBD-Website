import { useRef } from "react";
import { motion, useInView } from "motion/react";

// Figma assets
const imgProperty11 = "https://www.figma.com/api/mcp/asset/f12a3b16-9296-4fee-8492-e1fba0f1234c";
const imgVector     = "https://www.figma.com/api/mcp/asset/dd937c49-9f42-408c-ad6d-e96bc5bfa7bd";
const imgVector1    = "https://www.figma.com/api/mcp/asset/4a96604b-d97d-424c-9975-c5fc2678b63b";
const imgVector2    = "https://www.figma.com/api/mcp/asset/9ae70c43-2201-41ae-9495-3d9545437ee2";
const imgVector3    = "https://www.figma.com/api/mcp/asset/4123c946-376f-4043-9e9b-72dc7b314b2c";
const imgVector4    = "https://www.figma.com/api/mcp/asset/db96aab4-cd67-40b0-bd37-99c97cbcb919";
const imgVector5    = "https://www.figma.com/api/mcp/asset/c9437b9e-1679-4dae-a112-49122279e907";
const imgVector6    = "https://www.figma.com/api/mcp/asset/c3b532df-343b-48ba-a642-10aea53a3dda";
const imgVector7    = "https://www.figma.com/api/mcp/asset/53b922b4-8d0b-4bae-9d36-583845c68562";
const imgVector8    = "https://www.figma.com/api/mcp/asset/fd497a0b-f5a1-4893-9200-a93baf20ccee";
const imgVector9    = "https://www.figma.com/api/mcp/asset/ab351783-233c-4523-a0de-bce6755844e3";
const imgVector10   = "https://www.figma.com/api/mcp/asset/56d7b72d-c3c9-4cea-b5ce-1887bc29f963";
const imgVector11   = "https://www.figma.com/api/mcp/asset/df6f6a6f-7b17-4a3b-a7c0-fa08612a65e7";
const imgFrame      = "https://www.figma.com/api/mcp/asset/461a912a-2640-44e9-8dfd-41cff46acbf0";

// ─── Icon component (mirrors Figma Frame variants) ───────────────────────────
type IconVariant = "1" | "2" | "3";

function ChallengeIcon({ variant = "1" }: { variant?: IconVariant }) {
  const is1Or2 = variant === "1" || variant === "2";
  const is2 = variant === "2";
  const is3 = variant === "3";

  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <img alt="" className="absolute block max-w-none size-full" src={imgProperty11} />
      {is1Or2 && (
        <>
          <div
            className={`absolute ${is2 ? "inset-[54.53%_18.75%_15.63%_18.75%]" : "bottom-[65.63%] left-1/2 right-1/2 top-[28.13%]"}`}
          >
            <div className={`absolute ${is2 ? "inset-[-10.47%_-5%]" : "inset-[-50%_-1px]"}`}>
              <img alt="" className="block max-w-none size-full" src={is2 ? imgVector3 : imgVector} />
            </div>
          </div>
          <div
            className={`absolute ${is2 ? "inset-[15.63%_12.5%_62.5%_12.5%]" : "bottom-[28.13%] left-1/2 right-1/2 top-[65.63%]"}`}
          >
            <div className={`absolute ${is2 ? "inset-[-14.29%_-4.17%]" : "inset-[-50%_-1px]"}`}>
              <img alt="" className="block max-w-none size-full" src={is2 ? imgVector4 : imgVector} />
            </div>
          </div>
          <div
            className={`absolute ${is2 ? "inset-[37.5%_62.5%_43.75%_12.5%]" : "inset-[12.5%]"}`}
          >
            <div className={`absolute ${is2 ? "inset-[-16.67%_-12.5%]" : "inset-[-4.17%]"}`}>
              <img alt="" className="block max-w-none size-full" src={is2 ? imgVector5 : imgVector1} />
            </div>
          </div>
          <div
            className={`absolute ${is2 ? "inset-[37.5%_37.5%_43.75%_37.5%]" : "inset-[34.38%_37.5%]"}`}
          >
            <div className={`absolute ${is2 ? "inset-[-16.67%_-12.5%]" : "inset-[-10%_-12.5%]"}`}>
              <img alt="" className="block max-w-none size-full" src={is2 ? imgVector6 : imgVector2} />
            </div>
          </div>
        </>
      )}
      {is2 && (
        <div className="absolute inset-[37.5%_12.5%_43.75%_62.5%]">
          <div className="absolute inset-[-16.67%_-12.5%]">
            <img alt="" className="block max-w-none size-full" src={imgVector7} />
          </div>
        </div>
      )}
      {is3 && (
        <>
          <div className="absolute flex inset-[31.25%_6.25%_18.75%_62.5%] items-center justify-center">
            <div className="flex-none h-[10px] rotate-90 w-[16px]">
              <div className="relative size-full">
                <div className="absolute inset-[-10%_-6.25%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector8} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[18.75%] left-[34.38%] right-1/2 top-[81.25%]">
            <div className="absolute inset-[-1px_-20%]">
              <img alt="" className="block max-w-none size-full" src={imgVector9} />
            </div>
          </div>
          <div className="absolute inset-[18.75%_21.88%_31.25%_9.38%]">
            <div className="absolute inset-[-6.25%_-4.55%]">
              <img alt="" className="block max-w-none size-full" src={imgVector10} />
            </div>
          </div>
          <div className="absolute bottom-[56.25%] left-3/4 right-[18.75%] top-[43.75%]">
            <div className="absolute inset-[-1px_-50%]">
              <img alt="" className="block max-w-none size-full" src={imgVector11} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// ─── Single card ─────────────────────────────────────────────────────────────
function ChallengeCard({
  icon,
  title,
  bodyRegular,
  bodyItalic,
  solution,
  delay,
  isInView,
}: {
  icon: IconVariant;
  title: string;
  bodyRegular: string;
  bodyItalic?: string;
  solution: string;
  delay: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      className="flex flex-1 gap-8 items-start px-3 py-4 min-w-0"
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {/* Icon */}
      <ChallengeIcon variant={icon} />

      {/* Content */}
      <div className="flex flex-col gap-3 flex-1 min-w-0">
        {/* Title */}
        <p
          className="text-[#000]"
          style={{ fontSize: "18px", fontWeight: 500, lineHeight: "normal", letterSpacing: "-0.18px" }}
        >
          {title}
        </p>

        {/* Body */}
        <p
          className="text-[#737373]"
          style={{ fontSize: "16px", fontWeight: 400, lineHeight: "23px", letterSpacing: "-0.18px" }}
        >
          {bodyRegular}
          {bodyItalic && <em className="text-[#737373]">{bodyItalic}</em>}
        </p>

        {/* Solution row */}
        <div className="flex gap-2 items-start py-1">
          <div className="relative shrink-0 size-[18px]">
            <img alt="" className="absolute block max-w-none size-full" src={imgFrame} />
          </div>
          <p
            className="text-[#0e1235]"
            style={{ fontSize: "16px", fontWeight: 400, lineHeight: "23px", letterSpacing: "-0.18px" }}
          >
            {solution}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Divider line (matches imgDiv — 1px border) ──────────────────────────────
function Divider() {
  return <div className="w-full h-px bg-[#E5E5E5] shrink-0" />;
}

// ─── Main section ────────────────────────────────────────────────────────────
export function ChallengesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      className="bg-white"
      style={{ fontFamily: "'Inter', sans-serif", padding: "80px 0" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] flex flex-col gap-[56px]">

        {/* Header */}
        <div className="flex flex-col gap-6">
          <motion.p
            className="text-[#888] uppercase tracking-[1.68px]"
            style={{ fontSize: "11.2px", fontWeight: 500, lineHeight: "16.8px" }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            CHALLENGES
          </motion.p>
          <motion.p
            className="text-[#111642]"
            style={{
              fontSize: "48px",
              fontWeight: 400,
              lineHeight: "52.8px",
              letterSpacing: "-1.44px",
              maxWidth: "856px",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            These are the exact problems independent C-store face every day.
          </motion.p>
        </div>

        {/* Card grid */}
        <div className="flex flex-col gap-6">
          {/* Divider above row 1 */}
          <Divider />

          {/* Row 1 */}
          <div className="flex flex-col sm:flex-row gap-0 sm:gap-[56px] items-start">
            <ChallengeCard
              icon="1"
              title="Pricing and rebate disadvantage"
              bodyRegular="Independent stores don't have access to national pricing, rebates, or promotional programs"
              solution="PBD connects your store to national programs typically reserved for chains"
              delay={0.1}
              isInView={isInView}
            />
            <ChallengeCard
              icon="3"
              title="No structured execution"
              bodyRegular="There's no consistent plan for resets, promotions, or category management. Changes happen, but not in a coordinated way that drives performance."
              solution="PBD brings structure to execution for program rollout across your store"
              delay={0.18}
              isInView={isInView}
            />
          </div>

          {/* Divider between rows */}
          <Divider />

          {/* Row 2 */}
          <div className="flex flex-col sm:flex-row gap-0 sm:gap-[56px] items-start">
            <ChallengeCard
              icon="2"
              title="Store falls behind competition"
              bodyRegular="Chains constantly update signage, promotions, and category presentation. Independent stores fall behind, and customers notice."
              solution="PBD aligns your store with current programs, that drives customer engagement and sales"
              delay={0.26}
              isInView={isInView}
            />
            <ChallengeCard
              icon="1"
              title="No access to vendor-driven volume"
              bodyRegular="Independent stores are not connected to vendor-funded programs that drive volume, promotions, and product movement at the store level."
              solution="PBD connects your store to vendor-funded programs"
              delay={0.34}
              isInView={isInView}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
