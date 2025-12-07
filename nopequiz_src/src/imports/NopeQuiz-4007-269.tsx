import svgPaths from "./svg-aqm9y7um5k";
import imgImageAndreaGili from "figma:asset/0bd69f237a8b3774c609d7d6986e22d3066bb968.png";
import imgImageAuroraEduardo from "figma:asset/e2a7ec7813aa25f510aa4c9d29ccc135115e5357.png";
import imgImageBenedettaBruna from "figma:asset/9f9e8f2863b60334397e03843cca6b8b3522ddd5.png";
import imgImageCaterinaStanchi from "figma:asset/6983fcec7f18d1cfdcceac530b55b6ae8a42148f.png";
import imgImageDiegoRossi from "figma:asset/421e7dc3cda1106a4e2da05e6ec3069a996837f8.png";
import imgImageElenaManzin from "figma:asset/0e2e20d77f8b109c4f6e942f21647638ca91e5ed.png";
import imgImageEleneTola from "figma:asset/90b750a7e1a983bb5eec41eb928eb9269202b226.png";

function Heading() {
  return (
    <div className="h-[59.999px] relative shrink-0 w-[215.589px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[59.999px] relative w-[215.589px]">
        <p className="absolute font-['Space_Grotesk:Bold',sans-serif] leading-[60px] left-[97px] not-italic text-[#282828] text-[40px] text-center text-nowrap top-[-0.85px] translate-x-[-50%] whitespace-pre">Nope Quiz</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[27.994px] opacity-60 relative shrink-0 w-[171.349px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[27.994px] relative w-[171.349px]">
        <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#282828] text-[20px] text-nowrap top-[0.31px] whitespace-pre">by nope.design</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[7.998px] h-[95.991px] items-center relative shrink-0 w-[215.589px]" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[23.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M11.9976 2.99939V14.9969" id="Vector" stroke="var(--stroke-0, #282828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99959" />
          <path d={svgPaths.p2404fc0} id="Vector_2" stroke="var(--stroke-0, #282828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99959" />
          <path d={svgPaths.p587a560} id="Vector_3" stroke="var(--stroke-0, #282828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99959" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[23.995px] relative shrink-0 w-[113.123px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[23.995px] relative w-[113.123px]">
        <p className="absolute font-['Space_Grotesk:Bold',sans-serif] leading-[24px] left-[57px] not-italic text-[#282828] text-[16px] text-center text-nowrap top-[-0.62px] translate-x-[-50%] whitespace-pre">Upload Images</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#eaff00] content-stretch flex gap-[11.998px] h-[77.519px] items-center justify-center p-[2.767px] relative rounded-[40px] shrink-0 w-[746.486px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#001bff] border-[2.767px] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <Icon />
      <Text />
    </div>
  );
}

function Label() {
  return (
    <div className="h-[23.995px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Space_Grotesk:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#282828] text-[16px] text-nowrap top-[-0.62px] whitespace-pre">Number of Questions</p>
    </div>
  );
}

function NumberInput() {
  return (
    <div className="bg-white h-[53.524px] relative rounded-[10px] shrink-0 w-full" data-name="Number Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex h-[53.524px] items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Space_Grotesk:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#282828] text-[16px] text-nowrap whitespace-pre">10</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#001bff] border-[2.767px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[7.998px] h-[85.518px] items-start relative shrink-0 w-[746.486px]" data-name="Container">
      <Label />
      <NumberInput />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[23.995px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Space_Grotesk:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#282828] text-[16px] top-[-0.62px] w-[119px]">Your Images (7)</p>
    </div>
  );
}

function ImageAndreaGili() {
  return (
    <div className="h-[191.993px] relative shrink-0 w-full" data-name="Image (andrea gili)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageAndreaGili} />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[197.527px] relative rounded-[15px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col h-[197.527px] items-start p-[2.767px] relative w-full">
          <ImageAndreaGili />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#001bff] border-[2.767px] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white h-[45.526px] relative rounded-[10px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex h-[45.526px] items-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Space_Grotesk:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(40,40,40,0.5)] text-nowrap whitespace-pre">andrea gili</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#001bff] border-[2.767px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#d5e1e1] h-[45.526px] relative rounded-[30px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#001bff] border-[2.767px] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <p className="absolute font-['Space_Grotesk:Regular',sans-serif] leading-[24px] left-[164.18px] not-italic text-[#282828] text-[16px] text-center text-nowrap top-[10.15px] translate-x-[-50%] whitespace-pre">Delete</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[7.998px] h-[99.05px] items-start relative shrink-0 w-full" data-name="Container">
      <TextInput />
      <Button1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[#d5e1e1] content-stretch flex flex-col gap-[11.998px] h-[346.103px] items-start left-0 pb-[2.767px] pt-[18.764px] px-[18.764px] rounded-[15px] top-0 w-[365.245px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#001bff] border-[2.767px] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <Container2 />
      <Container3 />
    </div>
  );
}

function ImageAuroraEduardo() {
  return (
    <div className="h-[191.993px] relative shrink-0 w-full" data-name="Image (aurora eduardo)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageAuroraEduardo} />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[197.527px] relative rounded-[15px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col h-[197.527px] items-start p-[2.767px] relative w-full">
          <ImageAuroraEduardo />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#001bff] border-[2.767px] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="bg-white h-[45.526px] relative rounded-[10px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex h-[45.526px] items-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Space_Grotesk:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(40,40,40,0.5)] text-nowrap whitespace-pre">aurora eduardo</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#001bff] border-[2.767px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#d5e1e1] h-[45.526px] relative rounded-[30px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#001bff] border-[2.767px] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <p className="absolute font-['Space_Grotesk:Regular',sans-serif] leading-[24px] left-[164.18px] not-italic text-[#282828] text-[16px] text-center text-nowrap top-[10.15px] translate-x-[-50%] whitespace-pre">Delete</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[7.998px] h-[99.05px] items-start relative shrink-0 w-full" data-name="Container">
      <TextInput1 />
      <Button2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[#d5e1e1] content-stretch flex flex-col gap-[11.998px] h-[346.103px] items-start left-[381.24px] pb-[2.767px] pt-[18.764px] px-[18.764px] rounded-[15px] top-0 w-[365.245px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#001bff] border-[2.767px] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <Container5 />
      <Container6 />
    </div>
  );
}

function ImageBenedettaBruna() {
  return (
    <div className="h-[191.993px] relative shrink-0 w-full" data-name="Image (benedetta bruna)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageBenedettaBruna} />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[197.527px] relative rounded-[15px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col h-[197.527px] items-start p-[2.767px] relative w-full">
          <ImageBenedettaBruna />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#001bff] border-[2.767px] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function TextInput2() {
  return (
    <div className="bg-white h-[45.526px] relative rounded-[10px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex h-[45.526px] items-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Space_Grotesk:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(40,40,40,0.5)] text-nowrap whitespace-pre">benedetta bruna</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#001bff] border-[2.767px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#d5e1e1] h-[45.526px] relative rounded-[30px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#001bff] border-[2.767px] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <p className="absolute font-['Space_Grotesk:Regular',sans-serif] leading-[24px] left-[164.18px] not-italic text-[#282828] text-[16px] text-center text-nowrap top-[10.15px] translate-x-[-50%] whitespace-pre">Delete</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[7.998px] h-[99.05px] items-start relative shrink-0 w-full" data-name="Container">
      <TextInput2 />
      <Button3 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[#d5e1e1] content-stretch flex flex-col gap-[11.998px] h-[346.103px] items-start left-0 pb-[2.767px] pt-[18.764px] px-[18.764px] rounded-[15px] top-[362.1px] w-[365.245px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#001bff] border-[2.767px] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <Container8 />
      <Container9 />
    </div>
  );
}

function ImageCaterinaStanchi() {
  return (
    <div className="h-[191.993px] relative shrink-0 w-full" data-name="Image (caterina stanchi)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageCaterinaStanchi} />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[197.527px] relative rounded-[15px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col h-[197.527px] items-start p-[2.767px] relative w-full">
          <ImageCaterinaStanchi />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#001bff] border-[2.767px] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function TextInput3() {
  return (
    <div className="bg-white h-[45.526px] relative rounded-[10px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex h-[45.526px] items-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Space_Grotesk:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(40,40,40,0.5)] text-nowrap whitespace-pre">caterina stanchi</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#001bff] border-[2.767px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#d5e1e1] h-[45.526px] relative rounded-[30px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#001bff] border-[2.767px] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <p className="absolute font-['Space_Grotesk:Regular',sans-serif] leading-[24px] left-[164.18px] not-italic text-[#282828] text-[16px] text-center text-nowrap top-[10.15px] translate-x-[-50%] whitespace-pre">Delete</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[7.998px] h-[99.05px] items-start relative shrink-0 w-full" data-name="Container">
      <TextInput3 />
      <Button4 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-[#d5e1e1] content-stretch flex flex-col gap-[11.998px] h-[346.103px] items-start left-[381.24px] pb-[2.767px] pt-[18.764px] px-[18.764px] rounded-[15px] top-[362.1px] w-[365.245px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#001bff] border-[2.767px] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <Container11 />
      <Container12 />
    </div>
  );
}

function ImageDiegoRossi() {
  return (
    <div className="h-[191.993px] relative shrink-0 w-full" data-name="Image (diego rossi)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageDiegoRossi} />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[197.527px] relative rounded-[15px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col h-[197.527px] items-start p-[2.767px] relative w-full">
          <ImageDiegoRossi />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#001bff] border-[2.767px] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function TextInput4() {
  return (
    <div className="bg-white h-[45.526px] relative rounded-[10px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex h-[45.526px] items-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Space_Grotesk:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(40,40,40,0.5)] text-nowrap whitespace-pre">diego rossi</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#001bff] border-[2.767px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#d5e1e1] h-[45.526px] relative rounded-[30px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#001bff] border-[2.767px] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <p className="absolute font-['Space_Grotesk:Regular',sans-serif] leading-[24px] left-[164.18px] not-italic text-[#282828] text-[16px] text-center text-nowrap top-[10.15px] translate-x-[-50%] whitespace-pre">Delete</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[7.998px] h-[99.05px] items-start relative shrink-0 w-full" data-name="Container">
      <TextInput4 />
      <Button5 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-[#d5e1e1] content-stretch flex flex-col gap-[11.998px] h-[346.103px] items-start left-0 pb-[2.767px] pt-[18.764px] px-[18.764px] rounded-[15px] top-[724.2px] w-[365.245px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#001bff] border-[2.767px] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <Container14 />
      <Container15 />
    </div>
  );
}

function ImageElenaManzin() {
  return (
    <div className="h-[191.993px] relative shrink-0 w-full" data-name="Image (elena manzin)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageElenaManzin} />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[197.527px] relative rounded-[15px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col h-[197.527px] items-start p-[2.767px] relative w-full">
          <ImageElenaManzin />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#001bff] border-[2.767px] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function TextInput5() {
  return (
    <div className="bg-white h-[45.526px] relative rounded-[10px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex h-[45.526px] items-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Space_Grotesk:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(40,40,40,0.5)] text-nowrap whitespace-pre">elena manzin</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#001bff] border-[2.767px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#d5e1e1] h-[45.526px] relative rounded-[30px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#001bff] border-[2.767px] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <p className="absolute font-['Space_Grotesk:Regular',sans-serif] leading-[24px] left-[164.18px] not-italic text-[#282828] text-[16px] text-center text-nowrap top-[10.15px] translate-x-[-50%] whitespace-pre">Delete</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[7.998px] h-[99.05px] items-start relative shrink-0 w-full" data-name="Container">
      <TextInput5 />
      <Button6 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[#d5e1e1] content-stretch flex flex-col gap-[11.998px] h-[346.103px] items-start left-[381.24px] pb-[2.767px] pt-[18.764px] px-[18.764px] rounded-[15px] top-[724.2px] w-[365.245px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#001bff] border-[2.767px] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <Container17 />
      <Container18 />
    </div>
  );
}

function ImageEleneTola() {
  return (
    <div className="h-[191.993px] relative shrink-0 w-full" data-name="Image (elene tola)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageEleneTola} />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[197.527px] relative rounded-[15px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col h-[197.527px] items-start p-[2.767px] relative w-full">
          <ImageEleneTola />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#001bff] border-[2.767px] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function TextInput6() {
  return (
    <div className="bg-white h-[45.526px] relative rounded-[10px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex h-[45.526px] items-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Space_Grotesk:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(40,40,40,0.5)] text-nowrap whitespace-pre">elene tola</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#001bff] border-[2.767px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#d5e1e1] h-[45.526px] relative rounded-[30px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#001bff] border-[2.767px] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <p className="absolute font-['Space_Grotesk:Regular',sans-serif] leading-[24px] left-[164.18px] not-italic text-[#282828] text-[16px] text-center text-nowrap top-[10.15px] translate-x-[-50%] whitespace-pre">Delete</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[7.998px] h-[99.05px] items-start relative shrink-0 w-full" data-name="Container">
      <TextInput6 />
      <Button7 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-[#d5e1e1] content-stretch flex flex-col gap-[11.998px] h-[346.103px] items-start left-0 pb-[2.767px] pt-[18.764px] px-[18.764px] rounded-[15px] top-[1086.3px] w-[365.245px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#001bff] border-[2.767px] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[1432.4px] relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container7 />
      <Container10 />
      <Container13 />
      <Container16 />
      <Container19 />
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[15.997px] h-[1472.39px] items-start relative shrink-0 w-[746.486px]" data-name="Container">
      <Heading1 />
      <Container23 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[23.995px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3825a2c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99959" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[23.995px] relative shrink-0 w-[77.13px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[23.995px] relative w-[77.13px]">
        <p className="absolute font-['Space_Grotesk:Bold',sans-serif] leading-[24px] left-[39px] not-italic text-[16px] text-center text-nowrap text-white top-[-0.62px] translate-x-[-50%] whitespace-pre">Start</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#001bff] h-[78px] relative rounded-[40px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#001bff] border-[1.383px] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[-4px_4px_0px_0px_#001bff]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-[78px] items-center justify-center p-[2.766px] relative w-full">
          <Icon1 />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function NopeQuiz() {
  return (
    <div className="relative rounded-[15px] shrink-0 w-full" data-name="NopeQuiz">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start p-[43px] relative w-full">
          <Button />
          <Container1 />
          <Container24 />
          <Button8 />
        </div>
      </div>
    </div>
  );
}

export default function NopeQuiz1() {
  return (
    <div className="bg-[#d5e1e1] relative size-full" data-name="Nope Quiz">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center pb-0 pt-[31.993px] px-[304.111px] relative size-full">
          <Container />
          <NopeQuiz />
        </div>
      </div>
    </div>
  );
}