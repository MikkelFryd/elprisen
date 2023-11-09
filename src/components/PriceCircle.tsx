import { useContext } from "react";
import style from "../styles/pricecircle.module.scss";
import { SettingsContext } from "../context/SettingsContext";
import { PriceCircleInterface } from "../types/types";

export const PriceCircle = ({ value }: PriceCircleInterface) => {
  const { tax } = useContext(SettingsContext);

  function handleTax(value: string) {
    if (tax === true) {
      let priceInclTax = parseFloat(value) * 1.25;
      return priceInclTax.toFixed(3);
    } else return value;
  }

  return (
    <div className={style.pricecircle}>
      <div className={style.textcontainer}>
        <p>{handleTax(value)} KR</p>
        <p>PR. KWH</p>
      </div>
    </div>
  );
};
