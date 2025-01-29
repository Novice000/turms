import React from "react";
import RegisterForm from "@/components/auth/register-form";
import FormHeading from "@/components/confirm/heading";

export default function Register() {
  return (
    <div className="w-full grid place-content-center">
      <div className="form-float">
        <FormHeading heading="Login" />
        <div className="form-container">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
