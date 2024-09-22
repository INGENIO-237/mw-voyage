"use client";

import Image from "next/image";
import Logo from "@/public/images/logo-myway.png";
import MobNavbar from "./partials/MobNavbar";
import Navbar from "./partials/Navbar";
import { useState } from "react";
import { Languages } from "lucide-react";

export default function Header() {
  const [lang, setLang] = useState<"en" | "fr">("en");

  return (
    <div className="container md:px-[4rem] lg:px-[6rem] flex items-center justify-between">
      <Image
        src={Logo}
        width={150}
        height={150}
        className="-ml-2 pointer-events-none z-20"
        alt="logo"
        priority
      />

      <MobNavbar />
      <Navbar />
      <div
        className="hidden md:block z-20"
        onClick={() => {
          setLang(lang === "en" ? "fr" : "en");
        }}
      >
        <h1 className="flex gap-2 hover:cursor-pointer uppercase">
          <Languages />
          {lang}
        </h1>
      </div>
    </div>
  );
}
