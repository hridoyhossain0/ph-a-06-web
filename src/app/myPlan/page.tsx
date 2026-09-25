'use client'
import ExerciseAddPlanCard from '@/components/myPlanPage/ExerciseAddPlanCard';
import ValueDefault from '@/components/myPlanPage/ValueDefault';
import { ExerciseType } from '@/components/types/ExerciseType';
import { ExerciseContext } from '@/context/ExerciseContext';
import { useContext } from 'react';

const MyPlanPage = () => {
    // Read the active state parameters straight out of your Context Provider
    const { addPlan, addSave, activeTab, setActiveTab } = useContext(ExerciseContext);

    // Determine which list to use based on the global active tab state
    const currentList = activeTab === 'today' ? addPlan : addSave;

    return (
        <div className='container mt-35 mx-auto'>
            <div className='space-y-2.5 my-3'>
                <h1 className='text-4xl font-bold'>MY PLAN</h1>
                <p>Cap of five lifts for today. Finish them, then load more.</p>
            </div>

            <div className='flex tabs-box p-7 rounded-2xl my-4 justify-between'>
                <div>
                    <p>Exercises</p>
                    <p className='text-4xl text-amber-200 font-bold'>{currentList.length}</p>
                </div>
                <div>
                    <p>Minutes</p>
                    <p className='text-4xl font-bold'>
                        {currentList.length > 0 ? currentList.reduce((sum, exercise) => sum + (Number(exercise.duration) || 0), 0) : '0'}
                    </p>
                </div>
                <div>
                    <p>Calories</p>
                    <p className='text-4xl font-bold'>
                        {currentList.length > 0 ? currentList.reduce((sum, exercise) => sum + (Number(exercise.caloriesBurned) || 0), 0) : '0'}
                    </p>
                </div>
            </div>

            <div className='w-full'>
                <div className="tabs tabs-box bg-transparent gap-5 border-none p-0 mb-6">
                    <input
                        type="radio"
                        name="my_tabs_1"
                        className="tab bg-[#1e2330] text-white checked:bg-zinc-800 checked:text-white rounded-lg px-4 py-2 border-none"
                        aria-label="Today's Plan"
                        checked={activeTab === 'today'}
                        onChange={() => setActiveTab('today')}
                    />

                    <input
                        type="radio"
                        name="my_tabs_1"
                        className="tab bg-[#1e2330] text-white checked:bg-zinc-800 checked:text-white rounded-lg px-4 py-2 border-none"
                        aria-label="Saved"
                        checked={activeTab === 'saved'}
                        onChange={() => setActiveTab('saved')} 
                    />

                    <div className="bg-[#0f111a] border w-full mt-5 border-zinc-900 rounded-2xl p-6">
                        <div className='space-y-4'>
                            {currentList.length > 0 ? (
                                currentList.map((exercise: ExerciseType) => (
                                    <ExerciseAddPlanCard key={exercise.id} exercise={exercise} />
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
