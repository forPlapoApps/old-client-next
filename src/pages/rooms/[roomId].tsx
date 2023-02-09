import Layout from "@/core/layouts/Layout";
import CopyLink from "@/rooms/components/CopyLink";
import { GetServerSideProps, NextPage } from "next";
import fetchData from "util/fetchData";

type InitialProps = {
  room: Room;
};

const ShowRoomPage: NextPage<InitialProps> = ({ room }) => {
  return (
    <Layout title={room.name}>
      <div>
        <h2 className="text-2xl font-bold">Welcome to "{room.name}" !</h2>
        <CopyLink />
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  res,
  query,
}) => {
  const room = await fetchData(`/rooms/${query.roomId}`, res);

  if (room.statusCode == 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      room,
    },
  };
};

export default ShowRoomPage;
