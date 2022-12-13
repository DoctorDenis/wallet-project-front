import React from 'react';
import css from './Navigation.module.scss';
import Home from '../../assets/images/Homes-min.svg';
import HomeActive from '../../assets/images/Home-min.svg'
import Statistics from '../../assets/images/Statistic-min.svg';
import StatisticsActive from '../../assets/images/Statistic-active-min.svg';
import Currency from '../../assets/images/Dollar-min.svg';
import CurrencyActive from '../../assets/images/Dolar-active-min.svg';
import { NavLink, useLocation } from 'react-router-dom';
import Media from 'react-media';


const Navigation = () => {
  const location = useLocation()
   
  return (
   
      <nav className={css.navigation}>
        <Media queries={{ mobile: { maxWidth: 767 } }}>
          {matches =>
            matches.mobile && (
              <ul className={css.list}>
                <li className={css.item_link}>
                <NavLink className={css.item_nav} to="/home">
                 
                    <img className={location.pathname==='/home' ? css.svg_active : css.svg} src={location.pathname==='/home' ?  HomeActive : Home} alt="home" />
                   
                  </NavLink>
                </li>
                <li className={css.item_link}>
                  <NavLink className={css.item_nav} to="/statistics">
                    
                  <div className="div">
                     <img
                      className={location.pathname==='/statistics' ? css.svg_active : css.svg}
                      src={location.pathname==='/statistics' ? StatisticsActive : Statistics}
                      alt="statistics"
                    />
                 </div>
                   
                  </NavLink>
                </li>
                <li className={css.item_link}>
                  <NavLink className={css.item_nav} to="/currency">
                    <img className={location.pathname==='/currency' ? css.svg_active : css.svg} src={location.pathname==='/currency' ?CurrencyActive: Currency} alt="currency" />
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
                    <img className={location.pathname === '/home' ? css.svg_tabl_active : css.svg_tabl} src={location.pathname==='/home' ?  HomeActive : Home} alt="home" />
                    <p className={location.pathname === '/home' ? css.active : css.text}>Home</p>
                  </NavLink>
                </li>
                <li className={css.item_link}>
                  <NavLink className={css.item_nav_tabl} to="/statistics">
                    <img
                      className={location.pathname === '/statistics' ? css.svg_tabl_active : css.svg_tabl}
                      src={location.pathname==='/statistics' ? StatisticsActive : Statistics}
                      alt="statistics"
                    />
                    <p className={location.pathname === '/statistics' ? css.active : css.text}>Statistics</p>
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
