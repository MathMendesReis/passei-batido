import React from "react";

type Props = {
  text: string;
};
export default function CardParagraph({ text }: Props) {
  return (
    <p className="w-full h-5 text-center text-zinc-900 text-base font-normal font-['Kumbh Sans'] leading-relaxed tracking-wide">
      {text}
    </p>
  );
}
