"use client";

import { ExerciseContext } from "@/context/ExerciseContext";
import { ExerciseType } from "../types/ExerciseType";
import { useContext } from "react";

interface ExerciseProps {
  exercise: ExerciseType;
}

const AddSaveButton = ({ exercise }: ExerciseProps) => {
  const context = useContext(ExerciseContext);

  if (!context) {
    throw new Error(
      "AddSaveButton must be used inside ExerciseProvider"
    );
  }

  const { addSave, setAddSave } = context;

  const handleAddSave = () => {
    const isAlreadyAdded = addSave.some(plan => plan.id === exercise.id);

    if (!isAlreadyAdded) {
      setAddSave([...addSave, exercise]);
    } else { 
      setAddSave(addSave.filter(plan => plan.id !== exercise.id))
    }
  };

  return (
    <button
      className="rounded-lg border border-gray-700 px-5 py-3 text-sm text-gray-300 hover:text-white"
      onClick={handleAddSave}
    >
      ♡ Save for later
    </button>
  );
};

export default AddSaveButton;