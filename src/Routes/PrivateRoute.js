import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLoggedIn } from '../redux/auth/auth-selectors';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(getLoggedIn);
  return isLoggedIn ? children : <Navigate to={'/login'} />;
}