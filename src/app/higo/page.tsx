'use client';

import ExerciseAddPlanCard from '@/components/myPlanPage/ExerciseAddPlanCard';
import ValueDefault from '@/components/myPlanPage/ValueDefault';
import { ExerciseType } from '@/components/types/ExerciseType';
import { ExerciseContext } from '@/context/ExerciseContext';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const PlanTabs = () => {
  const context = useContext(ExerciseContext);

  if (!context) return null;

  const {
    addPlan,
    setAddPlan,
    addSave,
    setAddSave,
    activeTab,
    setActiveTab,
  } = context;

  // Remove exercise
  const handleRemove = (exercise: ExerciseType) => {
    if (activeTab === 'today') {
      setAddPlan((prev) =>
        prev.filter((item) => item.id !== exercise.id)
      );

      toast.success(
        `${exercise.name} removed from today's plan`
      );
    } else {
      setAddSave((prev) =>
        prev.filter((item) => item.id !== exercise.id)
      );

      toast.success(
        `${exercise.name} removed from saved exercises`
      );
    }
  };

  // Mark as done
  const handleDone = (exercise: ExerciseType) => {
    if (activeTab !== 'today') return;

    // Remove from today's plan
    setAddPlan((prev) =>
      prev.filter((item) => item.id !== exercise.id)
    );

    // Add to saved
    const alreadySaved = addSave.some(
      (item) => item.id === exercise.id
    );

    if (!alreadySaved) {
      setAddSave((prev) => [...prev, exercise]);

      toast.success(
        `${exercise.name} completed and saved!`
      );
    } else {
      toast.success(
        `${exercise.name} marked as done!`
      );
    }
  };

  return (
    <div className="mt-30 w-full">

      {/* Tabs */}
      <div className="mb-6 tabs tabs-box border-none bg-transparent p-0">

        {/* Today's Plan */}
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-lg border-none bg-[#1e2330] px-4 py-2 text-white checked:bg-zinc-800 checked:text-white"
          aria-label="Today's Plan"
          checked={activeTab === 'today'}
          onChange={() => setActiveTab('today')}
        />

        {/* Saved */}
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-lg border-none bg-[#1e2330] px-4 py-2 text-white checked:bg-zinc-800 checked:text-white"
          aria-label="Saved"
          checked={activeTab === 'saved'}
          onChange={() => setActiveTab('saved')}
        />

      </div>

      {/* Content */}
      <div className="rounded-2xl border border-zinc-900 bg-[#0f111a] p-6">

        <div className="space-y-4">

          {activeTab === 'today' ? (

            addPlan.length > 0 ? (
              addPlan.map((exercise: ExerciseType) => (
                <ExerciseAddPlanCard
                  key={exercise.id}
                  exercise={exercise}
                  handleDone={handleDone}
                  handleRemove={handleRemove}
                  activeTab={activeTab}
                />
              ))
            ) : (
              <ValueDefault />
            )

          ) : (

            addSave.length > 0 ? (
              addSave.map((exercise: ExerciseType) => (
                <ExerciseAddPlanCard
                  key={exercise.id}
                  exercise={exercise}
                  handleDone={handleDone}
                  handleRemove={handleRemove}
                  activeTab={activeTab}
                />
              ))
            ) : (
              <ValueDefault />
            )

          )}

        </div>

      </div>
    </div>
  );
};

export default PlanTabs;