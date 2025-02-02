import TurmsLogo from "@/components/logo/turms-logo";
import { MenuIcon } from "lucide-react";

function Header() {
  return (
    <div className="text-[30px] w-full flex justify-between px-4 font-bold items-center border-b border-white-400 bg-black text-white backdrop-blur-md">
      <TurmsLogo />
      <div className="">
      <MenuIcon color="white" />
      </div>
    </div>
  );
}

export default Header;
