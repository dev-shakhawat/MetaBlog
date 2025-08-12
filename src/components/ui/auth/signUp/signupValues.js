import { object, string } from "yup"




export const signupValuesSchema = object({
    name: string().required('Name is required'),
    email: string().email().required('Email is required').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email address'),
    password: string().required('Password is required').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\s]+$/ , "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number."),
})


export const signupValues = {
    name: "",
    email: "",
    password: "",
}