import React from "react";
import { ClipLoader } from "react-spinners";

function Loading() {
    return (
        <div className="flex justify-center items-center h-screen">
            <ClipLoader
                size={100}
            />
        </div>
    )
}    

export default Loading