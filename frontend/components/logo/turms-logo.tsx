import React from "react";
import { MapPinned } from "lucide-react";

function TurmsLogo({className}:{className?:string}) {
    return (
        <div className={`flex items-center space-x-2 ${className}`}>
            <MapPinned size={30} />
            <span className="font-bold">Turms</span>
        </div>
    );
}

export default TurmsLogo;