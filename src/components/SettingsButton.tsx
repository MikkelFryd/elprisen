import { useMediaQuery } from "@uidotdev/usehooks";
import style from "../styles/settings.module.scss";
import { NavLink } from "react-router-dom";
import { ModalProps } from "../types/types";

export const SettingsButton = (props: ModalProps) => {
  const isMediumDevice = useMediaQuery("only screen and (max-width : 1201px)");

  const setOpenModal = props.setOpenModal;
  return (
    <>
      {isMediumDevice ? (
        <div
          className={isMediumDevice ? style.settingslink : style.settingsbutton}
        >
          <NavLink to="/settings" aria-label="settings-link" />
        </div>
      ) : (
        <>
          <span onClick={() => setOpenModal!(true)}></span>
        </>
      )}
    </>
  );
};
