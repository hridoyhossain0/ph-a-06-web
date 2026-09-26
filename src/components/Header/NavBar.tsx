'use client';

import Link from 'next/link';
import Logo from '../../../public/logo.png';
import Image from 'next/image';
import { useContext } from 'react';
import { ExerciseContext } from '@/context/ExerciseContext';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();

  // Get context
  const context = useContext(ExerciseContext);

  // Safety check
  if (!context) return null;

  const {
    addPlan,
    addSave,
    setActiveTab,
  } = context;

  const linkStyle =
    'px-4 py-2 text-white transition-colors';

  const activeStyle =
    'bg-[rgba(0,160,0,0.2)] rounded-full font-medium text-yellow-400';

  // Navigation links
  const renderLinks = () => (
    <>
      {/* Workouts */}
      <li
        className={`${linkStyle} ${
          pathname === '/' ? activeStyle : ''
        }`}
      >
        <Link href="/">Workouts</Link>
      </li>

      {/* My Plan */}
      <li
        className={`${linkStyle} ${
          pathname === '/my-plan' ? activeStyle : ''
        }`}
      >
        <Link
          href="/my-plan"
          onClick={() => setActiveTab('today')}
        >
          My Plan
        </Link>
      </li>
    </>
  );

  // Go to Today's Plan
  const handlePlanClick = () => {
    setActiveTab('today');
  };

  // Go to Saved
  const handleSavedClick = () => {
    setActiveTab('saved');
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 w-full bg-black py-1.5 shadow shadow-[rgba(275,275,275,.2)] lg:py-3">

      <div className="navbar container mx-auto">

        {/* ========================= */}
        {/* LEFT SIDE */}
        {/* ========================= */}

        <div className="navbar-start">

          {/* Mobile Menu */}
          <div className="dropdown">

            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://w3.org"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 text-xl shadow"
            >
              {renderLinks()}
            </ul>

          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center">

            <div className="h-10 w-10">
              <Image
                src={Logo}
                alt="FITLOG Logo"
                width={200}
                height={200}
                className="h-full w-full object-contain"
              />
            </div>

          </Link>

          {/* Brand Name */}
          <Link
            href="/"
            className="btn btn-ghost text-xl text-white"
          >
            FITLOG
          </Link>

        </div>

        {/* ========================= */}
        {/* CENTER - DESKTOP MENU */}
        {/* ========================= */}

        <div className="navbar-center hidden lg:flex">

          <ul className="menu menu-horizontal px-1 text-xl">
            {renderLinks()}
          </ul>

        </div>

        {/* ========================= */}
        {/* RIGHT SIDE */}
        {/* ========================= */}

        <div className="navbar-end items-center gap-5 text-lg text-gray-300 sm:gap-6 lg:gap-8 font-medium">

          {/* ========================= */}
          {/* PLAN BUTTON */}
          {/* ========================= */}

          <Link
            href="/my-plan"
            onClick={handlePlanClick}
            className="transition hover:text-white"
          >
            <button
              type="button"
              className="flex items-center"
            >
              <span>Plan</span>

              <span className="ml-2 w-8 h-8 flex items-center justify-center rounded-full bg-[#ccff00] text-xl font-bold text-black">
                {addPlan.length}
              </span>
            </button>
          </Link>

          {/* ========================= */}
          {/* SAVED BUTTON */}
          {/* ========================= */}

          <Link
            href="/my-plan"
            onClick={handleSavedClick}
            className="transition hover:text-white"
          >
            <button
              type="button"
              className="flex items-center"
            >
              <span>Saved</span>

              <span className="ml-2 w-8 h-8 flex items-center justify-center rounded-full bg-transparent border-[#42424d] border-2 text-xl font-bold text-gray-400">
                {addSave.length}
              </span>
            </button>
          </Link>

        </div>

      </div>

    </nav>
  );
};

export default NavBar;
