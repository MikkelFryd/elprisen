import { useContext } from "react";
import { ColoredPTagProps } from "../types/types";
import { SettingsContext } from "../context/SettingsContext";
import { handleTax } from "../utils/handleTax";
import { handleTime } from "../utils/handleDate";

export const PriceCardInner = ({ item, color }: ColoredPTagProps) => {
  const { tax } = useContext(SettingsContext);

  return (
    <>
      <p>{handleTime(item.time_start)}</p>
      <p style={{ color: color }}>{handleTax(item.DKK_per_kWh, tax)} kr</p>
    </>
  );
};
