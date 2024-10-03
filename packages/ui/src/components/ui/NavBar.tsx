// src/NavBar.js
'use-client'
import './NavBar.css';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
        <Link href="/">
          Sign Register
        </Link>
        </li>
        <li>
        <Link href="/todaysregister">
            View Todays Register
        </Link>
        </li>
        <li>
          <a href="/historyofregister">History Of Register</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
