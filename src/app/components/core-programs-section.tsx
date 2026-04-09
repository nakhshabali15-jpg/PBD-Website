const iconTobacco = "https://www.figma.com/api/mcp/asset/2ef51ce7-7aef-4109-81a2-b962a577dee7";
const iconCoffee = "https://www.figma.com/api/mcp/asset/369a75d0-e493-43d1-9c98-90a73db6ab17";
const iconSnacks1 = "https://www.figma.com/api/mcp/asset/cbad65cd-419b-475a-8057-4c9a721039f6";
const iconSnacks2 = "https://www.figma.com/api/mcp/asset/72bdbcee-dc52-44b5-8924-05b6ab57d888";
const iconSnacks3 = "https://www.figma.com/api/mcp/asset/76d69f57-1ed2-44cc-a6ac-9d83509551b6";
const iconBeverage = "https://www.figma.com/api/mcp/asset/94a26574-9c30-4a38-ba98-bc3a74d3e0f6";
const iconMerchandise = "https://www.figma.com/api/mcp/asset/201f3f62-64da-43c5-be41-1203c017fcfc";

const programs = [
  {
    color: "#ff8400",
    icon: (
      <div className="absolute left-[17px] top-[17px] size-[34px] flex flex-col items-start">
        <img alt="" className="size-full object-contain" src={iconTobacco} />
      </div>
    ),
    name: "National tobacco program",
    description: "National account access with centralized category management & verified payments",
  },
  {
    color: "#9b5932",
    icon: (
      <div className="absolute left-[17px] top-[17px] size-[34px] flex flex-col items-start">
        <img alt="" className="size-full object-contain" src={iconCoffee} />
      </div>
    ),
    name: "Coffee program",
    description: "Preferred pricing, equipment support, & consistent in-store execution",
  },
  {
    color: "#51a640",
    icon: (
      <div className="absolute left-[17px] top-[17px] size-[34px] flex flex-col items-start">
        <img alt="" className="size-full object-contain" src={iconSnacks3} />
      </div>
    ),
    name: "Salty snacks program",
    description: "Chain-level pricing, rebates, and promotional support",
  },
  {
    color: "#27a4f1",
    icon: (
      <div className="absolute left-[21px] top-[21px] w-[25.5px] h-[26.5px] flex flex-col items-start">
        <img alt="" className="size-full object-contain" src={iconBeverage} />
      </div>
    ),
    name: "Beverage program",
    description: "On-invoice discounts, rebates, and coordinated promotional execution",
  },
  {
    color: "#6f53dd",
    icon: (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[27.5px] h-[23.5px] flex flex-col items-start">
        <img alt="" className="size-full object-contain" src={iconMerchandise} />
      </div>
    ),
    name: "Core-Mark general merchandise",
    description: "1% rebate plus access to funded national programs and merchandising opportunities",
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
          {programs.map((program) => (
            <div
              key={program.name}
              className="flex gap-5 items-start"
              style={{ width: "clamp(280px, 30%, 401px)" }}
            >
              {/* Icon square */}
              <div className="relative flex-shrink-0 size-[68px]" style={{ backgroundColor: program.color }}>
                {program.icon}
              </div>
              {/* Text */}
              <div className="flex flex-col gap-[6px] flex-1">
                <p
                  className="text-[#111642]"
                  style={{ fontSize: "20px", fontWeight: 600, letterSpacing: "-0.18px" }}
                >
                  {program.name}
                </p>
                <p
                  className="text-[#737373]"
                  style={{ fontSize: "15px", fontWeight: 400, letterSpacing: "-0.18px" }}
                >
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
