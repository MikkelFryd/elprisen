import { Now } from "../pages/Now";
import { Overview } from "../pages/Overview";
import { History } from "../pages/History";
import style from "../styles/desktoplayout.module.scss";

export const DesktopLayout = () => {
  return (
    <section className={style.desktoplayout}>
      <Now />
      <Overview />
      <History />
    </section>
  );
};
