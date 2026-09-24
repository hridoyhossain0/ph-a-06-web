import HeroSection from "@/components/HomePage/HeroSection";
import Exercise from "@/components/HomePage/Exercise";

const getLibrary = async () => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
  return res.json()
}

export default async function Home() {
  const exercises = await getLibrary();
  return (

    <>
    
      <HeroSection/>
      <Exercise exercises={exercises}/>
    </>


  );
}
