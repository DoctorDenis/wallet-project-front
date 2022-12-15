import { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import HomeTab from './HomeTab/HomeTab.jsx';
import StatisticsDiagram from './StatisticsDiagram/StatisticsDiagram.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import Currency from './Currency/Currency.jsx';
import Media from 'react-media';

import Loader from './Loader/Loader';
// import { useEffect } from 'react';
// import axios from 'axios';
import PrivateRoute from 'Routes/PrivateRoute.js';
import PublicRoute from 'Routes/PublicRoute.js';

// import DashboardPage from '../pages/DashboardPage/DashboardPage.jsx';
// import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
// import LoginPage from '../pages/LoginPage/LoginPage';
const DashboardPage = lazy(() =>
  import('../pages/DashboardPage/DashboardPage.jsx')
);

const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

export const App = () => {
  return (
    <Suspense
      fallback={
        <>
          <Loader />
        </>
      }
    >
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
          {/* <Route index element={<Navigate to="/home" />} /> */}
          <Route
            index
            element={
              <Media queries={{ table: '(min-width: 767px)' }}>
                {matches => {
                  console.log('matches');
                  matches.table && <Navigate to="/home" />;
                }}
              </Media>
            }
          />

          <Route path="home" element={<HomeTab />} />
          <Route path="statistics" element={<StatisticsDiagram />} />
          <Route
            path="currency"
            element={
              <Media queries={{ small: '(max-width: 767px)' }}>
                {matches => {
                  console.log('matches small');
                  matches.small ? <Currency /> : <Navigate to="/home" />;
                }}
              </Media>
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Suspense>
  );
};
