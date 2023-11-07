import { NavLink } from "react-router-dom";
import style from "../styles/settingsmodal.module.scss";
import { SettingsContent } from "./SettingsContent";

export const SettingsModal = () => {
  return (
    <>
      <div className={style.modal}>
        <div className={style.modal_content}>
          <NavLink to="/dashboard" />
          <SettingsContent />
        </div>
      </div>
    </>
  );
};
