import { Link } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-5 md:px-10 border-none shadow-md">
      <Link 
      to="/" 
      className="flex items-center">
        <img width={80} src="./logo.png" alt="" />
        <h2 className="font-bold text-2xl max-sm:hidden">Filmania</h2>
      </Link>
      <Link
        to="/create"
        className="border rounded-full py-1 px-5 hover:bg-black hover:text-white transition"
      >
        Film oluştur
      </Link>
    </header>
  );
};

export default Header;
