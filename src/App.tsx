import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Overview } from "./pages/Overview";
import { Now } from "./pages/Now";
import { History } from "./pages/History";
import { Settings } from "./pages/Settings";
import SettingsProvider from "./context/SettingsContext";
import { DashboardLayout } from "./layout/DashboardLayout";
import { MainLayout } from "./layout/MainLayout";

function App() {
  return (
    <>
      <SettingsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/overview" element={<Overview />} />
              <Route path="/dashboard" element={<DashboardLayout />} />
              <Route path="/now" element={<Now />} />
              <Route path="/history" element={<History />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Routes>
        </Router>
      </SettingsProvider>
    </>
  );
}
export default App;
