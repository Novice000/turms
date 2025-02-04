"use client";
import React from "react";
import LoginForm from "@/components/auth/login-form";
import FormHeading from "@/components/confirm/heading";
import { motion } from "motion/react";

export default function Login() {
    return (
      <div className="w-full grid place-content-center">
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="form-float">
          <FormHeading heading="Login" />
          <div className="form-container">
            <LoginForm />
          </div>
        </motion.div>
      </div>
    );
}