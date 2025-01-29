"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { unAuthCall } from "@/axios/axios_instances";

export default function ActivatePage() {
    const router = useRouter()
    const params = useParams() as { uid: string; token: string };
    const [error, setError] = useState<boolean>(false)

     useEffect(() => {
       async function activate() {
         if (!params?.uid || !params?.token) return;

         try {
           const response = await unAuthCall.post("/users/activation/", {
             uid: params.uid,
             token: params.token,
           });

           if (response.status === 201) {
             router.push("/login");
           } else {
             setError(true);
           }

        console.log("params", params)
         // eslint-disable-next-line @typescript-eslint/no-unused-vars
         } catch (err) {
           setError(true);
         }
       }

       activate();
     }, [params, router]);

    if (error) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <h1 className="font-bold text-3xl text-black-600"> Activation Failed </h1>
            </div>
        )
    }

    return (
        <div>
            <h1> Activating... </h1>
        </div>
    )
}