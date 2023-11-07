import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { OverviewPage } from "./pages/OverviewPage";
import { NowPage } from "./pages/NowPage";
import { HistoryPage } from "./pages/HistoryPage";
import { SettingsPage } from "./pages/SettingsPage";
import SettingsProvider from "./context/SettingsContext";
import { DashboardPage } from "./pages/DashboardPage";
import { MainLayout } from "./layout/MainLayout";

function App() {
  return (
    <>
      <SettingsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/overview" element={<OverviewPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/now" element={<NowPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Route>
          </Routes>
        </Router>
      </SettingsProvider>
    </>
  );
}
export default App;
