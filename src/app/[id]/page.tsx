import AddPlanButton from "@/components/exerciseDetail/AddPlanButton";
import AddSaveButton from "@/components/exerciseDetail/AddSaveButton";
import { ExerciseType } from "@/components/types/ExerciseType";
import Image from "next/image";

interface ParamsProps {
    params: Promise<{ id: string }>;
}

// Get all exercises
const getExercises = async (): Promise<ExerciseType[]> => {
    const res = await fetch(
        "https://api.abcz.workers.dev/api/fitlog",
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch exercises");
    }

    return res.json();
};

// Get single exercise
const getExercise = async (id: string) => {
    const exercises = await getExercises();

    const exercise = exercises.find(
        (item) => item.id.toString() === id
    );

    return exercise;
};

const ExerciseDetails = async ({ params }: ParamsProps) => {
    const { id } = await params;

    const exercise = await getExercise(id);

    // If exercise doesn't exist
    if (!exercise) {
        return (
            <section className="flex min-h-screen items-center justify-center bg-[#0d0f13] text-white">
                <h1 className="text-3xl font-bold">
                    Exercise not found
                </h1>
            </section>
        );
    }

    return (
        <section className="min-h-screen bg-[#0d0f13] px-4 py-10 text-white">
            <div className="mx-auto max-w-7xl">

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

                    {/* Image */}
                    <div className="relative mt-2 h-[650px] w-full overflow-hidden rounded-xl">
                        <Image
                            src={exercise.image}
                            alt={exercise.name}
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>

                    {/* Content */}
                    <div>

                        {/* Name */}
                        <h1 className="text-4xl font-extrabold uppercase">
                            {exercise.name}
                        </h1>

                        {/* Description */}
                        <p className="mt-3 text-sm leading-6 text-gray-400">
                            {exercise.description}
                        </p>

                        {/* Muscle Groups */}
                        <div className="mt-4 flex flex-wrap gap-2">
                            {exercise.muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* Exercise Information */}
                        <div className="mt-5 overflow-hidden rounded-xl border border-gray-800 bg-[#151820]">

                            <InfoRow
                                label="EQUIPMENT"
                                value={exercise.equipment}
                            />

                            <InfoRow
                                label="DIFFICULTY"
                                value={exercise.difficulty}
                            />

                            <InfoRow
                                label="SETS"
                                value={exercise.sets.toString()}
                            />

                            <InfoRow
                                label="REPS"
                                value={exercise.reps}
                            />

                            <InfoRow
                                label="DURATION"
                                value={`${exercise.duration} min`}
                            />

                            <InfoRow
                                label="CALORIES"
                                value={`${exercise.caloriesBurned} kcal`}
                            />

                            <InfoRow
                                label="RATING"
                                value={exercise.rating.toString()}
                                last
                            />

                        </div>

                        {/* Instructions */}
                        <div className="mt-6">

                            <h2 className="text-sm font-bold uppercase">
                                Instructions
                            </h2>

                            <ol className="mt-4 space-y-3">

                                {exercise.instructions.map(
                                    (instruction, index) => (
                                        <li
                                            key={index}
                                            className="flex gap-3 text-sm text-gray-400"
                                        >
                                            <span>
                                                {index + 1}.
                                            </span>

                                            <span>
                                                {instruction}
                                            </span>
                                        </li>
                                    )
                                )}

                            </ol>

                        </div>

                        {/* Buttons */}
                        <div className="mt-7 flex gap-3">

                            <AddPlanButton exercise={exercise}/>

                            <AddSaveButton exercise={exercise}/>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExerciseDetails;


/* -------------------------------- */
/* Info Row */
/* -------------------------------- */

interface InfoRowProps {
    label: string;
    value: string;
    last?: boolean;
}

const InfoRow = ({
    label,
    value,
    last,
}: InfoRowProps) => {

    return (
        <div
            className={`flex justify-between px-4 py-3 ${!last
                    ? "border-b border-gray-800"
                    : ""
                }`}
        >

            <span className="text-[10px] font-semibold tracking-wider text-gray-500">
                {label}
            </span>

            <span className="text-xs text-gray-300">
                {value}
            </span>

        </div>
    );
};