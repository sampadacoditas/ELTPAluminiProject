import { Profile } from "../Components/Profile/Profile";
import { Admin } from "../Pages/Admin/Admin";
import { Login } from "../Pages/Logins/Login";
import { SignUp } from "../Pages/SignUp/SignUp";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai"
// import { NewRegistration } from "../Pages/Admin/NewRegistration/NewRegistration";
import { EventsAndPosts } from "../Pages/Admin/EventsAndPosts/EventsAndPosts";
import { UserDetails } from "../Pages/Admin/UserDetails/UserDetails";
import { NewRegistration } from "../Pages/Admin/NewRegistration/NewRegistration";
export const RoutesData = [
  {
    path: "/",
    component: Login
  },
  {
    path: "/signup",
    component: SignUp,
  },
  {
    path: "/admin",
    component: Admin,
    children:[
    {
      path:"newRegistration",
      component:NewRegistration,
    },
    {
      path:"eventsAndPosts",
      component:EventsAndPosts,
    },
    {
      path:"userDetails",
      component:UserDetails,
    }
  ]
  },
  

  // {
  //   path: "/accountant",
  //   // component: Accountant,
  // },
];
