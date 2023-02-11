import { useState } from "react";

const PlapoCard = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <>
      <div className="flex flex-col gap-2 w-36">
        {isVisible ? (
          <div className="bg-blue-500 text-white h-60 rounded-xl flex">
            <span className="m-auto text-5xl">10</span>
          </div>
        ) : (
          <div className="bg-blue-200 h-60 rounded-xl flex">
            <span className="m-auto text-5xl">🤔</span>
          </div>
        )}
        <span className="mx-auto font-semibold text-xl">higakijin</span>
      </div>
    </>
  );
};

export default PlapoCard;
