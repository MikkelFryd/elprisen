import { NavBar } from "./NavBar";
import style from "../styles/header.module.scss";
import { useMediaQuery } from "@uidotdev/usehooks";
import headerLogo from "../assets/mainIcon.svg";
import { SettingsButton } from "./SettingsButton";

export const Header = () => {
  const isDesktop = useMediaQuery("only screen and (min-width : 1202px)");

  return (
    <>
      {isDesktop ? (
        <header className={style.headerdesktop}>
          <img src={headerLogo} alt="Logo" />
          <h4>ELPrisen.nu</h4>
          <SettingsButton />
        </header>
      ) : (
        <header className={style.header}>
          <NavBar />
        </header>
      )}
    </>
  );
};
