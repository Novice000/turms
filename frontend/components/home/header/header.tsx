import TurmsLogo from "@/components/logo/turms-logo";
import { UserCircle2Icon as ProfileIcon, MenuIcon } from "lucide-react";

function Header() {
  return (
    <div className="text-[30px]  flex justify-between px-4 font-bold items-center border-b border-white-400 bg-black text-white backdrop-blur-md">
      <TurmsLogo />
      <div className="flex items-center space-x-2">
        <ProfileIcon color="white" />
        <MenuIcon color="white" />
      </div>
    </div>
  );
}

export default Header;
