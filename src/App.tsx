import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Overview } from "./pages/Overview";
import { Now } from "./pages/Now";
import { History } from "./pages/History";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Settings } from "./pages/Settings";
import SettingsProvider from "./context/SettingsContext";
import { DesktopLayout } from "./layout/DesktopLayout";

function App() {
  const isMediumDevice = useMediaQuery("only screen and (max-width : 1201px)");
  const isDesktop = useMediaQuery("only screen and (min-width : 1202px)");

  function handleContent() {
    if (isMediumDevice === true) {
      return (
        <>
          <SettingsProvider>
            <Router>
              <Header />
              <Routes>
                <Route index path="/" element={<Overview />} />
                <Route path="/now" element={<Now />} />
                <Route path="/history" element={<History />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </Router>
            <Footer />
          </SettingsProvider>
        </>
      );
    } else if (isDesktop === true) {
      return (
        <>
          <SettingsProvider>
            <Router>
              <Header />
              <Routes>
                <Route path="/settings" element={<Settings />} />
              </Routes>
              <DesktopLayout />
            </Router>
          </SettingsProvider>
        </>
      );
    }
  }
  return <>{handleContent()}</>;
}

export default App;
