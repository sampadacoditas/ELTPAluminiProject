
import { Formik, useFormik } from 'formik';
import { Button } from '../../Components/Button/Button';
import { signUpSchema } from '../../schemas';
import styles from "./SignUp.module.scss"

const initialValues={
    name:"",
    email:"",
    password:"",
    year:"",
    track:""
}
export const SignUp = () => {
  const {values,touched,errors,handleBlur,handleChange,handleSubmit}=useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit:(values,action)=>{
        console.log(values)
        action.resetForm()
    }
  })
  {
    console.log(errors)
  }
  return (
    <>
   <div className={styles.background}>
      <div className={styles.Form}>
      <h1 className={styles["project-heading"]}>
            SignUp</h1>
        <form  onSubmit={handleSubmit}>
          <div>
            {/* <label htmlFor="name">username</label> */}
            <input
              type="text"
              autoComplete='off'
              name="name"
              id="name"
              placeholder='Enter yourName'
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className={styles.error}>
            {errors.name && touched.name ?(<div>{errors.name}</div>):null}</div>
          </div>
          <div>
            {/* <label htmlFor="email">Email</label> */}
            <input
              type="text"
              autoComplete='off'
              name="email"
              id="email"
              placeholder='Enter Email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur} 
            />
            <div className={styles.error}>
            {errors.email && touched.email ?(<div>{errors.email}</div>):null}
            </div>
           
          </div>
          <div>
            {/* <label htmlFor="password">Password</label> */}
            <input
              type="password"
              autoComplete='off'
              name="password"
              id="password"
              placeholder='Enter Password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className={styles.error}>
            {errors.password && touched.password ?(<div>{errors.password}</div>):null}</div>
          </div>
          <div>
            {/* <label htmlFor="track">Track</label> */}
            <input
              type="text"
              autoComplete='off'
              name="track"
              id="track"
              placeholder=' Enter Track'
              value={values.track}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className={styles.error}>
            {errors.track && touched.track ?(<div>{errors.track}</div>):null}</div>
          </div>
          <div>
            {/* <label htmlFor="year">Year</label> */}
            <input
              type="text"
              autoComplete='off'
              name="year"
              id="year"
              placeholder=' Enter Year'
              value={values.year}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className={styles.error}>
            {errors.year && touched.year ?(<div>{errors.year}</div>):null}</div>
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

