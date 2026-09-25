"use client";

import { ExerciseContext } from "@/context/ExerciseContext";
import { ExerciseType } from "../types/ExerciseType";
import { useContext } from "react";
import { toast } from "react-toastify";

interface ExerciseProps {
  exercise: ExerciseType;
}

const AddPlanButton = ({ exercise }: ExerciseProps) => {
  const context = useContext(ExerciseContext);

  if (!context) {
    throw new Error(
      "AddPlanButton must be used inside ExerciseProvider"
    );
  }

  const { addPlan, setAddPlan } = context;

  const isAdded = addPlan.some(
    (item) => item.id === exercise.id
  );

  const handleAddPlan = () => {
    if (isAdded) {
      // Remove from today's plan
      setAddPlan((prev) =>
        prev.filter((item) => item.id !== exercise.id)
      );

      toast.info(`${exercise.name} removed from today's plan`);
    } else {
      // Maximum 5 exercises
      if (addPlan.length >= 5) {
        toast.warning(
          "You can add a maximum of 5 exercises to today's plan."
        );
        return;
      }

      // Add to today's plan
      setAddPlan((prev) => [...prev, exercise]);

      toast.success(`${exercise.name} added to today's plan`);
    }
  };

  return (
    <button
      type="button"
      onClick={handleAddPlan}
      className={`rounded-lg px-5 py-3 text-sm font-medium transition ${
        isAdded
          ? "bg-lime-400 text-black hover:bg-lime-300"
          : "bg-lime-400 text-black hover:bg-lime-300"
      }`}
    >
      {isAdded
        ? "✓ Added to today's plan"
        : "+ Add to today's plan"}
    </button>
  );
};

export default AddPlanButton;