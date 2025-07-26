import { object, string } from "yup"

export const signinValuesSchema = object({
    email: string().email().required('Email is required').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email address'),
    password: string().required('Password is required'),
})

export const signinValues = {
    email: "",
    password: "",
}