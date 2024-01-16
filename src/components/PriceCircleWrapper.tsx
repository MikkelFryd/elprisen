import { useState, useEffect } from "react";
import { PriceCircle } from "./PriceCircle";
import style from "../styles/pricecirclewrapper.module.scss";
import { PriceDataInner, PriceDataProps, PriceSorted } from "../types/types";


export const PriceCircleWrapper = (props: PriceDataProps) => {
  const [sortedData, setSortedData] = useState<PriceSorted>();

  const data = props.data;

  function sortPrices(data: Array<PriceDataInner>) {
    const sorted = data.sort((a, b) => {
      return a.DKK_per_kWh - b.DKK_per_kWh;
    });
    const _min = sorted[0].DKK_per_kWh.toFixed(3);
    const _max = sorted[sorted.length - 1].DKK_per_kWh.toFixed(3);
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
