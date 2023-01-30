import * as Yup  from "yup"
export const signUpSchema=Yup.object({
    // userEmail:Yup.string().email().required("please enterr your email"),
    // userPassword:Yup.string().min(6).required("please entre your password"),
    name:Yup.string().min(2).max(25).required("please enterr your name"),
    email:Yup.string().email().required("please enterr your email"),
    password:Yup.string().min(6).required("please entre your password"),
    year:Yup.number().required("please entre your year"),
    track:Yup.string().min(1).required("please entre your track"),
    
})
export const LoginSchema=Yup.object({
    userEmail:Yup.string().email().required("please enterr your email"),
    userPassword:Yup.string().min(6).required("please entre your password"),
})
