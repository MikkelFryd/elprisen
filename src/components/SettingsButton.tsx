import { useMediaQuery } from "@uidotdev/usehooks";
import style from "../styles/settings.module.scss";
import { Link } from "react-router-dom";

export const SettingsButton = () => {
  const isMediumDevice = useMediaQuery("only screen and (max-width : 1201px)");

  return (
    <div className={isMediumDevice ? style.settingslink : style.settingsbutton}>
      <Link to="/settings" aria-label="settings-link" />
    </div>
  );
};
