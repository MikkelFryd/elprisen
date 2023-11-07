import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useEffect } from "react";

export const MainLayout = () => {
  const isDesktop = useMediaQuery("only screen and (min-width : 1202px)");
  const isMediumDevice = useMediaQuery("only screen and (max-width : 1201px)");
  const navigate = useNavigate();

  useEffect(() => {
    if (isDesktop) {
      navigate("/dashboard");
    } else {
      navigate("/overview");
    }
  }, [isDesktop]);

  return (
    <>
      <Outlet />
      {isMediumDevice ? <Footer /> : null}
    </>
  );
};
