import { cn } from "@/lib/utils";
import { HTMLProps } from "react";

type Props = HTMLProps<HTMLHeadingElement> & {
  className?: string;
};

export default function Heading({ className, ...rest }: Props) {
  return (
    <h1
      className={cn(
        "text-primary text-3xl md:text-4xl lg:text-5xl font-bold",
        className
      )}
      {...rest}
    />
  );
}
