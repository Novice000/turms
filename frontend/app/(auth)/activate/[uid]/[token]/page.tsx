import React from "react";
import ActivatePage from "./client";
import { Metadata } from "next/types";


export const metadata: Metadata = {
  title: "Activate Account"
}

export default function Page( ) {
  return (
    <div>
      <ActivatePage />
    </div>
  )
}
