import React from "react";
import PasswordReset from "./client";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Set Password",
}

export default function Page() {
  return (
      <PasswordReset/>
  );
}
