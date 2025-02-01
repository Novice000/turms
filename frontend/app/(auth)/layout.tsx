import React from "react";
import Header from "@/components/home/header/header";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col">
      <div className="text-[30px]  flex justify-between px-4 font-bold items-center border-b border-white-400 bg-black text-white backdrop-blur-md">
      <Header />
      </div>
      <div className="bg-image-bg bg-no-repeat bg-auto md:bg-cover bg-center flex-1 justify-center content-center">
        {children}
      </div>
    </div>
  );
}
