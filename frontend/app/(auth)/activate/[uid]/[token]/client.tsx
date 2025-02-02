"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { unAuthCall } from "@/axios/axios_instances";
import { Button } from "@/components/ui/button";
import { PuffLoader } from "react-spinners";
import { CustomDialog } from "@/components/shared/email_dialog";

export default function ActivatePage() {
    const router = useRouter()
    const params = useParams() as { uid: string; token: string };
    const [error, setError] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true)

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
            setLoading(false)
             setError(true);
           }

        console.log("params", params)
         // eslint-disable-next-line @typescript-eslint/no-unused-vars
         } catch (err) {
          setLoading(false)
           setError(true);
         }
       }

       activate();
     }, [params, router]);

     if(loading){
      return (
        <div className="w-full h-screen flex justify-center items-center backdrop-blur-lg">
          <PuffLoader size={20} speedMultiplier={1.5} color="black" />
        </div>
      )
     }


    if (error) {
        return (
            <div className="w-full h-full flex justify-center items-center">
                <div className="flex flex-col justify-center items-center space-y-5 border border-red-600 bg-red-200 rounded-md p-5 h-[200px] w-[400px]">
                    <h1 className="font-bold text-3xl text-red-600"> Activation Failed </h1>
                  <CustomDialog customProp={{name:"Resend Activation Link", title:"Resend Activation Link", description:"Resend Activation Link"}}/>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="w-full h-screen flex justify-center items-center">
                <h1 className="font-bold text-3xl text-black-600 bg-green-300 size-[60px]"> Activation Success </h1>
                <Button onClick={() => router.push("/login")}> Login </Button>
            </div>
        </div>
    )
}