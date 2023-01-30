import React, { useContext } from 'react'
import styles from "./Button.module.scss"
import { IButtonProps } from './Button.types'
export const Button = ({buttonText,onClick,id}:IButtonProps) => {

  return (
    <>
    <button className={styles.buttonContainer} onClick={onClick} id={id}>{buttonText}</button>
    </>
  )
}
