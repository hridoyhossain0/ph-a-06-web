'use client'

import Link from 'next/link'; 
import { FiArrowLeft, FiHome } from 'react-icons/fi';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black px-4 mt-25 py-10 text-white">

      <div className="mx-auto flex min-h-[85vh] max-w-5xl items-center justify-center">

        <div className="w-full rounded-3xl border border-zinc-800 bg-[#1c2229] px-6 py-16 text-center shadow-2xl sm:px-10 md:px-16">

          {/* 404 */}
          <div className="mb-6">
            <h1 className="text-[100px] font-black leading-none tracking-tighter text-lime-400 sm:text-[150px] md:text-[190px]">
              404
            </h1>
          </div>

          {/* Small Label */}
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Workout Not Found
          </p>

          {/* Heading */}
          <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
            Looks Like This Set
            <br />
            <span className="text-lime-400">
              Went Missing.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            The workout or page you're looking for doesn't exist.
            Head back to the workout library and choose your next
            exercise.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

            {/* Home */}
            <Link
              href="/"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-300 px-6 py-3 text-sm font-bold uppercase text-black transition hover:bg-lime-400 sm:w-auto"
            >
              <FiHome size={17} />
              Workout Library
            </Link>

            {/* Back */}
            <button
              onClick={() => window.history.back()}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-700 px-6 py-3 text-sm font-bold uppercase text-gray-300 transition hover:border-lime-400 hover:text-lime-400 sm:w-auto"
            >
              <FiArrowLeft size={17} />
              Go Back
            </button>

          </div>

          {/* Bottom Branding */}
          <div className="mt-12 border-t border-zinc-800 pt-6">

            <p className="text-lg font-black tracking-wide">
              <span className="text-lime-400">FIT</span>
              <span className="text-white">LOG</span>
            </p>

            <p className="mt-1 text-xs uppercase tracking-widest text-gray-600">
              Train with intent. Log every set.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
};

