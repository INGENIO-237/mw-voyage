import Image from "next/image";
import Logo from "@/public/images/logo-myway.png";
import MobNavbar from "./partials/MobNavbar";
import Navbar from "./partials/Navbar";

export default function Header() {
  return (
    <div className="container md:px-[4rem] lg:px-[6rem] flex items-center justify-between">
      <Image src={Logo} width={150} height={150} className="-ml-2" alt="logo" priority />

        <MobNavbar />
        <Navbar />
    </div>
  );
}
