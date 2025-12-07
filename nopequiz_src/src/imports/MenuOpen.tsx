import svgPaths from "./svg-msx00fkynr";

function Title() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0 text-white" data-name="title">
      <p className="[grid-area:1_/_1] font-['Space_Grotesk:Bold',sans-serif] h-[41px] leading-[30px] ml-[78.5px] mt-0 relative text-[30px] text-center translate-x-[-50%] w-[157px]">Nope Tools</p>
      <p className="[grid-area:1_/_1] font-['Space_Grotesk:Regular',sans-serif] leading-[24px] ml-0 mt-[31px] relative text-[14px] text-nowrap whitespace-pre">by nope.design</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[30px]" data-name="Number">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <path d={svgPaths.p3cae7780} fill="var(--fill-0, #001BFF)" id="Number" />
        </svg>
      </div>
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282828] text-[18px] text-nowrap">
        <p className="leading-[30px] whitespace-pre">Timer</p>
      </div>
    </div>
  );
}

function ButtonTimer() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[64px] items-center justify-center px-[20px] py-[30px] relative rounded-[10px] shadow-[-4px_4px_0px_0px_#001bff] shrink-0 w-[186px]" data-name="button_timer">
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <div className="h-[30px] relative shrink-0 w-[24.375px]" data-name="Number">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 30">
          <path d={svgPaths.p2e36ee00} fill="var(--fill-0, #001BFF)" id="Number" />
        </svg>
      </div>
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#282828] text-[18px] text-nowrap">
        <p className="leading-[30px] whitespace-pre">Split Timer</p>
      </div>
    </div>
  );
}

function ButtonSplitTimer() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[64px] items-center justify-center px-[20px] py-[30px] relative rounded-[10px] shadow-[-4px_4px_0px_0px_#001bff] shrink-0 w-[186px]" data-name="button_split timer">
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <div className="h-[25.781px] relative shrink-0 w-[16.875px]" data-name="Number">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 26">
          <path d={svgPaths.p3cd2ca00} fill="var(--fill-0, white)" id="Number" />
        </svg>
      </div>
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-nowrap text-white">
        <p className="leading-[30px] whitespace-pre">Quiz</p>
      </div>
    </div>
  );
}

function ButtonQuiz() {
  return (
    <div className="bg-[#001bff] content-stretch flex flex-col h-[64px] items-center justify-center px-[20px] py-[30px] relative rounded-[10px] shrink-0 w-[186px]" data-name="button_ quiz">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[10px] shadow-[-4px_4px_0px_0px_#001bff]" />
      <Frame2 />
    </div>
  );
}

function MenuIcon() {
  return (
    <div className="absolute left-[30px] size-[60px] top-[30px]" data-name="menu icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g clipPath="url(#clip0_4009_1008)" id="menu icon">
          <circle cx="30" cy="30" fill="var(--fill-0, #001BFF)" id="Ellipse 67" r="30" />
          <path d={svgPaths.p37f443b0} fill="var(--fill-0, white)" id="Number" />
        </g>
        <defs>
          <clipPath id="clip0_4009_1008">
            <rect fill="white" height="60" width="60" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SideMenu() {
  return (
    <div className="absolute bg-[#001bff] content-stretch flex flex-col gap-[23px] h-[938px] items-start left-0 overflow-clip px-[30px] py-[107px] top-0" data-name="side menu">
      <Title />
      <ButtonTimer />
      <ButtonSplitTimer />
      <ButtonQuiz />
      <MenuIcon />
    </div>
  );
}

export default function MenuOpen() {
  return (
    <div className="bg-[#d5e1e1] relative size-full" data-name="Menu open">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pt-[145.095px] px-[304.111px] relative size-full">
          <SideMenu />
        </div>
      </div>
    </div>
  );
}