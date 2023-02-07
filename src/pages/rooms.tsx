import Layout from "@/core/layouts/Layout";
import RoomsTable from "@/rooms/components/RoomsTable";
import { NextPage } from "next";

const RoomsPage: NextPage = () => {
  return (
    <Layout>
      <h2 className="text-2xl font-bold">Select your Room!</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <RoomsTable />
        </div>
        <div className="col-span-1">
          welcome to forPlapoApps!
        </div>
      </div>
    </Layout>
  );
};

export default RoomsPage;
