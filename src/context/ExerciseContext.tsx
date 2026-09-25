'use client';

import { ExerciseType } from '@/components/types/ExerciseType';
import {
  createContext,
  ReactNode,
  useState,
} from 'react';

type ActiveTab = 'today' | 'saved';

interface ExerciseContextType {
  addPlan: ExerciseType[];
  setAddPlan: React.Dispatch<
    React.SetStateAction<ExerciseType[]>
  >;

  addSave: ExerciseType[];
  setAddSave: React.Dispatch<
    React.SetStateAction<ExerciseType[]>
  >;

  activeTab: ActiveTab;
  setActiveTab: React.Dispatch<
    React.SetStateAction<ActiveTab>
  >;
}

export const ExerciseContext =
  createContext<ExerciseContextType | null>(null);

interface ExerciseProviderProps {
  children: ReactNode;
}

export const ExerciseProvider = ({
  children,
}: ExerciseProviderProps) => {
  const [addPlan, setAddPlan] = useState<ExerciseType[]>([]);
  const [addSave, setAddSave] = useState<ExerciseType[]>([]);

  const [activeTab, setActiveTab] =
    useState<ActiveTab>('today');

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