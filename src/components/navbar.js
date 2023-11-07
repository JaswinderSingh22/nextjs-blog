// Navbar.js
"use client";
import Image from "next/image";
import Link from "next/link";
import profileLogo from "../assets/profile2.jpeg";

const Navbar = () => {
  const profilePictureUrl = "/src/assets/profile.png";
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#0e58cf] text-white w-full h-16 flex items-center justify-between mb-2">
      <div className="h-8 w-8 bg-red-200 rounded-full overflow-hidden mr-3 ml-4">
        <Image src={profileLogo} alt="Profile" width="auto" height="auto" />
      </div>
      <nav>
        <ul className="flex gap-10 font-bold mr-5">
          <li
            onClick={() => scrollToSection("intro")}
            className="transition duration-300 transform hover:scale-110"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("skills")}
            className="transition duration-300 transform hover:scale-110"
          >
            Skills
          </li>
          {/* <li
            onClick={() => scrollToSection("intro")}
            className="transition duration-300 transform hover:scale-110"
          >
            About
          </li> */}
          <li
            onClick={() => scrollToSection("projects")}
            className="transition duration-300 transform hover:scale-110"
          >
            Projects
          </li>
          <li
            onClick={() => scrollToSection("experience")}
            className="transition duration-300 transform hover:scale-110"
          >
            Journey
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className="transition duration-300 transform hover:scale-110"
          >
            Contact Us
          </li>
          {/* Add more navigation items */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
