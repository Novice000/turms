import PasswordReset from "./client";

export default function Page({
  params,
}: {
  params: { uid: string; token: string };
}) {
  return (
    <div>
      <PasswordReset uid={params.uid} token={params.token} />
    </div>
  );
}
