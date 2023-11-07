import style from "../styles/dashboardlayout.module.scss";
import { useState } from "react";
import { SettingsModal } from "../components/SettingsModal";
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
      <section className={style.dashboardlayout}>
        {openModal ? <SettingsModal setOpenModal={setOpenModal} /> : null}
        {isMediumDevice ? <SettingsButton /> : null}

        <NowLayout />
        <OverviewLayout />
        <HistoryLayout />
      </section>
    </>
  );
};
