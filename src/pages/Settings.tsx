import { useMediaQuery } from "@uidotdev/usehooks";
import { SettingsContent } from "../components/SettingsContent";
import { SettingsModal } from "../components/SettingsModal";

export const Settings = () => {
  const isDesktop = useMediaQuery("only screen and (min-width : 1202px)");

  return <>{isDesktop ? <SettingsModal /> : <SettingsContent />}</>;
};
