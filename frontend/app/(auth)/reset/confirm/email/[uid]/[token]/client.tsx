"use client";
import FormHeading from "@/components/confirm/heading";
import { EmailForm } from "@/components/confirm/email_form";
import { useParams } from "next/navigation";

export default function EmailReset() {
  const { uid, token } = useParams() as { uid: string; token: string };
  return (
    <div className="w-full h-4/5 grid place-content-center">
      <div className="form-float">
        <FormHeading heading="Set Email" />
        <div className="form-container">
          <EmailForm uid={uid} token={token} />
        </div>
      </div>
    </div>
  );
}
