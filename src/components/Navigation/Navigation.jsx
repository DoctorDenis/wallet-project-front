import React from 'react';
import css from './Navigation.module.scss';
import Home from '../../assets/images/Home-min.svg';
import Statistics from '../../assets/images/Statistic-min.svg';
import Currency from '../../assets/images/Dollar-min.svg';
import { NavLink } from 'react-router-dom';
import Media from 'react-media';

const Navigation = () => {
  return (
   
      <nav className={css.navigation}>
        <Media queries={{ mobile: { maxWidth: 767 } }}>
          {matches =>
            matches.mobile && (
              <ul className={css.list}>
                <li className={css.item_link}>
                  <NavLink className={css.item_nav} to="/home">
                    <img className={css.svg} src={Home} alt="home" />
                    {/* <p className={css.text}>Home</p> */}
                  </NavLink>
                </li>
                <li className={css.item_link}>
                  <NavLink className={css.item_nav} to="/statistics">
                    <img
                      className={css.svg}
                      src={Statistics}
                      alt="statistics"
                    />
                    {/* <p className={css.text}>Statistics</p> */}
                  </NavLink>
                </li>
                <li>
                  <NavLink className={css.item_nav} to="/currency">
                    <img className={css.svg} src={Currency} alt="currency" />
                  </NavLink>
                </li>
              </ul>
            )
          }
        </Media>

        <Media queries={{ table: { minWidth: 768 } }}>
          {matches =>
            matches.table && (
              <ul>
                <li className={css.item_link}>
                  <NavLink className={css.item_nav_tabl} to="/home">
                    <img className={css.svg_tabl} src={Home} alt="home" />
                    <p className={css.text}>Home</p>
                  </NavLink>
                </li>
                <li className={css.item_link}>
                  <NavLink className={css.item_nav_tabl} to="/statistics">
                    <img
                      className={css.svg_tabl}
                      src={Statistics}
                      alt="statistics"
                    />
                    <p className={css.text}>Statistics</p>
                  </NavLink>
                </li>
              </ul>
            )
          }
        </Media>

       
      </nav>
  
  );
};

export default Navigation;
