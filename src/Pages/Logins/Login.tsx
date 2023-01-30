
import { Formik, useFormik } from 'formik';
import { Button } from '../../Components/Button/Button';
import styles from "./Login.module.scss"
import { LoginSchema } from '../../schemas';
import { Link, useNavigate } from 'react-router-dom';
import http from '../../Services/Services';
import utility from '../../utility/utility';
const initialValues={
    userEmail:"",
    userPassword:""
}
export const Login = () => {
  const navigate = useNavigate();
  const {values,touched,errors,handleBlur,handleChange,handleSubmit}=useFormik({
    initialValues:initialValues,
    validationSchema:LoginSchema,
     onSubmit:async (values,action)=>{
        console.log(values)
        action.resetForm()
        try {
          let loginResponse = await http.post("users", values);
          console.log(loginResponse);
          // utility.modifyStore("token", loginResponse.data.token)
          console.log("login")
          //  if(loginResponse.data.roleId==="635fb524e962be0f00a95d70")
          // {
            navigate("/admin")
          // }
          // else if(loginResponse.data.roleId==="635fb524e962be0f00a95d72")
          // {
          //   navigate("/clerk")
          // }
          // else if(loginResponse.data.roleId==="635fb524e962be0f00a95d71")
          // {
          //   navigate("/accountant")
          // }
        } catch (e:any) {
  
          console.log("error", e);
        }
    }
  })
  {
    console.log(errors)
  }
  return (
    <>
   <div className={styles.background}>
    <div className={styles.SignUpButton}>
      <Button  buttonText=<Link to={'/signup'}>SignUp</Link>/>
      </div>
  
      <div className={styles.Form}>
        <form  onSubmit={handleSubmit}>
          <div>
          <h1 className={styles["project-heading"]}>
            Login</h1>
          </div>
          <div>
            <label htmlFor="userEmail">Email</label>
            <input
              type="text"
              autoComplete='off'
              name="userEmail"
              id="name"
              placeholder='Email'
              value={values.userEmail}
              onChange={handleChange}
              onBlur={handleBlur} 
            />
            <span className={styles.error}>
            {errors.userEmail && touched.userEmail ?(<span>{errors.userEmail}</span>):null}
            </span>
          </div>
          <div>
            <label htmlFor="password">userPassword</label>
            <input
              type="text"
              autoComplete='off'
              name="userPassword"
              id="name"
              placeholder='userPassword'
              value={values.userPassword}
              onChange={handleChange}
              onBlur={handleBlur} 
            />
            <span className={styles.error}>
            {errors.userPassword && touched.userPassword ?(<span>{errors.userPassword}</span>):null}
            </span>
          </div>
          <div>
           <button>Forgot Password</button> 
          </div>
          <div>
            <Button buttonText={"submit"}/>
          </div>
        </form>
       
      </div>
     
     </div>
     </>
    
  );
};

