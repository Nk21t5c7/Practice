import React from "react";
import Link from "next/link";
import '@fortawesome/fontawesome-svg-core/styles.css'


const Header = () => {
  return (
    <header className="flex justify-between border-b-2 lg:border-none lg:flex-col gap-20 p-4 lg:h-[100vh] lg:w-[30vw] lg:items-center lg:justify-center">
      <h1 className="text-4xl">DOGS</h1>
      <nav className="text-2xl">
        <ul className=" flex flex-row gap-6  lg:flex-wrap lg:flex-col lg:gap-3">
          <li className="hover:text-pink-400  transition-color duration-500 alternate ">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-pink-400 transition-color duration-500 alternate">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
