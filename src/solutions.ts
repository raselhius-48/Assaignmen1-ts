 
const multiplyValue = (value: number, multiplier?: number): number => {
  const finalMultiplier = multiplier ?? 2;
  return value * finalMultiplier;
};

type Input = string | number | boolean;
type Output = string | number;

const processInput = (inputValue: Input): Output => {
  if (typeof inputValue === "string") {
    return inputValue.trim().toLowerCase();
  } else if (typeof inputValue === "number") {
    return inputValue * 10;
  } else if (typeof inputValue === "boolean") {
    return inputValue ? "Active" : "Inactive";
  }
 
};