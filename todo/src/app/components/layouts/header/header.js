import React from "react";
import Nav from './Nav';

const Header = () => {
  return (
    <header className="flex justify-between p-6 bg-lime-200 h-[15vh]">
      <h1 className="text-3xl">
        Todo
      </h1>
      <Nav />


    </header>
  );
};

export default Header;
