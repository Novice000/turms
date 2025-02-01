import React from "react";
import EmailReset  from "./client";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Set Email",   
}
export default function Page() {
    return (
        <EmailReset />
    );
}