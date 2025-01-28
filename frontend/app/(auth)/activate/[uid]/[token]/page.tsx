import React, { useEffect } from "react";
import { useRouter } from "next/router";

export async function getServerSideProps(context: {
  params: { uid: string; token: string };
}) {
  const { uid, token } = context.params;
  const res = await fetch(`http://localhost:8000/activate/${uid}/${token}`, {
    method: "POST",
  });
  const data = await res.json();
  return {
    props: {
      success: data.success || false, // Pass activation result as props
    },
  };
}

export default function Page( { success }: { success : boolean } ) {
  const router = useRouter();
  useEffect(() => {
    if ( success ) {
      router.push("/"); // Redirect to the home page if activation is successful
    }
  }, [ success , router]);
  if ( success ) return null; // Optional: Render nothing while redirecting
  return <div> Activation Failed. Please try again. </div>;
}