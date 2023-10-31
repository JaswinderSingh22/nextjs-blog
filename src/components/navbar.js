// Navbar.js
"use client";
import Image from "next/image";
import Link from "next/link";
import profileLogo from "../assets/profile2.jpeg"

const Navbar = () => {

  const profilePictureUrl = "/src/assets/profile.png";
  return (
    <div className="bg-black text-white w-full h-12 flex items-center justify-between mb-2">
      <div className="h-8 w-8 bg-red-200 rounded-full overflow-hidden mr-3 ml-4">
        <Image src={profileLogo} alt="Profile" width="auto" height="auto" />
      </div>
      <nav>
        <ul className="flex gap-5 mr-5">
          <li className="transition duration-300 transform hover:scale-110">
            <Link href="/">Home</Link>
          </li>
          <li className="transition duration-300 transform hover:scale-110">
            <Link href="/about">About</Link>
          </li>
          <li className="transition duration-300 transform hover:scale-110">
            <Link href="/experience">Experience</Link>
          </li>
          <li className="transition duration-300 transform hover:scale-110">
            <Link href="/skills">Skills</Link>
          </li>
          <li className="transition duration-300 transform hover:scale-110">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="transition duration-300 transform hover:scale-110">
            <Link href="/contact">Contact Us</Link>
          </li>
          {/* Add more navigation items */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
