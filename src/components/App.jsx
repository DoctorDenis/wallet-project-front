import { Route, Routes, Navigate } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage/DashboardPage.jsx';
import HomeTab from './HomeTab/HomeTab.jsx';
import StatisticsDiagram from './StatisticsDiagram/StatisticsDiagram.jsx';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Currency from './Currency/Currency.jsx';
import Media from 'react-media';
// import { useEffect } from 'react';
// import axios from 'axios';
import PrivateRoute from 'Routes/PrivateRoute.js';
import PublicRoute from 'Routes/PublicRoute.js';
// import { useSelector }  from 'react-redux';
// import { getToken } from 'redux/auth/auth-selectors.js';

export const App = () => {
  // const token = useSelector(getToken);
  // useEffect(() => {
  //   const currencyObj = JSON.parse(localStorage.getItem('currency'));
  //   if (!currencyObj) {
  //     axios
  //       .get(`https://wallet-project.cyclic.app/currency`)
  //       .then(res => {
  //         localStorage.setItem('currency', JSON.stringify(res.data));
  //         // setCurrency(res.data);
  //       })
  //       .catch(err => {
  //         throw err;
  //       });
  //   } else {
  //     // setCurrency(currencyObj);
  //   }
  //   // eslint-disable-next-line
  // }, []);

  return (
    <Routes>
      <Route
        path="register"
        element={
          <PublicRoute restricted>
            <RegistrationPage />
          </PublicRoute>
        }
      />
      <Route
        path="login"
        element={
          <PublicRoute restricted>
            <LoginPage />
          </PublicRoute>
        }
      />

      <Route
        path="/"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      >
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<HomeTab />} />
        <Route path="statistics" element={<StatisticsDiagram />} />
        <Route
          path="currency"
          element={
            <Media queries={{ small: '(max-width: 767px)' }}>
              {matches =>
                matches.small ? <Currency /> : <Navigate to="/home" />
              }
            </Media>
          }
        />
      </Route>
    </Routes>
  );
};
