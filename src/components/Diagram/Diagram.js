import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { optionsChart } from 'utils/optionsChart';
import colors from '../../assets/styles/_colors.scss';

import styles from './Diagram.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Diagram({ arrForRenderDonat }) {
  const bal = useSelector(state => state.auth.user.balance);
  const [options, setOptionsChart] = useState(optionsChart);

  const [data, setData] = useState({
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3, 5, 4, 3],
        backgroundColor: [
          colors.colorYellow,
          colors.colorPink,
          colors.colorPinkDeep,
          colors.colorBlueLight,
          colors.colorBlue,
          colors.colorAccent,
          colors.colorGreenLight,
          colors.colorGreen,
          colors.colorGreenDeep,
          colors.colorRed,
          colors.colorBlueNotactive,
          colors.colorMainText,
          colors.colorAccent,
          colors.colorWhite,
          colors.colorGrey,
          colors.colorGreyLight,
        ],
        borderColor: [
          colors.colorYellow,
          colors.colorPink,
          colors.colorPinkDeep,
          colors.colorBlueLight,
          colors.colorBlue,
          colors.colorAccent,
          colors.colorGreenLight,
          colors.colorGreen,
          colors.colorGreenDeep,
          colors.colorRed,
          colors.colorBlueNotactive,
          colors.colorMainText,
          colors.colorAccent,
          colors.colorWhite,
          colors.colorGrey,
          colors.colorGreyLight,
        ],

        cutout: 90,
        hoverBorderWidth: 5,
      },
    ],
  });

  useEffect(() => {
    if (arrForRenderDonat.length) {
      const newData = {
        datasets: [
          {
            data: arrForRenderDonat,
            backgroundColor: [
              colors.colorYellow,
              colors.colorPink,
              colors.colorPinkDeep,
              colors.colorBlueLight,
              colors.colorBlue,
              colors.colorAccent,
              colors.colorGreenLight,
              colors.colorGreen,
              colors.colorGreenDeep,
              colors.colorRed,
              colors.colorBlueNotactive,
              colors.colorMainText,
              colors.colorAccent,
              colors.colorWhite,
              colors.colorGrey,
              colors.colorGreyLight,
            ],
            borderColor: [
              colors.colorYellow,
              colors.colorPink,
              colors.colorPinkDeep,
              colors.colorBlueLight,
              colors.colorBlue,
              colors.colorAccent,
              colors.colorGreenLight,
              colors.colorGreen,
              colors.colorGreenDeep,
              colors.colorRed,
              colors.colorBlueNotactive,
              colors.colorMainText,
              colors.colorAccent,
              colors.colorWhite,
              colors.colorGrey,
              colors.colorGreyLight,
            ],
            cutout: 90,
            hoverBorderWidth: 5,
          },
        ],
      };
      const newOptionsChart = { plugins: { tooltip: true } };
      setOptionsChart(newOptionsChart);
      setData(newData);
    } else {
      const newData = {
        datasets: [
          {
            label: 'You are have not expenses in current period',
            data: [0.01],
            backgroundColor: [colors.colorGreyLight],
            borderColor: [colors.colorGreyLight],
            cutout: 90,
            hoverBorderWidth: 5,
            labelTextColors: colors.colorGreenDeep,
          },
        ],
        labelTextColors: colors.colorGreenDeep,
      };
      const newOptionsChart = { plugins: { tooltip: false } };

      setOptionsChart(newOptionsChart);
      setData(newData);
    }
  }, [arrForRenderDonat]);

  return (
    <div className={styles.diagram}>
      <Doughnut data={data} options={options} />
      <p className={styles.sumExpensesIntoDiagram}>{bal.toFixed(2)}</p>
    </div>
  );
}

//
