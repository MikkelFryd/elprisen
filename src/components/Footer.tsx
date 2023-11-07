import style from "../styles/footer.module.scss";
import { SettingsContext } from "../context/SettingsContext";
import { useContext } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

export const Footer = () => {
  const isDesktop = useMediaQuery("only screen and (min-width : 1202px)");
  const { region } = useContext(SettingsContext);
  const { tax } = useContext(SettingsContext);

  function handleTaxText(tax: boolean) {
    if (tax === true) {
      return "inkl. moms";
    } else if (tax === false) {
      return "ex. moms";
    }
  }

  function handleRegion() {
    if (region === "DK1") {
      return "Vest Danmark";
    } else if (region === "DK2") {
      return "Øst Danmark";
    }
  }

  return (
    <footer className={isDesktop ? style.footerdesktop : style.footermobile}>
      <p>
        Priserne er <span>{handleTaxText(tax)}</span> og afgifter
      </p>
      <p>
        Du vises lige nu priserne for
        <span> {handleRegion()}</span>
      </p>
    </footer>
  );
};
