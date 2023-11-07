import { useState } from "react";
import { Header } from "../components/Header";
import { SettingsModal } from "../components/SettingsModal";
import { DashboardLayout } from "../layout/DashboardLayout";
import { HistoryLayout } from "../layout/HistoryLayout";
import { NowLayout } from "../layout/NowLayout";
import { OverviewLayout } from "../layout/OverviewLayout";
import style from "../styles/desktoplayout.module.scss";

export const DashboardPage = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <Header openModal={openModal} setOpenModal={setOpenModal} />
      <section className={style.desktoplayout}>
        <NowLayout />
        <OverviewLayout />
        <HistoryLayout />
      </section>
      {openModal ? <SettingsModal setOpenModal={setOpenModal} /> : null}
    </>
  );
};
