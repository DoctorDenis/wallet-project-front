import { ThreeDots } from 'react-loader-spinner';
import style from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={style.loader}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4a56e2"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  );
};

export default Loader;
