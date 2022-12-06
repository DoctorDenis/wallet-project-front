import { useSelector } from 'react-redux';
import { getLoggedIn } from '../../redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getLoggedIn);
  return isLoggedIn;
};
