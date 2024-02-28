import React from "react";

interface ButtonTextProps {
  text?: string;
}
export default function Buttontext({
  text = "Solicite Orçamento Pelo WhatsAp",
}: ButtonTextProps) {
  return (
    <span className="w-[268.77px] h-[15px] text-center text-white/100 text-[15px] font-medium font-['Kumbh Sans'] leading-[15px] tracking-tight">
      {text}
    </span>
  );
}
