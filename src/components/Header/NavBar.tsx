import Link from 'next/link';

import Logo from '../../../public/logo.png';
import Image from 'next/image';

const links = <>
    <li><Link href="">Workouts</Link ></li>
    <li><Link href="">My Plan</Link ></li>
</>
const NavBar = () => {
    return (
        <nav className=' bg-black shadow  py-4 shadow-[rgba(275,275,275,.2)]'>
            <div className="navbar container mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content text-xl bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className='w-10 h-10'>
                        <Image src={Logo} alt='Logo Image' height={200} width={200} />

                    </div>
                    <Link href='/' className="btn btn-ghost text-xl">FITLOG</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-xl px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end text-xl gap-7">
                    <button>Plan</button>
                    <button>Saved</button>

                </div>
            </div>
        </nav>
    );
};

export default NavBar;