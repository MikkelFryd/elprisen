import { useEffect, useContext, useState } from "react";
import { PriceCircleWrapper } from "../components/PriceCircleWrapper";
import style from "../styles/overviewlayout.module.scss";
import { PriceCard } from "../components/PriceCard";
import { SettingsButton } from "../components/SettingsButton";
import { SettingsContext } from "../context/SettingsContext";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useFetch } from "../hooks/useFetch";
import { getDate } from "../utils/getDate";

export const OverviewLayout = () => {
  const { region } = useContext(SettingsContext);
  const baseUrl = "https://www.elprisenligenu.dk/api/v1/prices/";
  const { year, month, day } = getDate();
  const [url, setUrl] = useState<string>(
    `${baseUrl}${year}/${month}-${day < 9 ? "0" + day : day}_${region}.json`
  );
  const { error, isLoading, data } = useFetch(url);
  const isMediumDevice = useMediaQuery("only screen and (max-width : 1201px)");

  useEffect(() => {
    setUrl(
      `${baseUrl}${year}/${month}-${day < 9 ? "0" + day : day}_${region}.json`
    );
  }, [region]);

  if (isLoading) return isLoading;

  if (error) return <p>Kunne ikke hente oplysninger.</p>;

  return (
    <section className={style.overview}>
      <h2>OVERSIGT</h2>
      {isMediumDevice && data!.length ? (
        <PriceCircleWrapper data={data!} />
      ) : null}
      {data ? <PriceCard data={data!} /> : null}
    </section>
  );
};
