export function getPercentage(max: number, price: number) {
  const result = Math.max((price / max) * 1).toFixed(2);
  return result;
}
