import * as Yup from 'yup';
export const signUpSchema=Yup.object({
    name:Yup.string().min(3).max(25).required("This field is required"),
    phone:Yup.number().min(10).required("This field is required"),
    email:Yup.string().required("This field is required"),
    password:Yup.string().required('This is required field'),
    confirmPassword:Yup.string().required().oneOf([Yup.ref("password"),null,'password must be match']),

});