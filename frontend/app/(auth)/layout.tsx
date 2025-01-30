import TurmsLogo from "@/components/logo/turms-logo";
import React from "react";
import { MenuIcon } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col">
      <div className="text-[30px]  flex justify-between px-4 font-bold items-center border-b border-white-400 bg-black text-white backdrop-blur-md">
        <TurmsLogo />
        <MenuIcon color="white"/>
      </div>
      <div className="bg-image-bg bg-no-repeat bg-cover flex-1 justify-center content-center">
        {children}
      </div>
    </div>
  );
}
