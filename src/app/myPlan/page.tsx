'use client'
import ExerciseAddPlanCard from '@/components/myPlanPage/ExerciseAddPlanCard';
import ValueDefault from '@/components/myPlanPage/ValueDefault';
import { ExerciseType } from '@/components/types/ExerciseType';
import { ExerciseContext } from '@/context/ExerciseContext';
import { useContext } from 'react';

const MyPlanPage = () => {

    const { addPlan, addSave } = useContext(ExerciseContext);


    return (
        <div className='container mt-35 mx-auto'>
            <div className='space-y-2.5 my-3'>
                <h1 className='text-4xl font-bold'>MY PLAN</h1>
                <p>Cap of five lifts for today. Finish them, then load more.</p>
            </div>

            <div className='flex tabs-box p-7 rounded-2xl my-4 justify-between'>
                <div>
                    <p>Exercises</p>
                    <p className='text-4xl text-amber-200 font-bold'>{addPlan.length}</p>
                </div>
                <div>
                    <p>Minutes</p>
                    <p className='text-4xl font-bold'>
                        {addPlan.length > 0 ? addPlan.reduce((sum, exercise) => sum + (Number(exercise.duration) || 0), 0) : '0'}
                    </p>
                </div>
                <div>
                    <p>Calories</p>
                    <p className='text-4xl font-bold'>
                        {addPlan.length > 0 ? addPlan.reduce((sum, exercise) => sum + (Number(exercise.caloriesBurned) || 0), 0) : '0'}
                    </p>
                </div>
            </div>

            <div>
                {/* name of each tab group should be unique */}
                <div className="tabs  tabs-box">
                    <input type="radio" name="my_tabs_1" className="tab" aria-label="Today's Plan" defaultChecked />
                    <div className="tab-content bg-base-100 border-base-300 p-6 ">
                        {addPlan.length > 0 ? addPlan.map((exercise: ExerciseType) => {
                            return <ExerciseAddPlanCard key={exercise.id} exercise={exercise} />
                        }) : <ValueDefault/>}
                    </div>


                    <input type="radio" name="my_tabs_1" className="tab" aria-label="Saved" />
                    <div className="tab-content bg-base-100 border-base-300 p-6 ">
                        {addSave.length > 0 ? addSave.map((exercise: ExerciseType) => {
                            return <ExerciseAddPlanCard key={exercise.id} exercise={exercise} />
                        }) : <div><ValueDefault/></div>}
                    </div>

                </div>
                {/* 
                    <div className="tabs  tabs-box">
                        <input type="radio" name="my_tabs_1" className="tab" aria-label="Tab 1" />

                        <input type="radio" name="my_tabs_1" className="tab" aria-label="Tab 1" defaultChecked />

                    </div> */}




{/* 
                <div className='flex flex-col space-y-2.5 tabs-box p-5 rounded-2xl my-5 items-center'>
                    <h1>NOTHING HERE YET</h1>
                    <p>Browse the library and add a lift to get today moving.</p>
                    <Link href='/'>
                        <button className="btn btn-active btn-success bg-amber-200 rounded-full border-0">Go to workouts</button>

                    </Link>
                </div> */}
            </div>
        </div>
    );
};

export default MyPlanPage;