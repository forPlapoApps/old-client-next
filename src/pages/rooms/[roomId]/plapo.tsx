import Layout from "@/core/layouts/Layout";
import PlapoArena from "@/plapos/PlapoArena";
import { NextPage } from "next";

const PlapoPage: NextPage = () => {
  return (
    <Layout>
      <div>
        <PlapoArena />
      </div>
    </Layout>
  )
}

export default PlapoPage