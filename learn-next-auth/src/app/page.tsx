"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

import Login from "./components/Login";
import Logout from "./components/Logout";
import Header from "./components/Header";
import "./globals.css";

export default function Home() {
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log(session);
  }, [session]);

  return (
    <div className="">
      <Header />
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
