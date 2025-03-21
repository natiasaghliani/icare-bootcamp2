"use client";

import Link from "next/link";
// import React from "react";

export default () => {
  return (
    <header className="bg-pink-500 p-6 flex justify-between items-center">
      <div className="text-white text-2xl font-bold">Bootcamp</div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link className="text-white text-lg hover:underline" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-white text-lg hover:underline" href="/todo">
              Todo
            </Link>
          </li>
          <li>
            <Link
              className="text-white text-lg hover:underline"
              href="/counter"
            >
              Counter
            </Link>
          </li>
          <li>
            <Link className="text-white text-lg hover:underline" 
            href="/login">
              Log In
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
