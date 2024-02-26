import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { ElementType } from "react";

const TextPropsVariants = cva("w-full", {
  variants: {
    variant: {
      default: " font-bold font-['Poppins'] leading-[65px] ",
      secondary: "font-bold leading-6 text-[#3294F8] text-center",
      three:
        "w-full text-center text-lg font-bold font-['Kumbh Sans'] leading-[48px] tracking-tight",
    },
    size: {
      default: "text-3xl ",
      base: "text-base ",
    },
    color: {
      default: "text-white",
      secondary: "text-[#3294F8]",
      three: "text-black",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface TextProps extends VariantProps<typeof TextPropsVariants> {
  content: string;
  element?: ElementType;
  className?: string;
}

export function Text({
  content,
  element = "p",
  className,
  variant,
  size,
  color = "default",
}: TextProps) {
  const Component = element;
  return (
    <Component
      className={cn(TextPropsVariants({ variant, size, className, color }))}
    >
      {content}
    </Component>
  );
}
