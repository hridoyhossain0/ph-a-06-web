'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { ExerciseContext } from '@/context/ExerciseContext';

const NavLinks = () => {
  const pathname = usePathname();
  const context = useContext(ExerciseContext);

  const linkStyle = 'px-4 py-2 text-white transition-colors';
  const activeStyle = 'bg-[rgba(0,160,0,0.2)] rounded-full font-medium text-yellow-400';

  const handlePlanClick = () => {
    if (context) context.setActiveTab('today');
  };

  return (
    <>
      <li className={`${linkStyle} ${pathname === '/' ? activeStyle : ''}`}>
        <Link href="/">Workouts</Link>
      </li>
      <li className={`${linkStyle} ${pathname === '/my-plan' ? activeStyle : ''}`}>
        <Link href="/my-plan" onClick={handlePlanClick}>
          My Plan
        </Link>
      </li>
    </>
  );
};

export default NavLinks;
