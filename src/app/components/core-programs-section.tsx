// Icon asset URLs from Figma — composite vector layers per icon
const imgTobacco = "https://www.figma.com/api/mcp/asset/2ef51ce7-7aef-4109-81a2-b962a577dee7";
const imgCoffeeV1 = "https://www.figma.com/api/mcp/asset/369a75d0-e493-43d1-9c98-90a73db6ab17";
const imgCoffeeV2 = "https://www.figma.com/api/mcp/asset/a0b55922-4ad2-41d5-87b1-b9fa8107c7bc";
const imgSnacksV1 = "https://www.figma.com/api/mcp/asset/cbad65cd-419b-475a-8057-4c9a721039f6";
const imgSnacksV2 = "https://www.figma.com/api/mcp/asset/72bdbcee-dc52-44b5-8924-05b6ab57d888";
const imgSnacksV3 = "https://www.figma.com/api/mcp/asset/76d69f57-1ed2-44cc-a6ac-9d83509551b6";
const imgBeverage = "https://www.figma.com/api/mcp/asset/94a26574-9c30-4a38-ba98-bc3a74d3e0f6";
const imgMerchandise = "https://www.figma.com/api/mcp/asset/201f3f62-64da-43c5-be41-1203c017fcfc";

// Tobacco icon — single group image
function TobaccoIcon() {
  return (
    <div className="absolute left-[17px] top-[17px] size-[34px]">
      <div className="absolute flex flex-col items-start h-[28.327px] left-[7.34px] top-[2.84px] w-[19.315px]">
        <div className="h-[28.327px] overflow-clip relative shrink-0 w-full">
          <img alt="" className="absolute block max-w-none size-full" src={imgTobacco} />
        </div>
      </div>
    </div>
  );
}

// Coffee icon — two overlapping vector paths
function CoffeeIcon() {
  return (
    <div className="absolute left-[17px] top-[17px] size-[34px]">
      <div className="absolute flex flex-col items-start h-[24.475px] left-[2.73px] top-[4.76px] w-[28.536px]">
        <div className="h-[24.475px] overflow-clip relative shrink-0 w-full">
          <div className="absolute inset-[0.43%_0.37%]">
            {/* Right bean half */}
            <div className="absolute inset-[0.43%_0.37%_0.47%_44.09%]">
              <div className="absolute inset-[-0.44%_-0.67%]">
                <img alt="" className="block max-w-none size-full" src={imgCoffeeV1} />
              </div>
            </div>
            {/* Left bean half */}
            <div className="absolute inset-[23.12%_38.8%_0.43%_0.37%]">
              <div className="absolute inset-[-0.57%_-0.61%]">
                <img alt="" className="block max-w-none size-full" src={imgCoffeeV2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Snacks icon — three overlapping vector paths
function SnacksIcon() {
  return (
    <div className="absolute flex flex-col items-start left-[17px] size-[34px] top-[17px]">
      <div className="h-[34px] overflow-clip relative shrink-0 w-full">
        <div className="absolute inset-[4.54%_12.13%]">
          <div className="absolute inset-[4.54%_12.13%]">
            {/* Bag outline */}
            <div className="absolute inset-[6.1%_13.69%]">
              <img alt="" className="absolute block max-w-none size-full" src={imgSnacksV1} />
            </div>
            {/* Center dot */}
            <div className="absolute inset-[38.42%_30%_36.1%_29.89%]">
              <img alt="" className="absolute block max-w-none size-full" src={imgSnacksV2} />
            </div>
            {/* Bag fill */}
            <div className="absolute inset-[4.54%_12.13%]">
              <img alt="" className="absolute block max-w-none size-full" src={imgSnacksV3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Beverage icon — single image
function BeverageIcon() {
  return (
    <div className="absolute flex flex-col items-start h-[26.563px] left-[21.25px] top-[21.25px] w-[25.5px]">
      <div className="h-[26.563px] overflow-clip relative shrink-0 w-full">
        <img alt="" className="absolute block max-w-none size-full" src={imgBeverage} />
      </div>
    </div>
  );
}

// Merchandise icon — single image, centered
function MerchandiseIcon() {
  return (
    <div
      className="absolute flex flex-col items-start h-[23.375px] w-[27.625px]"
      style={{ left: "calc(50% + 0.21px)", top: "calc(50% + 0.27px)", transform: "translate(-50%, -50%)" }}
    >
      <div className="h-[23.375px] overflow-clip relative shrink-0 w-full">
        <img alt="" className="absolute block max-w-none size-full" src={imgMerchandise} />
      </div>
    </div>
  );
}

const programs = [
  {
    color: "#ff8400",
    Icon: TobaccoIcon,
    name: "National tobacco program",
    description: "National account access with centralized category management & verified payments",
  },
  {
    color: "#9b5932",
    Icon: CoffeeIcon,
    name: "Coffee program",
    description: "Preferred pricing, equipment support, & consistent in-store execution",
  },
  {
    color: "#51a640",
    Icon: SnacksIcon,
    name: "Salty snacks program",
    description: "Chain-level pricing, rebates, and promotional support",
  },
  {
    color: "#27a4f1",
    Icon: BeverageIcon,
    name: "Beverage program",
    description: "On-invoice discounts, rebates, and coordinated promotional execution",
  },
  {
    color: "#6f53dd",
    Icon: MerchandiseIcon,
    name: "Core-Mark general merchandise",
    description: <>1% rebate plus access to funded national<br />programs and merchandising opportunities</>,
    fullWidth: true,
  },
];

export function CoreProgramsSection() {
  return (
    <section className="bg-[#fafafa]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] py-[80px] flex flex-col gap-[56px]">
        {/* Header */}
        <div className="flex flex-col gap-6">
          <p
            className="text-[#999] uppercase tracking-[1.68px]"
            style={{ fontSize: "16px", fontWeight: 500 }}
          >
            Core Programs
          </p>
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
            <h2
              className="text-[#111642] lg:w-[520px] flex-shrink-0"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-1.44px",
              }}
            >
              Key programs of Power Buying Dealers
            </h2>
            <p
              className="text-[#555] lg:max-w-[560px]"
              style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.5 }}
            >
              PBD connects your store to national vendor programs across key categories, designed to drive sales, improve margins, and strengthen execution in-store.
            </p>
          </div>
        </div>

        {/* Program cards */}
        <div className="flex flex-wrap gap-x-[38px] gap-y-[56px]">
          {programs.map(({ color, Icon, name, description, fullWidth }) => (
            <div
              key={name}
              className="flex gap-5 items-start"
              style={{ width: fullWidth ? "100%" : "clamp(280px, 30%, 401px)" }}
            >
              {/* Icon square */}
              <div className="relative flex-shrink-0 size-[68px]" style={{ backgroundColor: color }}>
                <Icon />
              </div>
              {/* Text */}
              <div className="flex flex-col gap-[6px] flex-1">
                <p
                  className="text-[#111642]"
                  style={{ fontSize: "20px", fontWeight: 600, letterSpacing: "-0.18px" }}
                >
                  {name}
                </p>
                <p
                  className="text-[#737373]"
                  style={{ fontSize: "15px", fontWeight: 400, letterSpacing: "-0.18px" }}
                >
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
