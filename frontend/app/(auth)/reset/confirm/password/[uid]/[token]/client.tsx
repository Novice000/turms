import { PasswordForm } from "@/components/confirm/password_form";
import FormHeading from "@/components/confirm/heading";


export default function PasswordReset({uid, token}: { uid: string; token: string }) {
    return (
      <div>
        <FormHeading heading="Set Password" />
        <PasswordForm uid={uid} token={token} />
      </div>
    );
}