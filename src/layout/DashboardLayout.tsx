import style from "../styles/desktoplayout.module.scss";
import { useState } from "react";
import { SettingsModal } from "../components/SettingsModal";
import { Header } from "../components/Header";
import { NowLayout } from "./NowLayout";
import { OverviewLayout } from "./OverviewLayout";
import { HistoryLayout } from "./HistoryLayout";
import { SettingsButton } from "../components/SettingsButton";
import { useMediaQuery } from "@uidotdev/usehooks";

export const DashboardLayout = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const isMediumDevice = useMediaQuery("only screen and (max-width : 1201px)");

  return (
    <>
      {/*       <Header openModal={openModal} setOpenModal={setOpenModal} />
       */}{" "}
      <section className={style.desktoplayout}>
        {openModal ? <SettingsModal setOpenModal={setOpenModal} /> : null}
        {isMediumDevice ? <SettingsButton /> : null}

        <NowLayout />
        <OverviewLayout />
        <HistoryLayout />
      </section>
    </>
  );
};
