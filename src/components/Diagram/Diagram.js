import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import colors from '../../assets/styles/_colors.scss';
import styles from './Diagram.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Diagram({ arrForRenderDonat }) {
  const bal = useSelector(state => state.auth.user.balance);

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
      setData(newData);
    } else {
      const newData = {
        // options: {
        //   tooltips: false,
        // },
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
      setData(newData);
    }
  }, [arrForRenderDonat]);

  return (
    <div className={styles.diagram}>
      <Doughnut data={data} options={{ plugins: { tooltip: false } }} />
      <p className={styles.sumExpensesIntoDiagram}>{bal.toFixed(2)}</p>
    </div>
  );
}

//
