import { Button, Label, Radio } from "flowbite-react";

const PlapoFibonacciNumbers = () => {
  const scores = [1, 2, 3, 5, 8, 13, 21, 42];
  const handleClick = (score: number) => {
    console.log(score)
  }

  return (
    <div className="flex gap-2">
      {scores.map((score) => (
        <Label
          key={score}
          htmlFor={score.toString()}
          onClick={() => handleClick(score)}
        >
          <Button size="xl" className="w-12">
            {score}
          </Button>
          <Radio
            id={score.toString()}
            name="FibonacciNumbers"
            value={score}
            className="hidden"
          />
        </Label>
      ))}
    </div>
  );
};

export default PlapoFibonacciNumbers;
