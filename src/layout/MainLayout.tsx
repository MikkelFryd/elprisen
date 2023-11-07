import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useEffect } from "react";

export const MainLayout = () => {
  const isDesktop = useMediaQuery("only screen and (min-width : 1202px)");

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
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
