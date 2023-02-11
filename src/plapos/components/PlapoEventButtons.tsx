import { Button } from "flowbite-react";

const PlapoEventbuttons = () => {
  return (
    <div className="flex">
      <div className="flex gap-20 mx-auto">
        <Button className="px-10" color="gray">
          RESET
        </Button>
        <Button className="px-10">OPEN</Button>
      </div>
    </div>
  );
};

export default PlapoEventbuttons;
