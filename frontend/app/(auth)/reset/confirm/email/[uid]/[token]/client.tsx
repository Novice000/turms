import FormHeading from "@/components/confirm/heading";
import { EmailForm } from "@/components/confirm/email_form";

export default function EmailReset({
  uid,
  token,
}: {
  uid: string;
  token: string;
}) {
  return (
    <div>
      <FormHeading heading="Set Email" />
      <EmailForm uid={uid} token={token} />
    </div>
  );
}

