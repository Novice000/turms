import React from "react";
import Register from "./client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Register"
}

export default function Page(){
    return <Register />
}