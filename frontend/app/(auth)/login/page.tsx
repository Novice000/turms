import React from "react";
import Login from "./client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login"
}

export default function Page() {
    return <Login />;
}