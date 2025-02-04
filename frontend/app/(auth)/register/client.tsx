"use client";
import React from "react";
import RegisterForm from "@/components/auth/register-form";
import FormHeading from "@/components/confirm/heading";
import { motion } from "motion/react";

export default function Register() {
  return (
    <div className="w-full grid place-content-center">
      <motion.div 
      initial = {{  opacity: 0 }}
      animate = {{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="form-float">
        <FormHeading heading="Login" />
        <div className="form-container">
          <RegisterForm />
        </div>
      </motion.div>
    </div>
  );
}
