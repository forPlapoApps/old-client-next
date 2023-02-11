import Layout from "@/core/layouts/Layout";
import PlapoArena from "@/plapos/components/PlapoArena";
import PlapoCalcurationResults from "@/plapos/components/PlapoCalcurationResults";
import { NextPage } from "next";

const PlapoPage: NextPage = () => {
  return (
    <Layout>
      <div>
        <PlapoArena />
        <PlapoCalcurationResults />
      </div>
    </Layout>
  )
}

export default PlapoPage
