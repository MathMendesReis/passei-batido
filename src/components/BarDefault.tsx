type Props = {
  color?: string;
  width?: string;
  height?: string;
};
export default function BarDefault({
  color = "bg-[#3294F8]",
  width = "w-3",
  height = "h-3",
}: Props) {
  return <div className={`${height} ${width} ${color} rounded-md`} />;
}
