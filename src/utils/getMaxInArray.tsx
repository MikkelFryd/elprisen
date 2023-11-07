import { PriceDataInner } from "../types/types";

export function getMaxInArray(data: Array<PriceDataInner>) {
  let max = Math.max(
    ...data.map((item: PriceDataInner) => {
      return item.DKK_per_kWh;
    })
  );
  return max;
}
