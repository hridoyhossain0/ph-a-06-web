import MyPlanLayout from "@/components/myPlanPage/MyPlanLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Fitness Plan — FitLog",
  description: "Track your scheduled lifts, monitor active workout duration, and calculate estimated caloric burn.",
};

export default function MyPlanPage() {
  return (
    <main className="container mx-auto mt-35 px-4 text-white">
      <div className="my-3 space-y-2.5">
          <h1 className="text-4xl font-bold">MY PLAN</h1>
          <p className="text-zinc-400">Cap of five lifts for today. Finish them, then load more.</p>
      </div>

      <MyPlanLayout />
    </main>
  );
}
