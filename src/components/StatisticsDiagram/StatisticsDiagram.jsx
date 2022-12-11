import React from 'react';
import { useState, useEffect } from 'react';
// import { useEffect } from 'react';

import Select from 'lib/Select';
import { monthsList } from '../../utils/monthsList';
import { yearsList } from '../../utils/yearsList';

import styles from './StatisticsDiagram.module.scss';
import ProductСategories from 'components/ProductСategories';
import TotalSum from 'components/TotalSum';
import Diagram from 'components/Diagram';

import { getCategories } from '../../services/getCategories';
import { getStatiscticsData } from 'services/getStatisticsData';

// import Container from 'components/Container/Container';

const StatisticsDiagram = () => {
  let dataUtc = new Date();
  let curMonth = dataUtc.getMonth();
  let curYear = dataUtc.getFullYear();
  console.log('curMonth:', curMonth);
  console.log('curYear:', curYear);
  const [categories, setCategories] = useState([]);
  const [statisctics, setStatisctics] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getStatiscticsData(curMonth, curYear);
      setStatisctics(data);
    }
    fetchData();
  }, [curMonth, curYear]);

  console.log('statisctics', statisctics);
  return (
    <div className={styles.blockdiagram}>
      <div className={styles.diagram}>
        <h2 className={styles.title}>Statistics </h2>
        <Diagram />
      </div>

      <div className={styles.listStatistics}>
        <div className={styles.blockSelect}>
          <Select arrData={monthsList} curData={curMonth} />
          <Select arrData={yearsList} />
        </div>
        <ProductСategories statisctics={statisctics.expensesByCategories} />
        <TotalSum totalSums={statisctics} />
      </div>
    </div>
  );
};

export default StatisticsDiagram;
