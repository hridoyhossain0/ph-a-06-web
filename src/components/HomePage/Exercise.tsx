import React from 'react';
import ExerciseCard from './ExerciseCard';
import { ExerciseType } from '../types/ExerciseType';

interface ExerciseTypeProps {
    exercises: ExerciseType[]
}

const Exercise = ({ exercises }: ExerciseTypeProps) => {
    return (
        <div id="library" className='container mx-auto pt-24 mt-6'>

            <div className='space-y-2.5 my-6'>
                <h1 className='text-4xl font-bold'>THE LIBRARY</h1>
                <p className='text-xl text-[rgba(275,275,275,.7)]'>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className='grid grid-cols-1 mb-10 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    exercises.map((exercise: ExerciseType) => (
                        <ExerciseCard key={exercise.id} exercise={exercise} />
                    ))
                }
            </div>
        </div>
    );
};

export default Exercise;
