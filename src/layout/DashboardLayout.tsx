import { Now } from "../pages/Now";
import { Overview } from "../pages/Overview";
import { History } from "../pages/History";
import style from "../styles/desktoplayout.module.scss";
import { useState } from "react";
import { SettingsModal } from "../components/SettingsModal";
import { Header } from "../components/Header";

export const DashboardLayout = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <Header openModal={openModal} setOpenModal={setOpenModal} />
      <section className={style.desktoplayout}>
        {openModal ? <SettingsModal setOpenModal={setOpenModal} /> : null}
        <Now />
        <Overview />
        <History />
      </section>
    </>
  );
};
