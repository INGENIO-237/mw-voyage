import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: Props) {
  return <div className="flex-1 mt-5 container md:px-[4rem] lg:px-[6rem]">{children}</div>;
}
