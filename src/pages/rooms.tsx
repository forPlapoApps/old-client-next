import Layout from "@/core/layouts/Layout";
import RoomsTable from "@/rooms/components/RoomsTable";
import { GetServerSideProps, NextPage } from "next";
import fetchData from "util/fetchData";

type InitialProps = { 
  rooms: Room[]
}

const RoomsPage: NextPage<InitialProps> = ({ rooms }) => {
  return (
    <Layout>
      <h2 className="text-2xl font-bold">Select your Room!</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <RoomsTable rooms={rooms} />
        </div>
        <div className="col-span-1">
          welcome to forPlapoApps!
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const rooms = await fetchData(`/rooms`, res)
  return {
    props: {
      rooms
    }
  }
}

export default RoomsPage;
