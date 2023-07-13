"use client";

import { Button, Navbar, Dropdown } from "flowbite-react";
import "../App.css";

export default function Nav() {
  return (
    <div className="nav">
      <Navbar fluid rounded className="navv">
        <Navbar.Brand>
          <img
            alt="Flowbite React Logo"
            className="mr-4 h-8 sm:h-14"
            src="img/logo.png"
          />
          <span
            id="nav-tit"
            className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"
          >
            MKCS DigitTech <span className="sol">solutions</span>
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" className="text-xl">
            Home
          </Navbar.Link>
          <Navbar.Link href="/about" className="text-xl">
            About
          </Navbar.Link>
          <Navbar.Link href="#" className="text-xl">
            Services
          </Navbar.Link>
          <Navbar.Link href="#" className="text-xl">
            Contact
          </Navbar.Link>
          <Navbar.Link href="#" className="text-xl">
            Team
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
