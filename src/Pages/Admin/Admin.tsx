import React, { createContext, useEffect, useState } from 'react'
import { Button } from '../../Components/Button/Button'
import { Header } from '../../Components/Headers/Header'
import { Profile } from '../../Components/Profile/Profile'
import http from '../../Services/Services'
import { AdminSideBar } from './AdminSideBar/AdminSideBar'
import { NewRegistration } from './NewRegistration/NewRegistration'
import styles from "./Admin.module.scss"
export const AdminContext=createContext("")
export const Admin = () => {
  const [data,setData]=useState();
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState();
  function toggleModal(buttonText: any, id?: any) {
    setModal(!modal);
    setPage(buttonText);
  }
  
  useEffect(() => {
    async function getData()
    {
      try {
        let response = await http.get("users");
        console.log(response)
        setData(response)
      } catch (e) {
        console.log("error", e);
      }
    }
    getData()
  }, []);
// export const AdminContext=createContext()
  return (
    <>
     <div className={styles.headerButton}>
        <span>Admin  </span>
      </div>
    <AdminSideBar/>

    </>

  )
}
