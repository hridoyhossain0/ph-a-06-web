'use client';

import Image from "next/image";
import { ExerciseType } from "../types/ExerciseType";
import { FiClock, FiX } from "react-icons/fi";
import { TbFlameFilled } from "react-icons/tb";
import { FaCheck, FaStar } from "react-icons/fa";
import Link from "next/link";

interface ExerciseCardProps {
  exercise: ExerciseType;
  handleDone: (exercise: ExerciseType) => void;
  handleRemove: (exercise: ExerciseType) => void;
  handleViewDetails: (exercise: ExerciseType) => void; 
  activeTab: 'today' | 'saved';
}

const ExerciseAddPlanCard = ({
  exercise,
  handleDone,
  handleRemove,
  handleViewDetails, 
  activeTab,
}: ExerciseCardProps) => {
  return (
    <div className="relative flex flex-col gap-4 rounded-2xl border border-gray-800 bg-[#14171d] p-4 text-white sm:flex-row sm:items-center sm:justify-between sm:gap-5">

      {/* Remove Button - Mobile */}
      <button
        type="button"
        onClick={() => handleRemove(exercise)}
        className="absolute right-4 top-4 text-xl text-gray-500 transition hover:text-white sm:hidden"
        aria-label="Remove exercise"
      >
        <FiX />
      </button>

      {/* Left Side */}
      <div className="flex min-w-0 flex-col gap-4 xs:flex-row xs:items-center sm:flex-row sm:gap-4">

        {/* Image */}
        <div className="h-[120px] w-full shrink-0 overflow-hidden rounded-xl xs:h-[100px] xs:w-[150px] sm:h-[88px] sm:w-[160px]">
          <Image
            src={exercise.image}
            height={200}
            width={400}
            alt={exercise.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Exercise Information */}
        <div className="min-w-0 pr-6 xs:pr-0">
          <h3 className="text-base font-bold uppercase tracking-wide sm:text-lg">
            {exercise.name}
          </h3>

          <p className="mt-0.5 text-xs text-gray-500 sm:text-sm">
            {exercise.equipment}
          </p>

          {/* Stats */}
          <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-gray-300 sm:mt-3 sm:text-sm">

            {/* Duration */}
            <div className="flex items-center gap-1.5">
              <FiClock className="text-lime-400" />
              <span>{exercise.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1.5">
              <TbFlameFilled className="text-lime-400" />
              <span>{exercise.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <FaStar className="text-lime-400" />
              <span>{exercise.rating}</span>
            </div>

          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex shrink-0 flex-col-reverse gap-2 border-t border-gray-800/60 pt-2 xs:flex-row xs:items-center sm:flex-row sm:gap-3 sm:border-0 sm:pt-0">

        {/* View Details */}
        <Link
          href={`/${exercise.id}`}
          onClick={() => handleViewDetails(exercise)}
          className="w-full xs:w-auto"
        >
          <button
            type="button"
            className="w-full whitespace-nowrap rounded-full border border-gray-700 px-5 py-2.5 text-sm transition hover:border-gray-500 hover:bg-gray-800 sm:w-auto"
          >
            View Details
          </button>
        </Link>

        {/* Mark as Done - Only Today's Plan */}
        {activeTab === 'today' && (
          <button
            type="button"
            onClick={() => handleDone(exercise)}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-lime-400 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-lime-300 sm:w-auto"
          >
            <FaCheck size={12} />
            <span className="w-25 text-md">Mark as Done</span>
          </button>
        )}

        {/* Remove Button - Desktop */}
        <button
          type="button"
          onClick={() => handleRemove(exercise)}
          className="ml-2 hidden shrink-0 text-xl text-gray-500 transition hover:text-white sm:block"
          aria-label="Remove exercise"
        >
          <FiX />
        </button>

      </div>
    </div>
  );
};

export default ExerciseAddPlanCard;
