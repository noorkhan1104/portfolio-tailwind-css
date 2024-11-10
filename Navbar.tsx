import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className="container pt-8">
      <div className="flex justify-between items-center">
        <div className="text-xl font-medium">Noor</div>
        <ul className="gap-10 lg:gap-16 hidden md:flex">
          <li className="menuLink">
            <Link href="/hero">Home</Link>
          </li>
          <li className="menuLink">
            <a href="/about">About</a>
          </li>
          <li className="menuLink">
            <a href="#project">Project</a>
          </li>
          <li className="menuLink">
            <a href="#skills">Skills</a>
          </li>
          <li className="menuLink">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
