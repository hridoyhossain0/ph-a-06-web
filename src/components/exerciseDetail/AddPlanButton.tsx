'use client'
import React, { useContext } from 'react';
import { ExerciseType } from '../types/ExerciseType';
import { ExerciseContext } from '@/context/ExerciseContext';

interface ExerciseProps  {
    exercise : ExerciseType
}

const AddPlanButton = ({exercise} : ExerciseProps ) => {

    const {addPlan, setAddPlan} = useContext(ExerciseContext)

    const handleAddSave = () => {
        setAddPlan([...addPlan,exercise])
    };
    return (
        <button className="rounded-lg bg-lime-400 px-5 py-3 text-sm font-bold text-black hover:bg-lime-300" onClick={()=> handleAddSave()}>
            📅 Add to today's plan
        </button>
    );
};

export default AddPlanButton;