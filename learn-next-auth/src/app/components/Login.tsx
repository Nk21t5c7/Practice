'use client';

import React from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function Login() {
  const { data: session, status } = useSession();

  const router = useRouter();

  const handleClickEmail = () => {
    router.push('/login');
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status !== "authenticated") {
    return (
      <div>
        <p>Not logged in</p>
        <button
          onClick={() => signIn("google", {}, { prompt: "login" })}
          className="border rounded-2xl px-2"
        >
          Gmail
        </button>
        <button
          onClick={() => signIn("github", {}, { prompt: "login" })}
          className="border rounded-2xl px-2"
        >
          Github
        </button>
        <button onClick={handleClickEmail} className="border rounded-2xl px-2">
          Email
        </button>
      </div>
    );
  }
  return null;
}
