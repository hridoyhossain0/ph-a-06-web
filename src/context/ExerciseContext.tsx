"use client";

import { ExerciseType } from "@/components/types/ExerciseType";
import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface ExerciseContextType {
  addPlan: ExerciseType[];
  setAddPlan: Dispatch<SetStateAction<ExerciseType[]>>;
  addSave: ExerciseType[];
  setAddSave: Dispatch<SetStateAction<ExerciseType[]>>;
}

export const ExerciseContext = createContext<ExerciseContextType | null>(null);

const ExerciseProvider = ({ children }: { children: ReactNode }) => {
  const [addPlan, setAddPlan] = useState<ExerciseType[]>([]);
  const [addSave, setAddSave] = useState<ExerciseType[]>([]);

  return (
    <ExerciseContext.Provider
      value={{
        addPlan,
        setAddPlan,
        addSave,
        setAddSave,
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseProvider;