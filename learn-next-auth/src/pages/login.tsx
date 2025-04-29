import React from "react";
import Form from "next/form";
import { handleLogin } from "@/app/components/HandleLogin";
import "../app/globals.css";

const EmailLogin = () => {
  return (
    <div className="w-full min-h-screen flex ">
      <div className="w-[40%] p-[2%] m-auto border-2">
        <h2 className="text-2xl text-center ">LOGIN</h2>
        <Form
          action={handleLogin}
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
      </div>
    </div>
  );
};

export default EmailLogin;
