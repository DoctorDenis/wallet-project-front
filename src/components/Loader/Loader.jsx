import { ThreeDots } from 'react-loader-spinner';
import style from './loader.module.scss';

export const Loader = () => {
  return (
    <div className={style.loader}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4a56e2"
        ariaLabel="three-dots-loading"
        // wrapperStyle={{}}
        // wrapperClassName=""
        visible={true}
      />
    </div>
  );
};
