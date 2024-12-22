import React from 'react';
import Link from 'next/link';

export default function Navbar(){
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href="/" className="navbar-brand">
        Swedish Hub
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link href="/myroad" className="nav-link">
              My Road
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/resources" className="nav-link">
              Resources
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );


}