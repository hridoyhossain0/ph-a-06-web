import Image from 'next/image';
import Logo from '../../../public/logo.png';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='container mx-auto py-4 bg-black '>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
                <aside className="grid-flow-col items-center">
                    <div className='w-10 h-10'>
                        <Image src={Logo} alt='Logo Image' height={200} width={200} />

                    </div>
                    <Link href='/' className="btn btn-ghost text-xl">FITLOG</Link>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <p className='text-xl'>© {new Date().getFullYear()} FitLog — Workout Library. Train hard, log honest. </p>

                </nav>
            </footer>
        </div>
    );
};

export default Footer;