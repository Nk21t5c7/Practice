import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-col gap-20 p-6 h-[100vh] w-[30vw]">
      <h1 className="text-4xl">DOGS</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
