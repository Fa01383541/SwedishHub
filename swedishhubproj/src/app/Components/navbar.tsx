 
'use client';
import React from 'react';
import Link from 'next/link';

export default function Navbar(){
    return (
    <div>
      {/* Navbar amarillo */}
      <div className="bg-yellow-500 p-3
        shadow-md">
        <nav className="container mx-auto">
          <ul className="flex justify-end text-sm text-white">
            <li>
              <Link href="#" className="hover:underline">Español 
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Navbar Azul */}
      <div className="bg-blue-500 p-4 shadow-md">
        <nav className="container mx-auto p-4">
          <ul className="flex justify-between items-center text-white">
            <li className="mr-auto">
              <Link href="/" className="hover:underline">
              Home
              </Link>
            </li>
            <li className="ml-8">
              <Link href="blog" className="hover:underline">
              Blog
              </Link>
            </li>
            <li className="ml-8">
              <Link href="learnguide" className="hover:underline">
              Learning Guide
              </Link>
            </li>
            <li className="ml-8">
              <Link href="myroad" className="hover:underline">
              My Road
              </Link>
            </li>
            <li className="ml-8">
              <Link href="resources" className="hover:underline">
              Resources
              </Link>
            </li>
          </ul>
        </nav>  
      </div>
    </div>
  );
}