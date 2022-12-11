import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from './Diagram.module.scss';
import colors from '../../assets/styles/_colors.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      // label: '# of Votes',
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
      ],

      cutout: 90,

      hoverBorderWidth: 5,
      // width: 50,
    },
  ],
};

export default function Diagram({ arrForRenderDonat }) {
  const bal = useSelector(state => state.auth.user.balance);

  if (arrForRenderDonat) {
    data.datasets[0].data = arrForRenderDonat;
  }

  useEffect(() => {
    if (arrForRenderDonat) {
      data.datasets[0].data = arrForRenderDonat;
    }
  }, [arrForRenderDonat]);

  return (
    <div className={styles.diagram}>
      {arrForRenderDonat && (
        <>
          <Doughnut data={data} />
        </>
      )}
      <p className={styles.sumExpensesIntoDiagram}>{bal}</p>
    </div>
  );
}
