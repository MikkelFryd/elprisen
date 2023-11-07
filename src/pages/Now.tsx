import { useMediaQuery } from "@uidotdev/usehooks";
import { NowLayout } from "../layout/NowLayout";
import { SettingsButton } from "../components/SettingsButton";
import style from "../styles/now.module.scss";
import { Header } from "../components/Header";

export const Now = () => {
  const isMediumDevice = useMediaQuery("only screen and (max-width : 1201px)");
  return (
    <>
      <Header />
      {isMediumDevice ? <SettingsButton /> : null}
      <section className={isMediumDevice ? style.nowmobile : style.nowdesktop}>
        <h2>ELPRISEN LIGE NU</h2>
        <NowLayout />
      </section>
    </>
  );
};
