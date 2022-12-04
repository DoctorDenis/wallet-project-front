import React from 'react';

import Select from 'lib/Select';
import { monthsList } from '../../utils/monthsList';
import { yearsList } from '../../utils/yearsList';

import styles from './StatisticsDiagram.module.scss';
import ProductСategories from 'components/ProductСategories';
import TotalSum from 'components/TotalSum';
import Diagram from 'components/Diagram';
import Container from 'components/Container/Container';

const StatisticsDiagram = () => {
  return (
    // <Container>
    <div className={styles.blockdiagram}>
      <div className={styles.diagram}>
        <h2 className={styles.title}>Statistics </h2>
        <Diagram />
      </div>

      {/* <div className={styles.diagram}></div> */}
      <div className={styles.listStatistics}>
        <div className={styles.blockSelect}>
          <Select arrData={monthsList} />
          <Select arrData={yearsList} />
        </div>
        <ProductСategories />
        <TotalSum />
      </div>
    </div>
    // </Container>
  );
};

export default StatisticsDiagram;
