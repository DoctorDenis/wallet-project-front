import { Route, Routes } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage/DashboardPage.jsx';
import HomeTab from './HomeTab/HomeTab.jsx';
import StatisticsDiagram from './StatisticsDiagram/StatisticsDiagram.jsx';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';

export const App = () => {
  return (
    <Routes>
      <Route path="registration" element={<RegistrationPage />} />
      <Route path="/" element={<DashboardPage />}>
        <Route index element={<HomeTab />} />
        <Route path="statistics" element={<StatisticsDiagram />} />
      </Route>
    </Routes>
  );
};
