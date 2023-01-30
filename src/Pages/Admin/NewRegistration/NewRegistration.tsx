//ts-ignore
import React, { createContext, useReducer } from "react";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./NewRegistration.module.scss"
import {
  ACTION_TYPES,
  INITIAL_STATE,
  postReducer,
} from "../../../AppReducer/App.reducer";
import { Button } from "../../../Components/Button/Button";
import { Modal } from "../../../Components/Modal/Modal";
import Table from "../../../Components/Table/Table";
import http from "../../../Services/Services";
import { Profile } from "../../../Components/Profile/Profile";
import { EventsAndPosts } from "../EventsAndPosts/EventsAndPosts";
import TablePaginationDemo from "../../../Components/Pagination/TablePaginationDemo";


 export const NewRegistrationContext=createContext<any>({})
 export const NewRegistration = () => {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState();
  const [id,setId]=useState();
  const [url,setUrl]=useState();
  console.log(state);
  console.log(state.posts.data?.user)
  function toggleModal(buttonText: any, id?: any) {
    setModal(!modal);
    setPage(buttonText);
  }
  console.log(page);
  useEffect(() => {
    async function handleFetch() {
      dispatch({ type: ACTION_TYPES.FETCH_START });
      try {
        let data = await http.get("customer/");
        console.log(data.data.user);
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
      } catch (err: any) {
        dispatch({ type: ACTION_TYPES.FETCH_ERROR });
      }
    }
    handleFetch();
  }, []);

  const column = [
    { heading: "Name", value: "name" },
    { heading: "Email", value: "email" },
    { heading: "shippingAddress", value: "shippingAddress" },
    { heading: "state", value: "state" },
  ];
  return (
    <NewRegistrationContext.Provider value={{modal,setModal,page,setPage,id,setId,setUrl}}>
        {modal && <Modal modal={modal} setModal={toggleModal} Page={page} url={url}/>}
        <Table data={state.posts.data?.user} 
        column={column} 
        buttonText1={"Edit"}
        buttonText2={"Delete"}
        JSXElement1={Profile}
        JSXElement2={EventsAndPosts}
        url={"customer/"}
        />
        <div className={styles.pagination}>
        <TablePaginationDemo/>
        </div>
    </NewRegistrationContext.Provider>
  );
};
