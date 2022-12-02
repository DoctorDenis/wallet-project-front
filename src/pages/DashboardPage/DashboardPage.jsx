import React from 'react'
import Container from 'components/Container/Container'
import Header from '../../components/Header/Header'
import css from './DashboardPage.module.scss'
import SideBar from 'components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'

const DashboardPage = () => {
  
  
  return (
      <Container>
        <div className={css.home_side}>
      <div className={css.container}>
          <Header />
          <div className={css.backg}>
            <SideBar />

          </div>
        
       <Outlet />
        </div>
          
      </div>
      </Container>
  )
}

export default DashboardPage