import Link from "next/link";
import React, { ElementType } from "react";

interface LinkWithIcon {
  icon?: ElementType;
  text: string;
  href: string;
}
export default function LinkWithIcon({
  icon = "div",
  text,
  href,
}: LinkWithIcon) {
  const Icon = icon;

  return (
    <Link
      href={href}
      target="_blank"
      className="text-[#4f4f4f] flex gap-1 items-center justify-center"
    >
      {icon !== "div" && <Icon />}
      {text}
    </Link>
  );
}
