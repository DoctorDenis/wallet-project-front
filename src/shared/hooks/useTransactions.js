import { useSelector } from 'react-redux';
import { getIsLoading } from '../../redux/transaction/transaction-selectors';

export const useTransactions = () => {
  const isLoading = useSelector(getIsLoading);
  return isLoading;
};
