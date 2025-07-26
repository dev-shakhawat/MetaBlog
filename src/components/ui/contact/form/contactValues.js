import { object, string } from "yup"

export const contactValuesSchema = object({
    name: string().required('Name is required'),
    email: string().email().required('Email is required').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email address'),
    subject: string().required('Subject is required'),
    message: string().required('Message is required'),
})




export const contactValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
}