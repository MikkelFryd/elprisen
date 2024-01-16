import { PriceDataInner } from "../types/types";

export function getMaxInArray(data: Array<PriceDataInner>) {
  const max = Math.max(
    ...data.map((item: PriceDataInner) => {
      return item.DKK_per_kWh;
    })
  );
  return max;
}
