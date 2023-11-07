import { useState } from "react";
import { Header } from "../components/Header";
import { SettingsModal } from "../components/SettingsModal";
import { HistoryLayout } from "../layout/HistoryLayout";
import { NowLayout } from "../layout/NowLayout";
import { OverviewLayout } from "../layout/OverviewLayout";
import style from "../styles/dashboardlayout.module.scss";

export const DashboardPage = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <Header openModal={openModal} setOpenModal={setOpenModal} />
      <section className={style.dashboardlayout}>
        <NowLayout />
        <OverviewLayout />
        <HistoryLayout />
      </section>
      {openModal ? <SettingsModal setOpenModal={setOpenModal} /> : null}
    </>
  );
};
