import React from "react";
import Form from "next/form";
import Link from "next/link";
import "../app/globals.css";
import { handleSignUp } from "@/app/components/HandleSignUp";

const EmailSignUp = () => {
  return (
    <div className="w-full min-h-screen flex ">
      <div className="w-[40%] p-[2%] m-auto border-2">
        <h2 className="text-2xl text-center ">Sign Up</h2>
        <Form
          action={handleSignUp}
          style={{
            display: "grid",
            gap:"2%"
          }}
        >
          <label htmlFor="email">Email</label>
          <input id="email" type="email" className="border-1"></input>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" className="border-1"></input>
          <button type="submit" className="border-1 bg-gray-700 text-white hover:bg-gray-300 hover:text-black my-[2%] py-[2%] rounded-xl ">Log In</button>
        </Form>

        <Link href = "/signup" />
      </div>
    </div>
  );
};

export default EmailSignUp;
