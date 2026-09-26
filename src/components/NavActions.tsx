'use client';

import Link from 'next/link';
import { useContext } from 'react';
import { ExerciseContext } from '@/context/ExerciseContext';

const NavActions = () => {
  const context = useContext(ExerciseContext);

  if (!context) return null;

  const { addPlan, addSave, setActiveTab } = context;

  return (
    <>
      {/* PLAN BUTTON */}
      <Link href="/my-plan" onClick={() => setActiveTab('today')} className="transition hover:text-white">
        <button type="button" className="flex items-center">
          <span>Plan</span>
          <span className="ml-2 w-8 h-8 flex items-center justify-center rounded-full bg-[#ccff00] text-xl font-bold text-black">
            {addPlan.length}
          </span>
        </button>
      </Link>

      {/* SAVED BUTTON */}
      <Link href="/my-plan" onClick={() => setActiveTab('saved')} className="transition hover:text-white">
        <button type="button" className="flex items-center">
          <span>Saved</span>
          <span className="ml-2 w-8 h-8 flex items-center justify-center rounded-full bg-transparent border-[#42424d] border-2 text-xl font-bold text-gray-400">
            {addSave.length}
          </span>
        </button>
      </Link>
    </>
  );
};

export default NavActions;
