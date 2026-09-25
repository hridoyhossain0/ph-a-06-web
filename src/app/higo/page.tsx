'use client';

import ExerciseAddPlanCard from '@/components/myPlanPage/ExerciseAddPlanCard';
import ValueDefault from '@/components/myPlanPage/ValueDefault';
import { ExerciseType } from '@/components/types/ExerciseType';
import { ExerciseContext } from '@/context/ExerciseContext';
import { useContext, useState } from 'react';

// Make sure your components and types are imported
// import { ExerciseType } from '@/types'; 
// import ExerciseAddPlanCard from './ExerciseAddPlanCard';
// import ValueDefault from './ValueDefault';

export default function PlanTabs() {
    // 1. Manage active tab state to control the visibility of content underneath
    const [activeTab, setActiveTab] = useState('today');
    const {addPlan, addSave} = useContext(ExerciseContext)

    return (
        <div className="w-full mt-30">
            {/* DaisyUI Tabs Container */}
            <div className="tabs tabs-box bg-transparent border-none p-0 mb-6">
                
                {/* Tab 1: Today's Plan */}
                <input 
                    type="radio" 
                    name="my_tabs_1" 
                    className="tab bg-[#1e2330] text-white checked:bg-zinc-800 checked:text-white rounded-lg px-4 py-2 border-none" 
                    aria-label="Today's Plan" 
                    checked={activeTab === 'today'}
                    onChange={() => setActiveTab('today')}
                />
                
                {/* Tab 2: Saved */}
                <input 
                    type="radio" 
                    name="my_tabs_1" 
                    className="tab bg-[#1e2330] text-white checked:bg-zinc-800 checked:text-white rounded-lg px-4 py-2 border-none" 
                    aria-label="Saved" 
                    checked={activeTab === 'saved'}
                    onChange={() => setActiveTab('saved')}
                />
            </div>

            {/* Content Body Wrapper (Styled to look dark like your image) */}
            <div className="bg-[#0f111a] border border-zinc-900 rounded-2xl p-6">
                {activeTab === 'today' && (
                    <div className="space-y-4">
                        {addPlan.length > 0 ? (
                            addPlan.map((exercise: ExerciseType) => (
                                <ExerciseAddPlanCard key={exercise.id} exercise={exercise} />
                            ))
                        ) : (
                            <ValueDefault />
                        )}
                    </div>
                )}

                {activeTab === 'saved' && (
                    <div className="space-y-4">
                        {addSave.length > 0 ? (
                            addSave.map((exercise: ExerciseType) => (
                                <ExerciseAddPlanCard key={exercise.id} exercise={exercise} />
                            ))
                        ) : (
                            <ValueDefault />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
