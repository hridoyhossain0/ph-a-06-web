'use client'
import Image from "next/image";
import { ExerciseType } from "../types/ExerciseType";
import { FiClock, FiX } from "react-icons/fi";
import { TbFlameFilled } from "react-icons/tb";
import { FaCheck, FaStar } from "react-icons/fa";
import Link from "next/link";

interface ExerciseCardProps {
  exercise: ExerciseType;
  // handleDone: (exercise: ExerciseType) => void;
  // handleRemove: (exercise: ExerciseType) => void;
}

const ExerciseAddPlanCard = ({
  exercise,
  // handleDone,
  // handleRemove,
}: ExerciseCardProps) => {
  return (
    <div className="flex items-center justify-between gap-5 rounded-2xl border border-gray-800 bg-[#14171d] p-4 text-white">

      {/* Left Side */}
      <div className="flex min-w-0 items-center gap-4">

        {/* Image */}
        <div className="h-[88px] w-[160px] shrink-0 overflow-hidden rounded-xl">
          <Image
            src={exercise.image}
            height={200}
            width={400}
            alt={exercise.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Exercise Information */}
        <div className="min-w-0">
          <h3 className="text-lg font-bold uppercase">
            {exercise.name}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {exercise.equipment}
          </p>

          {/* Stats */}
          <div className="mt-3 flex items-center gap-4 text-sm text-gray-300">

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
      <div className="flex shrink-0 items-center gap-3">

        {/* View Details */}
          <Link href={`../${exercise.id}`}>
            <button
              className="rounded-full border border-gray-700 px-5 py-2.5 text-sm
                      transition hover:border-gray-500 hover:bg-gray-800"
            >
              View Details
            </button>
          </Link>

          {/* Mark as Done */}

          <button
            // onClick={() => handleDone(exercise)}
            className="flex items-center gap-2 rounded-full bg-lime-400 px-5 py-2.5
                     text-sm font-medium text-black transition hover:bg-lime-300"
          >
            <FaCheck size={12} />
            Mark as Done
          </button>
        


        {/* Remove */}
        <button
          // onClick={() => handleRemove(exercise)}
          className="ml-2 text-xl text-gray-500 transition hover:text-white"
        >
          <FiX />
        </button>
      </div>
    </div>
  );
};

export default ExerciseAddPlanCard;