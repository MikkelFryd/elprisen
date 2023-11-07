import { useState, useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";
import style from "../styles/historylayout.module.scss";
import { PriceCard } from "../components/PriceCard";
import { useFetch } from "../hooks/useFetch";
import { getDate } from "../utils/getDate";

export const HistoryLayout = () => {
  const baseUrl = "https://www.elprisenligenu.dk/api/v1/prices/";
  const { region } = useContext(SettingsContext);
  const { year, month, day } = getDate();
  const [url, setUrl] = useState<string>(
    `${baseUrl}${year}/${month}-${day < 9 ? "0" + day : day}_${region}.json`
  );
  const [reversedDate, setReversedDate] = useState<string>();
  const { data, isLoading, error } = useFetch(url!);

  const handleDate = (_date: string) => {
    let { year, month, day } = getDate(_date);
    let url = `${baseUrl}${year}/${month}-${
      day < 9 ? "0" + day : day
    }_${region}.json`;
    let reversedDate = `${day}/${month}/${year}`;
    setUrl(url);
    setReversedDate(reversedDate);
  };

  if (isLoading) return;

  if (error)
    return (
      <>
        <h2>HISTORIK</h2>
        <div className={style.historywrapper}>
          <input
            type="date"
            name=""
            id=""
            onChange={(e) => handleDate(e.target.value)}
          />
          <h5>ELPRISERNE D. {reversedDate}</h5>
          <b>Der fandtes desværre ikke nogen el pris for denne dato</b>
        </div>
      </>
    );

  if (data)
    return (
      <>
        <h2>HISTORIK</h2>
        <div className={style.historywrapper}>
          <input type="date" onChange={(e) => handleDate(e.target.value)} />
          <h5>ELPRISERNE D. {reversedDate}</h5>
          {data.length > 1 ? (
            <article className={style.timecontainer}>
              <PriceCard data={data} />
            </article>
          ) : (
            <p>Prøv en anden dato.</p>
          )}
        </div>
      </>
    );
};
