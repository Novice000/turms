"use client";
import { PasswordForm } from "@/components/confirm/password_form";
import FormHeading from "@/components/confirm/heading";
import { useParams } from "next/navigation";
import { motion } from "motion/react";


export default function PasswordReset() {
  const {uid, token} = useParams() as {uid: string, token: string}
    return (
      <motion.div 
      initial ={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, type: "tween" }}
      className="w-full h-4/5 grid place-content-center">
        <div className="form-float">
          <FormHeading heading="Set Password" />
          <div className="form-container">
            <PasswordForm uid={uid} token={token} />
          </div>
        </div>
      </motion.div>
    );
}