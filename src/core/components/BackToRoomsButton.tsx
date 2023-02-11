import { Button } from "flowbite-react";
import { useRouter } from "next/router";

const BackToRoomsButton = () => {
  const router = useRouter();

  return (
    <div>
      <Button onClick={() => router.push("/rooms")}>← SELECT ROOM</Button>
    </div>
  );
};

export default BackToRoomsButton;
