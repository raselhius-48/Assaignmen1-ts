 
const multiplyValue = (value: number, multiplier?: number): number => {
  const finalMultiplier = multiplier ?? 2;
  return value * finalMultiplier;
};