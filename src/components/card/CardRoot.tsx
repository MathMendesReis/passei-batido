import React from "react";

type Props = {
  children: React.ReactNode;
};
export default function CardRoot({ children }: Props) {
  return (
    <div className="w-[300.98px]  h-80 p-2.5 flex-col justify-center items-start inline-flex">
      {children}
    </div>
  );
}
