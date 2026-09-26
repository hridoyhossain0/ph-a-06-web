import HeroSection from "@/components/HomePage/HeroSection";
import Exercise from "@/components/HomePage/Exercise";
import NoExercises from "@/components/HomePage/NoExercises";

const getLibrary = async () => {
  try {
    const res = await fetch('https://api.api-store.workers.dev/api/fitlog');

    if (!res.ok) {
      return null; 
    }

    return await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return null; 
  }
}

export default async function Home() {
  const exercises = await getLibrary();

  return (
    <>
      <HeroSection />
      
      {Array.isArray(exercises) && exercises.length > 0 ? (
        <Exercise exercises={exercises} />
      ) : (
        <div className="container mx-auto px-4 pb-16">
          <NoExercises />
        </div>
      )}
    </>
  );
}
