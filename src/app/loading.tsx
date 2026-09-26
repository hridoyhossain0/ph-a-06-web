import React from 'react';

export default function HomeLoading() {
  // Generates 6 mock grid cards to show while the API payload loads
  const skeletonCards = Array.from({ length: 6 });

  return (
    <div className="container mx-auto px-4 mt-24 mb-10 text-white">
      
      {/* 1. Header Skeleton Track */}
      <div className="space-y-3 my-6 animate-pulse">
        <div className="h-9 w-52 bg-zinc-800 rounded-lg" />
        <div className="h-5 w-80 bg-zinc-900 rounded-md" />
      </div>

      {/* 2. Grid Cards Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skeletonCards.map((_, index) => (
          <div 
            key={index} 
            className="flex flex-col gap-4 rounded-2xl border border-zinc-900 bg-[#14171d] p-4 animate-pulse"
          >
            {/* Image Placeholder */}
            <div className="w-full h-[220px] bg-zinc-900 rounded-xl" />

            {/* Muscle Group Badges Track */}
            <div className="flex gap-2 mt-1">
              <div className="h-6 w-14 bg-zinc-800 rounded-full" />
              <div className="h-6 w-14 bg-zinc-800 rounded-full" />
            </div>

            {/* Title & Equipment Text Block */}
            <div className="space-y-2.5 mt-1">
              <div className="h-6 w-3/4 bg-zinc-800 rounded-md" />
              <div className="h-4 w-1/3 bg-zinc-900 rounded-md" />
            </div>

            {/* Divider Border Line */}
            <div className="border-t border-zinc-900/60 my-1" />

            {/* Metrics Info Footer Row (Duration, Calories, Rating) */}
            <div className="flex items-center gap-4 pb-2">
              <div className="h-4 w-12 bg-zinc-900 rounded-md" />
              <div className="h-4 w-16 bg-zinc-900 rounded-md" />
              <div className="h-4 w-8 bg-zinc-900 rounded-md" />
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
