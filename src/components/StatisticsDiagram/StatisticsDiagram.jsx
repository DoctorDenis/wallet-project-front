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

  const [categories, setCategories] = useState([]);
  const [statisctics, setStatisctics] = useState([]);
  const [numberMonth, setNumberMonth] = useState(curMonth);
  const [numberYear, setNumberYear] = useState(curYear);

  useEffect(() => {
    async function fetchData() {
      const data = await getStatiscticsData(numberMonth, numberYear);
      setStatisctics(data);
    }
    fetchData();
  }, [numberMonth, numberYear]);

  const passNumberMonth = selectedEl => {
    setNumberMonth(selectedEl);
  };

  const passNumberYear = selectedEl => {
    setNumberYear(yearsList[selectedEl]);
  };

  const chooseIndexCurYear = (a, b) => {
    return a.indexOf(b.toString());
  };

  const arrForRenderDonat = () => {
    return statisctics.expensesByCategories?.map(
      oneCategoryExpenses => oneCategoryExpenses.total
    );
  };

  return (
    <div className={styles.blockdiagram}>
      <div className={styles.diagram}>
        <h2 className={styles.title}>Statistics </h2>
        <Diagram arrForRenderDonat={arrForRenderDonat()} />
      </div>

      <div className={styles.listStatistics}>
        <div className={styles.blockSelect}>
          <Select
            arrData={monthsList}
            curData={numberMonth}
            passNumberMonthOrYear={passNumberMonth}
          />
          <Select
            arrData={yearsList}
            curData={chooseIndexCurYear(yearsList, numberYear)}
            passNumberMonthOrYear={passNumberYear}
          />
        </div>
        <ProductСategories statisctics={statisctics.expensesByCategories} />
        <TotalSum totalSums={statisctics} />
      </div>
    </div>
  );
};

export default StatisticsDiagram;
