import { useMediaQuery } from "@uidotdev/usehooks";
import { Header } from "../components/Header";
import { OverviewLayout } from "../layout/OverviewLayout";
import { SettingsButton } from "../components/SettingsButton";

export const OverviewPage = () => {
  const isMediumDevice = useMediaQuery("only screen and (max-width : 1201px)");

  return (
    <>
      <Header />
      {isMediumDevice ? <SettingsButton /> : null}

      <OverviewLayout />
    </>
  );
};
