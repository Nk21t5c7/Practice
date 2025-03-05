import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-col gap-20 p-4 h-[100vh] w-[30vw] items-center ">
      <h1 className="text-4xl">DOGS</h1>
      <nav>
        <ul>
          <li className="hover:text-pink-400 transition-colors duration-500 ease-in-out">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-pink-400 transition-colors duration-500 ease-in-out">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
