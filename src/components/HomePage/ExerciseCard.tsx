
import Image from 'next/image';
import React from 'react';
import { ExerciseType } from '../types/ExerciseType';
import Link from 'next/link';
import { Flame, Star } from 'lucide-react';
import { FiClock } from 'react-icons/fi';

const ExerciseCard = ({ exercise }: { exercise: ExerciseType }) => {
    return (
        <Link href={`/${exercise.id}`}>
            <div>
                <div className="w-full max-w-[460px] overflow-hidden rounded-2xl border border-gray-800 bg-[#15171e] text-white shadow-lg">

                    {/* Image */}
                    <div className="relative h-[260px] w-full">
                        <Image
                            src={exercise.image}
                            alt={exercise.name}

                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 460px"
                        />
                    </div>

                    {/* Content */}
                    <div className="p-7">

                        {/* Tags */}
                        <div className="mb-5 flex flex-wrap gap-2">
                            {exercise.muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="rounded-full bg-[#baff00] px-4 py-1 text-sm font-bold text-black"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>
                        
                        {/* Title */}
                        <h2 className="text-2xl font-black uppercase tracking-wide">
                            {exercise.name}
                        </h2>

                        {/* Subtitle */}
                        <p className="mt-2 text-gray-400">
                            {exercise.equipment}
                        </p>

                        {/* Divider */}
                        <div className="my-5 border-t border-gray-800" />

                        {/* Stats */}
                        <div className="flex items-center gap-5 text-sm text-gray-400">

                            <div className="flex items-center gap-2">
                                <FiClock />
                                <span>{exercise.duration} min</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Flame size={18} />
                                <span>{exercise.caloriesBurned} kcal</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Star size={18} />
                                <span>{exercise.rating}</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ExerciseCard;