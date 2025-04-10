import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
      <header className="p-4 flex items-center justify-between ">
        <h1 className="font-bold text-3xl uppercase tracking-wide"><Link href="/">animals</Link></h1>
        <nav>
          <ul className="list-none">
            <li>
              <Link href="/dataset">Data</Link>
            </li>
          </ul>
        </nav>
      </header>
  );
};
