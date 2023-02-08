import Layout from "@/core/layouts/Layout";
import { GetServerSideProps, NextPage } from "next";
import fetchData from "util/fetchData";

type InitialProps = {
  room: Room;
};

const ShowRoomPage: NextPage<InitialProps> = ({ room }) => {
  return (
    <Layout title="">
      <div>
        <p>RoomDetailPage</p>
        <p>{room.name}</p>
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
