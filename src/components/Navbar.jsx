import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50">

      {/* ================= NAVBAR ================= */}
      <nav className="flex items-center justify-between h-16 sm:h-20 px-5 sm:px-10 lg:px-20 xl:px-32">

        {/* Logo */}
        <a href="#" className="shrink-0">
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            className="w-28 sm:w-36 lg:w-40"
            alt="Logo"
          />
        </a>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden md:flex items-center gap-7 lg:gap-10 text-sm text-gray-700 dark:text-gray-200">

          <a
            href="#"
            className="hover:text-primary transition-colors duration-200"
          >
            Home
          </a>

          <a
            href="#Services"
            className="hover:text-primary transition-colors duration-200"
          >
            Services
          </a>

          <a
            href="#our-work"
            className="hover:text-primary transition-colors duration-200"
          >
            Our Work
          </a>

          <a
            href="#Contact-us"
            className="hover:text-primary transition-colors duration-200"
          >
            Contact Us
          </a>

          {/* Theme Toggle */}
          <ThemeToggleBtn
            theme={theme}
            setTheme={setTheme}
          />

        </div>

        {/* ================= CONNECT BUTTON ================= */}
        <a
          href="#Contact-us"
          className="hidden md:flex items-center gap-2 bg-primary text-white text-sm px-5 lg:px-6 py-2.5 rounded-full hover:scale-105 transition-transform duration-200"
        >
          Connect
          <img
            src={assets.arrow_icon}
            width={14}
            alt=""
          />
        </a>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          aria-label="Open menu"
        >
          <span className="text-2xl leading-none">☰</span>
        </button>

      </nav>

      {/* ================= MOBILE OVERLAY ================= */}
      <div
        onClick={closeSidebar}
        className={`
          fixed inset-0 bg-black/40 backdrop-blur-[2px] md:hidden
          transition-opacity duration-300
          ${
            isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
      />

      {/* ================= MOBILE SIDEBAR ================= */}
      <aside
        className={`
          fixed top-0 right-0 h-dvh
          w-[82%] max-w-[340px]
          bg-white dark:bg-gray-900
          shadow-2xl
          md:hidden
          transition-transform duration-300 ease-out
          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 dark:border-gray-800">

          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            className="w-32"
            alt="Logo"
          />

          <button
            onClick={closeSidebar}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Close menu"
          >
            <span className="text-xl">✕</span>
          </button>

        </div>

        {/* Sidebar Content */}
        <div className="flex flex-col px-6 py-8">

          {/* Menu Title */}
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
            Menu
          </p>

          {/* Navigation Links */}
          <div className="flex flex-col gap-2">

            <a
              href="#"
              onClick={closeSidebar}
              className="px-4 py-3.5 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary transition-all"
            >
              Home
            </a>

            <a
              href="#Services"
              onClick={closeSidebar}
              className="px-4 py-3.5 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary transition-all"
            >
              Services
            </a>

            <a
              href="#our-work"
              onClick={closeSidebar}
              className="px-4 py-3.5 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary transition-all"
            >
              Our Work
            </a>

            <a
              href="#Contact-us"
              onClick={closeSidebar}
              className="px-4 py-3.5 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary transition-all"
            >
              Contact Us
            </a>

          </div>

          {/* ================= THEME ================= */}
          <div className="mt-6 flex items-center justify-between px-4 py-4 rounded-xl bg-gray-50 dark:bg-gray-800">

            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Appearance
              </p>

              <p className="text-xs text-gray-400 mt-1">
                {theme === "dark" ? "Dark mode" : "Light mode"}
              </p>
            </div>

            <ThemeToggleBtn
              theme={theme}
              setTheme={setTheme}
            />

          </div>

          {/* ================= CONNECT ================= */}
          <a
            href="#Contact-us"
            onClick={closeSidebar}
            className="mt-6 flex items-center justify-center gap-2 bg-primary text-white py-3.5 rounded-xl hover:scale-[1.02] transition-transform"
          >
            Connect
            <img
              src={assets.arrow_icon}
              width={14}
              alt=""
            />
          </a>

        </div>

      </aside>

    </header>
  );
};

export default Navbar;