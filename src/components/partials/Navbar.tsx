"use client";

import Link from "next/link";
import { navLinks } from "./nav.utils";
import { cn, getKey } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex md:gap-10 md:items-center z-20">
      <ul className="flex gap-5">
        {navLinks.map((link) => {
          return (
            <Link
              href={link.path}
              key={getKey()}
              className={cn(
                "text-md capitalize",
                pathname == link.path &&
                  "text-secondary border-b-2",
                "hover:text-secondary transition duration-500"
              )}
            >
              {link.name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
