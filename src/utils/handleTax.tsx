export function handleTax(price: number, tax: boolean) {
  if (tax === true) {
    const priceInclTax = price * 1.25;
    return priceInclTax.toFixed(3);
  } else return price.toFixed(3);
}
