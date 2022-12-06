import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth/auth-selectors';

export const useToken = () => {
  const token = useSelector(getToken);
  return token;
};
