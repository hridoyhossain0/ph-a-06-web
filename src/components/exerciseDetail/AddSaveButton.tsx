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
    setAddSave((prev) => [...prev, exercise]);
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