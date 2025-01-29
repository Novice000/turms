import React from "react";
import LoginForm from "@/components/auth/login-form";
import FormHeading from "@/components/confirm/heading";

export default function Login() {
    return (
      <div className="w-full grid place-content-center">
        <div className="form-float">
          <FormHeading heading="Login" />
          <div className="form-container">
            <LoginForm />
          </div>
        </div>
      </div>
    );
}