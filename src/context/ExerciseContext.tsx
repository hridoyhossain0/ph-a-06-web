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
  activeTab: string;                                    // Added activeTab tracking
  setActiveTab: Dispatch<SetStateAction<string>>;       // Added updater function tracking
}

export const ExerciseContext = createContext<ExerciseContextType>({
  addPlan: [],
  setAddPlan: () => { }, 
  addSave: [],
  setAddSave: () => { }, 
  activeTab: 'today',                                   // Default value
  setActiveTab: () => { }, 
});

const ExerciseProvider = ({ children }: { children: ReactNode }) => {
  const [addPlan, setAddPlan] = useState<ExerciseType[]>([]);
  const [addSave, setAddSave] = useState<ExerciseType[]>([]);
  const [activeTab, setActiveTab] = useState<string>('today'); // Added activeTab state management

  return (
    <ExerciseContext.Provider
      value={{
        addPlan,
        setAddPlan,
        addSave,
        setAddSave,
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseProvider;
