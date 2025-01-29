import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col">
      <div className="text-[50px]  grid place-content-center  font-bold items-center border-b border-white-400 bg-black text-white">
        {" "}
        Turms{" "}
      </div>
      <div className="bg-image-bg bg-no-repeat bg-cover  w-full flex-1 justify-center content-center">{children}</div>
    </div>
  );
}
