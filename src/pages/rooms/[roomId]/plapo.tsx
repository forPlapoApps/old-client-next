import BackToRoomsButton from "@/core/components/BackToRoomsButton";
import Layout from "@/core/layouts/Layout";
import PlapoArena from "@/plapos/components/PlapoArena";
import PlapoCalcurationResults from "@/plapos/components/PlapoCalcurationResults";
import PlapoEventbuttons from "@/plapos/components/PlapoEventButtons";
import PlapoFibonacciNumbers from "@/plapos/components/PlapoFibonacciNumbers";
import { NextPage } from "next";

const PlapoPage: NextPage = () => {
  return (
    <Layout>
      <div className="h-full">
        <div className="flex flex-col gap-8 h-full justify-between">
          <div className="flex flex-col m-auto gap-20">
            <PlapoArena />
            <PlapoCalcurationResults />
            <PlapoEventbuttons />
          </div>
          <div className="flex p-8">
            <BackToRoomsButton />
            <div className="ml-auto">
              <PlapoFibonacciNumbers />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PlapoPage;
