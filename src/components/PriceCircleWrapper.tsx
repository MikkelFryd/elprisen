import { useState, useEffect } from "react";
import { PriceCircle } from "./PriceCircle";
import style from "../styles/pricecirclewrapper.module.scss";
import { PriceDataInner, PriceDataProps } from "../types/types";

interface PriceSorted {
  min: string;
  max: string;
}

export const PriceCircleWrapper = (props: PriceDataProps) => {
  const [sortedData, setSortedData] = useState<PriceSorted>();

  const data = props.data;

  function sortPrices(data: Array<PriceDataInner>) {
    let sorted = data.sort((a, b) => {
      return a.DKK_per_kWh - b.DKK_per_kWh;
    });
    let _min = sorted[0].DKK_per_kWh.toFixed(3);
    let _max = sorted[sorted.length - 1].DKK_per_kWh.toFixed(3);
    setSortedData({ min: _min, max: _max });
  }

  useEffect(() => {
    sortPrices(data!);
  }, []);

  return (
    <>
      {sortedData ? (
        <div className={style.circlecontainer}>
          <div className={style.textwrapper}>
            <PriceCircle value={sortedData.min} />
            <h3>LAVESTE PRIS</h3>
          </div>
          <div className={style.textwrapper}>
            <PriceCircle value={sortedData.max} />
            <h3>HØJESTE PRIS</h3>
          </div>
        </div>
      ) : null}
    </>
  );
};
