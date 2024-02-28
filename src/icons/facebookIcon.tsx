import * as React from "react";

interface SvgComponentProps extends React.SVGProps<SVGSVGElement> {}

interface SvgComponentProps extends React.SVGProps<SVGSVGElement> {}
export function FacebookIcon({ ...props }: SvgComponentProps) {
  return (
    <svg
      width={8}
      height={15}
      viewBox="0 0 8 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.572 7.989h1.644v6.77c0 .133.108.241.242.241h2.788a.242.242 0 00.242-.242V8.021h1.89a.242.242 0 00.24-.214l.288-2.492a.242.242 0 00-.24-.27H5.487V3.483c0-.471.254-.71.754-.71h1.423a.242.242 0 00.242-.242V.244a.242.242 0 00-.242-.242H5.703C5.69.002 5.66 0 5.613 0c-.34 0-1.523.067-2.458.927-1.035.952-.891 2.093-.857 2.291v1.827H.572a.242.242 0 00-.242.242v2.46c0 .134.108.242.242.242z"
        fill="#4F4F4F"
      />
    </svg>
  );
}
