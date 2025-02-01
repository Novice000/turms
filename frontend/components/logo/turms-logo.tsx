import React from "react";
import { Dancing_Script } from "next/font/google";
import { MapPinned } from "lucide-react";
import { NextFont } from "next/dist/compiled/@next/font";


const dancing_script: NextFont = Dancing_Script({
    subsets: ["latin"],
    weight: "400",
})

function TurmsLogo({className}:{className?:string}) {
    return (
        <div className={`flex items-center space-x-2 ${dancing_script.className} ${className}`}>
            <MapPinned size={30} />
            <span className="font-bold">Turms</span>
        </div>
    );
}

export default TurmsLogo;