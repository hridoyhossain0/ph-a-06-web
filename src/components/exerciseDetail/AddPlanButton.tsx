'use client'
import React, { useContext } from 'react';
import { ExerciseType } from '../types/ExerciseType';
import { ExerciseContext } from '@/context/ExerciseContext';

interface ExerciseProps {
  exercise: ExerciseType
}

const AddPlanButton = ({ exercise }: ExerciseProps) => {

  const { addPlan, setAddPlan } = useContext(ExerciseContext)


  const handleAddPlan = () => {
    const isAlreadyAdded = addPlan.some(plan => plan.id === exercise.id);

    if (!isAlreadyAdded) {
      setAddPlan([...addPlan, exercise]);
    } else {
      setAddPlan(addPlan.filter(plan => plan.id !== exercise.id))
    }
  };
  return (
    <button className="rounded-lg bg-lime-400 px-5 py-3 text-sm font-bold text-black hover:bg-lime-300" onClick={() => handleAddPlan()}>
      📅 Add to today's plan
    </button>
  );
};

export default AddPlanButton;