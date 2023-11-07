import style from "../styles/pricecard.module.scss";
import { PriceDataProps } from "../types/types";
import { PriceCardInner } from "./PriceCardInner";
import { getMaxInArray } from "../utils/getMaxInArray";
import { getPercentage } from "../utils/getPercentage";

export const PriceCard = (props: PriceDataProps) => {
  const data = props.data;
  const max = getMaxInArray(data);

  const percentageArray = data.map((item) => {
    return getPercentage(max, item.DKK_per_kWh);
  });

  function getColor(value: string) {
    //value from 0 to 1
    let hue = ((1 - parseFloat(value)) * 120).toString(10);
    return ["hsl(", hue, ",100%,50%)"].join("");
  }

  return (
    <article className={style.pricecontainer}>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <PriceCardInner
              item={item}
              color={getColor(percentageArray[index])}
            />
          </div>
        );
      })}
    </article>
  );
};
