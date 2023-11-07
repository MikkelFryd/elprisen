export function getPercentage(max: number, price: number) {
  let result = Math.max((price / max) * 1).toFixed(2);
  return result;
}
