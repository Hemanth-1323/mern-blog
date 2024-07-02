/* import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const path = useLocation().pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Navbar className="border-b-2 flex justify-between items-center px-4">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white flex items-center"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Hemanths
        </span>
        <span className="ml-2">Blog</span>
      </Link>
      <form className="hidden lg:block">
        <div className="relative">
          <TextInput type="text" placeholder="Search..." className="pr-10" />
          <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </form>
      <div className="flex gap-2 items-center">
        <Button className="w-12 h-10 hidden sm:block" color="gray">
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button color="gray">Sign In</Button>
        </Link>
        <Button
          className="w-12 h-10 lg:hidden"
          color="gray"
          onClick={handleMobileMenuToggle}
        >
          <AiOutlineSearch />
        </Button>
        <Navbar.Toggle onClick={handleMobileMenuToggle} />
      </div>
      <div
        className={`lg:flex lg:items-center ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <Navbar.Collapse>
          <Navbar.Link as={"div"} className="block lg:inline-block">
            <Link
              to="/"
              className={`block px-3 py-2 rounded ${
                path === "/" ? "text-red-500" : ""
              }`}
            >
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link as={"div"} className="block lg:inline-block">
            <Link
              to="/about"
              className={`block px-3 py-2 rounded ${
                path === "/about" ? "text-red-500" : ""
              }`}
            >
              About
            </Link>
          </Navbar.Link>
          <Navbar.Link as={"div"} className="block lg:inline-block">
            <Link
              to="/projects"
              className={`block px-3 py-2 rounded ${
                path === "/projects" ? "text-red-500" : ""
              }`}
            >
              Projects
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
 */
/* import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2 flex">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Hemanths
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray">
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray">
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button color="gray">Sign In</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
 */
/* 
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const path = useLocation().pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="border-b-2 flex justify-between items-center px-4 py-3 relative">
      <Link
        to="/"
        className="flex items-center space-x-2 text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Hemanth's
        </span>
        <span>Blog</span>
      </Link>

      <div className="hidden sm:flex lg:flex lg:items-center lg:space-x-4 flex-1 ml-4">
        <Link
          to="/"
          className={`block px-3 py-2 rounded-lg ${
            path === "/"
              ? "bg-gray-100 text-gray-900"
              : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`block px-3 py-2 rounded-lg ${
            path === "/about"
              ? "bg-gray-100 text-gray-900"
              : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          }`}
        >
          About
        </Link>
        <Link
          to="/projects"
          className={`block px-3 py-2 rounded-lg ${
            path === "/projects"
              ? "bg-gray-100 text-gray-900"
              : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          }`}
        >
          Projects
        </Link>
      </div>

      <form className="flex-1 hidden lg:block">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </form>

      <div className="flex items-center space-x-4 ml-auto hidden sm:flex">
        <button className="w-12 h-10 flex items-center justify-center bg-gray-200 rounded-full">
          <FaMoon className="text-gray-600" />
        </button>
        <Link to="/sign-in">
          <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800">
            Sign In
          </button>
        </Link>
      </div>

      <button
        className="sm:hidden w-12 h-10 flex items-center justify-center bg-gray-200 rounded-full"
        onClick={handleMobileMenuToggle}
      >
        <svg
          className="w-6 h-6 text-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg mt-1 sm:hidden">
          <div className="flex flex-col space-y-2 py-2">
            <Link
              to="/"
              className={`block px-4 py-2 rounded-lg ${
                path === "/"
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-4 py-2 rounded-lg ${
                path === "/about"
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={`block px-4 py-2 rounded-lg ${
                path === "/projects"
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              Projects
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
 */

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const path = useLocation().pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="border-b-2 flex justify-between items-center px-4 py-3 relative">
      <Link
        to="/"
        className="flex items-center space-x-2 text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Hemanth's
        </span>
        <span>Blog</span>
      </Link>

      <div className="hidden sm:flex lg:flex lg:items-center lg:space-x-4 flex-1 ml-4">
        <Link
          to="/"
          className={`block px-3 py-2 rounded-lg ${
            path === "/"
              ? "bg-gray-100 text-gray-900"
              : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`block px-3 py-2 rounded-lg ${
            path === "/about"
              ? "bg-gray-100 text-gray-900"
              : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          }`}
        >
          About
        </Link>
        <Link
          to="/projects"
          className={`block px-3 py-2 rounded-lg ${
            path === "/projects"
              ? "bg-gray-100 text-gray-900"
              : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          }`}
        >
          Projects
        </Link>
      </div>

      <form className="flex-1 hidden lg:block">
        <div className="relative w-3/4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-1.5 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </form>

      <div className="flex items-center space-x-4 ml-auto hidden sm:flex">
        <button className="w-12 h-10 flex items-center justify-center bg-gray-200 rounded-full">
          <FaMoon className="text-gray-600" />
        </button>
        <Link to="/sign-in">
          <button className="px-4 py-2 rounded-lg bg-blue-400 text-gray-100">
            Sign In
          </button>
        </Link>
      </div>

      <button
        className="sm:hidden w-12 h-10 flex items-center justify-center bg-gray-200 rounded-full"
        onClick={handleMobileMenuToggle}
      >
        <svg
          className="w-6 h-6 text-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg mt-1 sm:hidden">
          <div className="flex flex-col space-y-2 py-2">
            <Link
              to="/"
              className={`block px-4 py-2 rounded-lg ${
                path === "/"
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-4 py-2 rounded-lg ${
                path === "/about"
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={`block px-4 py-2 rounded-lg ${
                path === "/projects"
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              Projects
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
