import EmailReset  from "./client";

export default function Page({ params }: { params: { uid: string; token: string } }) {
    return (
      <div>
        <EmailReset uid={params.uid} token={params.token} />
      </div>
    );
}