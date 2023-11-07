import style from "../styles/historylayout.module.scss";
import { SettingsButton } from "../components/SettingsButton";
import { useMediaQuery } from "@uidotdev/usehooks";
import { HistoryLayout } from "../layout/HistoryLayout";

export const History = () => {
  const isMediumDevice = useMediaQuery("only screen and (max-width : 1201px)");

  return (
    <>
      {isMediumDevice ? <SettingsButton /> : null}
      <section className={style.historycontainer}>
        <HistoryLayout />
      </section>
    </>
  );
};
