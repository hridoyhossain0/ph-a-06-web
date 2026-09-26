import HeroSection from "@/components/HomePage/HeroSection";
import Exercise from "@/components/HomePage/Exercise";
import NotFound from "./not-found";

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

  if (!exercises) {
    return <NotFound />; 
  }

  return (
    <>
      <HeroSection />
      <Exercise exercises={Array.isArray(exercises) ? exercises : []} />
    </>
  );
}
