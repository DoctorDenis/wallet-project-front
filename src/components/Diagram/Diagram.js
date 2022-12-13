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
    if (arrForRenderDonat) {
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
    }
  }, [arrForRenderDonat]);

  return (
    <div className={styles.diagram}>
      <Doughnut data={data} />
      <p className={styles.sumExpensesIntoDiagram}>{bal}</p>
    </div>
  );
}
