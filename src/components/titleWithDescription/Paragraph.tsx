import React from "react";

type Props = {
  text: string;
  fontSize?: string;
};
export default function Paragraph({ text, fontSize = "text-3xl" }: Props) {
  return (
    <div>
      <p
        className={` text-black ${fontSize} font-bold font-['Poppins']  uppercase text-center `}
      >
        {text}
      </p>
    </div>
  );
}
