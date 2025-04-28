"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

import Login from "./components/Login";
import Logout from "./components/Logout";

export default function Home() {
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log(session);
  }, [session]);

  return (
    <div className="">
      <header>
        <h1>Lorem ipsum</h1>
      </header>
      <main>
        {status === "authenticated" ? (
          <div>
            <p>Session expries in {session.expires}</p>
            <p>Welcome {session.user?.name}</p>
            <img
              src={session.user?.image ?? ``}
              alt=""
              style={{ borderRadius: "50px" }}
            />
            <div>
              <Logout />
            </div>
          </div>
        ) : (
          <Login />
        )}
      </main>

      <footer></footer>
    </div>
  );
}
