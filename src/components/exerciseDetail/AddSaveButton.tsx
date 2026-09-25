"use client";

import { ExerciseContext } from "@/context/ExerciseContext";
import { ExerciseType } from "../types/ExerciseType";
import { useContext } from "react";
import { toast } from "react-toastify";

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

  const isSaved = addSave.some(
    (item) => item.id === exercise.id
  );

  const handleAddSave = () => {
    if (isSaved) {
      // Remove from saved
      setAddSave((prev) =>
        prev.filter((item) => item.id !== exercise.id)
      );

      toast.info(`${exercise.name} removed from saved`);
    } else {
      // Add to saved
      setAddSave((prev) => [...prev, exercise]);

      toast.success(`${exercise.name} saved for later`);
    }
  };

  return (
    <button
      type="button"
      onClick={handleAddSave}
      className={`rounded-lg border px-5 py-3 text-sm transition ${
        isSaved
          ? "border-lime-400 bg-lime-400 text-black hover:bg-lime-300"
          : "border-gray-700 text-gray-300 hover:text-white"
      }`}
    >
      {isSaved ? "✓ Saved for later" : "♡ Save for later"}
    </button>
  );
};

export default AddSaveButton;