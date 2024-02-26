import React from "react";

type Props = {
  text: string;
};
export default function CardTitile({ text }: Props) {
  return (
    <h1 className="w-full h-12 text-center text-black text-lg font-bold font-['Kumbh Sans'] leading-[48px] tracking-tight">
      {text}
    </h1>
  );
}
