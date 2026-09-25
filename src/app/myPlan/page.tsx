'use client';

import ExerciseAddPlanCard from '@/components/myPlanPage/ExerciseAddPlanCard';
import ValueDefault from '@/components/myPlanPage/ValueDefault';
import { ExerciseType } from '@/components/types/ExerciseType';
import { ExerciseContext } from '@/context/ExerciseContext';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const MyPlanPage = () => {
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

  // Current list
  const currentList =
    activeTab === 'today'
      ? addPlan
      : addSave;

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

    // Check if already saved
    const alreadySaved = addSave.some(
      (item) => item.id === exercise.id
    );

    // Add to saved
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

  // Total minutes
  const totalMinutes = currentList.reduce(
    (sum, exercise) =>
      sum + (Number(exercise.duration) || 0),
    0
  );

  // Total calories
  const totalCalories = currentList.reduce(
    (sum, exercise) =>
      sum + (Number(exercise.caloriesBurned) || 0),
    0
  );

  return (
    <div className="container mx-auto mt-35">

      {/* Header */}
      <div className="my-3 space-y-2.5">
        <h1 className="text-4xl font-bold">
          MY PLAN
        </h1>

        <p>
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Statistics */}
      <div className="my-4 flex justify-between rounded-2xl p-7 tabs-box">

        <div>
          <p>Exercises</p>
          <p className="text-4xl font-bold text-amber-200">
            {currentList.length}
          </p>
        </div>

        <div>
          <p>Minutes</p>
          <p className="text-4xl font-bold">
            {totalMinutes}
          </p>
        </div>

        <div>
          <p>Calories</p>
          <p className="text-4xl font-bold">
            {totalCalories}
          </p>
        </div>

      </div>

      {/* Tabs */}
      <div className="w-full">

        <div className="mb-6 tabs tabs-box gap-5 border-none bg-transparent p-0">

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

          {/* Content */}
          <div className="mt-5 w-full rounded-2xl border border-zinc-900 bg-[#0f111a] p-6">

            <div className="space-y-4">

              {currentList.length > 0 ? (
                currentList.map((exercise: ExerciseType) => (
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
              )}

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;