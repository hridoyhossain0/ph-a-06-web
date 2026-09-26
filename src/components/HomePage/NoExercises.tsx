'use client'
import React from 'react';

export default function NoExercises() {
  return (
    <div className="col-span-full mx-auto my-12 w-full max-w-xl rounded-2xl border border-zinc-800 bg-[#1c2229] p-8 text-center shadow-xl">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-amber-300">
        <svg 
          xmlns="http://w3.org" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="h-8 w-8"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
      </div>

      {/* Heading */}
      <h3 className="text-xl font-black uppercase tracking-tight text-white">
        Library <span className="text-lime-400">Empty</span>
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-400">
        We couldn't load the workout set right now. Check your internet connection or try refreshing the library page.
      </p>

      {/* Call to Action Retry Action Button */}
      <button 
        onClick={() => window.location.reload()}
        className="mt-5 inline-flex items-center gap-2 rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-300 transition hover:border-lime-400 hover:text-lime-400"
      >
        Reload Routine
      </button>
    </div>
  );
}
