import svgPaths from "./svg-vaxmvi5iv3";

function MenuIcon() {
  return (
    <div className="absolute left-[30px] size-[60px] top-[30px]" data-name="menu icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g clipPath="url(#clip0_4009_1004)" id="menu icon">
          <circle cx="30" cy="30" fill="var(--fill-0, #001BFF)" id="Ellipse 67" r="30" />
          <path d={svgPaths.p10ba1480} fill="var(--fill-0, white)" id="Number" />
        </g>
        <defs>
          <clipPath id="clip0_4009_1004">
            <rect fill="white" height="60" width="60" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function MenuClosed() {
  return (
    <div className="bg-[#d5e1e1] relative size-full" data-name="menu closed">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pt-[145.095px] px-[304.111px] relative size-full">
          <MenuIcon />
        </div>
      </div>
    </div>
  );
}