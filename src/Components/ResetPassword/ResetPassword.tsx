import React, { useState } from 'react'
import http from '../../Services/Services';
import { Modal } from '../Modal/Modal';
import styles from "./ResetPassword.module.scss"
export const ResetPassword = ({toggleModal,modal,Page}:any) => {
const [data,setData]=useState({oldPassword:"",newPassword:"",confirmPassword:""})

    async function submitForm(e:any)
      {
        e.preventDefault();
        try{
          const response=await http.post("customer/",{
            oldPassword:data.oldPassword,
            newPassword:data.newPassword,
            confirmPassword:data.confirmPassword,
          })
          console.log(response)
        }
        catch(e){
          console.log(e)
        }
      }
      function handleOnChange(e:any)
      {
        const newData={...data};
        // @ts-ignore
        newData[e.target.name]=e.target.value;
        setData(newData)
        console.log(newData)
      }
  return (
    <>
    <Modal modal={modal} setModal={toggleModal} Page={Page}/>
  <h1 className={styles.heading}>ResetPassword</h1>
          <form onSubmit={(e)=>submitForm(e)}>
          <div className={styles.ResetPassword}>
            <div className={styles.details}>
            <label htmlFor="name">OldPassword</label>
            <input
            type="text"
            name="oldPassword"
            value={data.oldPassword}
            id="oldPassword"
            onChange={(e)=>handleOnChange(e)}
            required />
            </div>
            <div className={styles.details}>
            <label htmlFor="newPassword">New  Password</label>
            <input type="text"
            name="newPassword"
            value={data.newPassword}
            id="newPassword"
            onChange={(e)=>handleOnChange(e)}
            required/>
            </div>
            <div className={styles.details}>
            <label htmlFor="confirmPassword">Confirm
            Password</label>
            <input type="text"
            name="confirmPassword"
            value={data.confirmPassword}
            id="confirmPassword"
            onChange={(e)=>handleOnChange(e)}
            required/>
            </div>
            <button>Submit</button>
          </div>
         </form>
    </>
  )
}

