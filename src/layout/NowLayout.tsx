import { useState, useEffect, useContext } from "react";
import styledesktop from "../styles/now.module.scss";
import style from "../styles/nowlayout.module.scss";
import { SettingsContext } from "../context/SettingsContext";
import { useMediaQuery } from "@uidotdev/usehooks";
import { PriceCircleWrapper } from "../components/PriceCircleWrapper";
import { Footer } from "../components/Footer";
import { useFetch } from "../hooks/useFetch";
import { getDate } from "../utils/getDate";

export const NowLayout = () => {
  const [priceNow, setPriceNow] = useState<string>();
  const { tax } = useContext(SettingsContext);
  const { region } = useContext(SettingsContext);
  const isDesktop = useMediaQuery("only screen and (min-width : 1202px)");
  const baseUrl = "https://www.elprisenligenu.dk/api/v1/prices/";
  const { year, month, day, hour } = getDate();
  const { error, isLoading, data } = useFetch(
    `${baseUrl}${year}/${month}-${day < 9 ? "0" + day : day}_${region}.json`
  );

  function getTodaysPrice() {
    data?.forEach((item, index) => {
      if (index === hour) {
        setPriceNow(item.DKK_per_kWh.toFixed(3));
      }
      if (index === hour && tax === true) {
        let priceInclTax = item.DKK_per_kWh * 1.25;
        setPriceNow(priceInclTax.toFixed(3));
      }
    });
  }

  useEffect(() => {
    getTodaysPrice();
  }, [data]);

  if (isLoading) return isLoading;

  if (error) return <p>Kunne ikke hente oplysninger.</p>;

  return (
    <section className={styledesktop.nowdesktop}>
      <h2>Lige nu</h2>
      <div className={style.circlewrapper}>
        <div className={style.firstcircle}>
          <div className={style.secondcircle}>
            <div className={style.thirdcircle}>
              <h3>{priceNow} KR</h3>
              <h5>PR. KWH</h5>
            </div>
          </div>
        </div>
        <p>
          {hour}.00 - {hour + 1}.00
        </p>
      </div>
      {isDesktop && data ? (
        <>
          <PriceCircleWrapper data={data!} />
          <Footer />
        </>
      ) : null}
    </section>
  );
};
