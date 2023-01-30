import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import { Profile } from '../Profile/Profile'
import styles from "./Header.module.scss"
export const Header = () => {
  return (
    <header>
        <div className={styles.headerContainer}>
          <div className={styles.profile}>
          <Button  buttonText=<Link to={'/profile'}>Profile</Link>/>
          </div>
          <div className={styles.logout}>
          <Button  buttonText=<Link to={'/logout'}>logout</Link>/>
          </div>
        </div>
    </header>
  )
}
