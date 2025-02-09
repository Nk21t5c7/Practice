// import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className = "bg-slate-200 p-10 sm:grid xl:grid-cols-[1fr_1200px_1fr] xl:justify-center">
      <div className=" px-6 headerContainer grid grid-cols-1 grid-rows-1 justify-items-center justify-center sm:justify-items-stretch items-center xl:max-w-[1200px] xl:col-start-2 xl:col-end-3 ">
        <h1 className=" text-4xl font-bold py-2 row-start-1 row-end-2">
          Weather
        </h1>
        <nav className="row-start-1 row-end-2">
          <ul className="flex gap-8 items-center">
            <li className="hover:text-blue-600">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-blue-600">
              <Link to="/place">City</Link>
            </li>
            <li className="hover:text-blue-600">
              <Link to="/add">Add</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
