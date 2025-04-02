import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="">
      <header className="p-4 flex items-center justify-between ">
        <h1 className="font-bold text-3xl uppercase tracking-wide"><Link href="/">animals</Link></h1>
        <nav>
          <ul>
            <li>
              <Link href="/dataset">Data</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
