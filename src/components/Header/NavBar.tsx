import Link from 'next/link';
import Logo from '@/app/favicon.ico';
import Image from 'next/image';
import NavLinks from '../NavLinks';
import NavActions from '../NavActions';

const NavBar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 w-full bg-black py-1.5 shadow shadow-[rgba(275,275,275,.2)] lg:py-2">
      <div className="navbar container mx-auto">
        
        {/* LEFT SIDE */}
        <div className="navbar-start">
          {/* Mobile Menu & NavLinks Wrapper */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://w3.org"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={-1} className="menu menu-sm dropdown-content z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 text-xl shadow">
              <NavLinks />
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
          <Link href="/" className="btn btn-ghost text-xl text-white">
            FITLOG
          </Link>
        </div>

        {/* CENTER - DESKTOP MENU */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            <NavLinks />
          </ul>
        </div>

        {/* RIGHT SIDE (Dynamic Counts & Interactivity) */}
        <div className="navbar-end items-center gap-5 text-lg text-gray-300 sm:gap-6 lg:gap-8 font-medium">
          <NavActions />
        </div>

      </div>
    </nav>
  );
};

export default NavBar;
