import BackToRoomsButton from "@/core/components/BackToRoomsButton";
import Layout from "@/core/layouts/Layout";
import PlapoArena from "@/plapos/components/PlapoArena";
import PlapoCalcurationResults from "@/plapos/components/PlapoCalcurationResults";
import PlapoEventbuttons from "@/plapos/components/PlapoEventButtons";
import { NextPage } from "next";

const PlapoPage: NextPage = () => {
  return (
    <Layout>
      <div>
        <PlapoArena />
        <PlapoCalcurationResults />
        <PlapoEventbuttons />
        <BackToRoomsButton />
      </div>
    </Layout>
  )
}

export default PlapoPage
