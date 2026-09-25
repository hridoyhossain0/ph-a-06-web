'use client';
import Link from 'next/link';
import Logo from '../../../public/logo.png';
import Image from 'next/image';
import { useContext } from 'react';
import { ExerciseContext } from '@/context/ExerciseContext';
import { usePathname } from 'next/navigation';

const NavBar = () => {
    const pathname = usePathname();
    const { addPlan, addSave, setActiveTab } = useContext(ExerciseContext); // Added setActiveTab

    const linkStyle = "px-4 py-2 text-white transition-colors "; 
    const activeStyle = "bg-[rgba(0,160,0,0.5)] rounded-full font-medium text-yellow-400";

    const renderLinks = () => (
        <>
            <li className={`${linkStyle} ${pathname === "/" ? activeStyle : ""}`}>
                <Link href="/">Workouts</Link>
            </li>
            <li className={`${linkStyle} ${pathname === "/myPlan" ? activeStyle : ""}`}>
                <Link href="/myPlan">My Plan</Link>
            </li>
        </>
    );

    return (
        <nav className='bg-black shadow fixed top-0 left-0 right-0 z-50 w-full py-1.5 lg:py-3 shadow-[rgba(275,275,275,.2)]'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content text-xl bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {renderLinks()}
                        </ul>
                    </div>
                    <div className='w-10 h-10'>
                        <Image src={Logo} alt='Logo Image' height={200} width={200} />
                    </div>
                    <Link href='/' className="btn btn-ghost text-xl text-white">FITLOG</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-xl px-1">
                        {renderLinks()}
                    </ul>
                </div>
                <div className="navbar-end text-xl gap-7 text-white">
                    {/* Updates context to 'today' on click */}
                    <Link href="/myPlan" onClick={() => setActiveTab('today')}>
                        <button>Plan <span className='rounded-full px-3 text-black ml-2.5 font-bold py-1 bg-amber-300'>{addPlan.length}</span></button>
                    </Link>

                    {/* Updates context to 'saved' on click */}
                    <Link href="/myPlan" onClick={() => setActiveTab('saved')}>
                        <button>Saved <span className='rounded-full px-3 text-black ml-2.5 font-bold py-1 bg-amber-300'>{addSave.length}</span></button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
