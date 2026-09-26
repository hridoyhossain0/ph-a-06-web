'use client';

import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { FiChevronDown } from 'react-icons/fi';
import { ExerciseContext } from '@/context/ExerciseContext';
import { ExerciseType } from '@/components/types/ExerciseType';
import ExerciseAddPlanCard from '@/components/myPlanPage/ExerciseAddPlanCard';
import ValueDefault from '@/components/myPlanPage/ValueDefault';

export default function MyPlanLayout() {
    const context = useContext(ExerciseContext);
    const [sortBy, setSortBy] = useState('duration');

    if (!context) return null;

    const {
        addPlan,
        setAddPlan,
        addSave,
        setAddSave,
        activeTab,
        setActiveTab,
    } = context;

    const currentList = activeTab === 'today' ? addPlan : addSave;

    const sortedList = [...currentList].sort((a, b) => {
        if (sortBy === 'duration') {
            return (Number(a.duration) || 0) - (Number(b.duration) || 0);
        }
        if (sortBy === 'calories') {
            return (Number(a.caloriesBurned) || 0) - (Number(b.caloriesBurned) || 0);
        }
        if (sortBy === 'rating') {
            return (Number(b.rating) || 0) - (Number(a.rating) || 0);
        }
        return 0;
    });

    const handleViewDetails = (exercise: ExerciseType) => {
        toast.info(
            `🏋️‍♂️ ${exercise.name} details: Targeted at ${exercise.duration} mins for approximately ${exercise.caloriesBurned} kcal.`
        );
    };

    const handleRemove = (exercise: ExerciseType) => {
        if (activeTab === 'today') {
            setAddPlan((prev) => prev.filter((item) => item.id !== exercise.id));
            toast.success(`${exercise.name} removed from today's plan`);
        } else {
            setAddSave((prev) => prev.filter((item) => item.id !== exercise.id));
            toast.success(`${exercise.name} removed from saved exercises`);
        }
    };

    const handleDone = (exercise: ExerciseType) => {
        if (activeTab !== 'today') return;

        setAddPlan((prev) => prev.filter((item) => item.id !== exercise.id));
        const alreadySaved = addSave.some((item) => item.id === exercise.id);

        if (!alreadySaved) {
            setAddSave((prev) => [...prev, exercise]);
            toast.success(`${exercise.name} completed and saved!`);
        } else {
            toast.success(`${exercise.name} marked as done!`);
        }
    };

    const totalMinutes = currentList.reduce((sum, exercise) => sum + (Number(exercise.duration) || 0), 0);
    const totalCalories = currentList.reduce((sum, exercise) => sum + (Number(exercise.caloriesBurned) || 0), 0);

    return (
        <div className="w-full">
            {/* Statistics */}
            <div className="my-4 flex justify-between rounded-2xl p-7 tabs-box bg-[#11141d] border border-zinc-900">
                <div>
                    <p className="text-zinc-400">Exercises</p>
                    <p className="text-4xl font-bold text-amber-200">{currentList.length}</p>
                </div>
                <div>
                    <p className="text-zinc-400">Minutes</p>
                    <p className="text-4xl font-bold text-white">{totalMinutes}</p>
                </div>
                <div>
                    <p className="text-zinc-400">Calories</p>
                    <p className="text-4xl font-bold text-white">{totalCalories}</p>
                </div>
            </div>

            {/* Navigation and Controls */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-2">
                <div className="w-auto p-3 bg-[#1e233083] rounded-2xl">
                    <div className='tabs shadow-none tabs-box gap-5 border-none bg-transparent p-0 flex'>
                        <input
                            type="radio"
                            name="my_tabs_1"
                            className="tab rounded-lg border-none bg-[#1e2330] px-4 py-2 text-white checked:bg-zinc-800 checked:text-amber-200 cursor-pointer"
                            aria-label="Today's Plan"
                            checked={activeTab === 'today'}
                            onChange={() => setActiveTab('today')}
                        />
                        <input
                            type="radio"
                            name="my_tabs_1"
                            className="tab rounded-lg border-none bg-[#1e2330] px-4 py-2 text-white checked:bg-zinc-800 checked:text-amber-200 cursor-pointer"
                            aria-label="Saved"
                            checked={activeTab === 'saved'}
                            onChange={() => setActiveTab('saved')}
                        />
                    </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-zinc-400 self-end sm:self-auto">
                    <span>Sort By</span>
                    <div className="relative inline-flex items-center">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="appearance-none bg-[#1e2330] text-white pl-3 pr-8 py-1.5 rounded-lg border border-zinc-800 outline-none cursor-pointer text-sm focus:border-zinc-600 transition"
                        >
                            <option value="duration">Duration</option>
                            <option value="calories">Calories</option>
                            <option value="rating">Rating</option>
                        </select>
                        <FiChevronDown className="absolute right-2.5 text-zinc-400 pointer-events-none w-4 h-4" />
                    </div>
                </div>
            </div>

            {/* Content Render Panel */}
            <div className="mt-4 w-full rounded-2xl border border-zinc-900 bg-[#0f111a] p-6">
                <div className="space-y-4">
                    {sortedList.length > 0 ? (
                        sortedList.map((exercise: ExerciseType) => (
                            <ExerciseAddPlanCard
                                key={exercise.id}
                                exercise={exercise}
                                handleDone={handleDone}
                                handleRemove={handleRemove}
                                handleViewDetails={handleViewDetails}
                                activeTab={activeTab}
                            />
                        ))
                    ) : (
                        <ValueDefault />
                    )}
                </div>
            </div>
        </div>
    );
}
