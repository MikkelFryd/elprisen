import { useMediaQuery } from "@uidotdev/usehooks";
import { SettingsContent } from "../components/SettingsContent";
import { SettingsModal } from "../components/SettingsModal";
import { Header } from "../components/Header";

export const SettingsPage = () => {
  const isDesktop = useMediaQuery("only screen and (min-width : 1202px)");

  return (
    <>
      <Header />
      {isDesktop ? <SettingsModal /> : <SettingsContent />}
    </>
  );
};
