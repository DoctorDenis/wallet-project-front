import { Route, Routes, Navigate } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage/DashboardPage.jsx';
import HomeTab from './HomeTab/HomeTab.jsx';
import StatisticsDiagram from './StatisticsDiagram/StatisticsDiagram.jsx';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../pages/LoginPage/LoginPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import Currency from './Currency/Currency.jsx';
import Media from 'react-media';

export const App = () => {
 
  return (
    <Routes>

      <Route path="register" element={<RegistrationPage />} />
      <Route path="login" element={<LoginPage />} />
      
        <Route path="/" element={<DashboardPage />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<HomeTab />} />

      
      {/* <Route path="/" element={<DashboardPage />}> */}
        {/* <Route index element={<HomeTab />} /> */}

        <Route path="statistics" element={<StatisticsDiagram />} />
        {/* <Route path="currency" element={<Currency/> } /> */}
        <Route path="currency" element={<Media query={{ maxWidth: 767 }}>
                    {(matches) =>
                      matches ? <Currency /> : <Navigate to="/home" />
                    }
                  </Media>} />
      </Route>
    </Routes>
  );
};
