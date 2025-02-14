// import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className = "bg-slate-200 py-10 px-6 ">
      <div className="headerContainer basis-full flex nowrap items-center xl:max-w-[1200px] xl:m-auto xl:p-6">
        <h1 className=" text-4xl font-bold basis-full">
          Weather
        </h1>
        <nav className="">
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
