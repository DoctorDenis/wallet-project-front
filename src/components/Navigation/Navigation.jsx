import React from 'react'
import css from './Navigation.module.scss'
import Home from '../../assets/images/Home-min.svg';
import Statistics from '../../assets/images/Statistic-min.svg'
import { NavLink } from 'react-router-dom';
const Navigation = () => {
  return (
    <div className={css.navigation}>
          <ul className={css.list}>
              <li className={css.item_link}>
                  <NavLink className={css.item_nav} to='/'>
                       <img className={css.svg_home}  src={Home} alt="home" />
                  <p className={css.text}>Home</p>
                 </NavLink>
                
                 
              </li>
              <li className={css.item_link}>
                  <NavLink className={css.item_nav} to='/statistics'>
                        <img className={css.svg_statistics} src={Statistics} alt="statistics" />
                  <p className={css.text}>Statistics</p>
                </NavLink>
              </li>
      </ul>
    </div>
  )
}

export default Navigation
