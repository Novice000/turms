import React from "react";
import Link from "next/link";
import Header from "@/components/home/header/header";

export default function NotFound() {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <div className="w-full grid flex-1 place-content-center">
        <div className="border rounded-lg border-gray-400 p-4 shadow-lg">
          <div className=" flex flex-col gap-6">
            <h1 className="text-[150px] md:text-[250px] font-bold text-center">404</h1>
            <p className="text-3xl font-bold text-center">
              Page not found, click{" "}
              <Link href="/" className="underline">
                here
              </Link>{" "}
              to go back
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
