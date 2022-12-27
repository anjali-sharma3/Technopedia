import React from 'react';
import {useFormik} from 'formik';
import { signUpSchema } from '../schema_yup';

const initialValues={
    name:"",
    phone:"",
    email:"",
    password:"",
    confirmPassword:""
  
};
const Signup=()=>{
   const {values,errors,touched,handleBlur,handleChange,handleSubmit}= useFormik(

        {
            initialValues:initialValues,
            validationSchema:signUpSchema,
            onSubmit:(values,{resetForm}) => {
                console.log("🚀 ~ file: Signup.js:12 ~ Signup ~ val̥ue", values);
             
                resetForm();  
            }
        }
    );
    
    return(
        <div className="sinup-container">
            <h1>Sign up</h1>
            <div className="sinup-form-container">
                <form action="" onSubmit={handleSubmit}>
                  <div>
                 <label htmlFor="name"><i className="fa-solid fa-user"></i></label>
                 <input type="text" name='name'id="name" placeholder='Enter Your Full Name' 
                 value={values.name}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 autoComplete="off"
                 />
                 </div>
                 {errors.name&&touched.name?(<p className="form-error">{errors.name}</p>) :null}
                 <hr />
                 <div>
                 <label htmlFor="phone"><i class="fa-solid fa-phone"></i></label>
                 <input type="tel" placeholder='+91-' id='phone' name='phone' 
                 value={values.phone}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 autoComplete="off"/>
                 
                 </div>
                 {errors.phone&&touched.phone?  (<p className="form-error">{errors.phone}</p>):null}
                 <hr />
                <div>
                 <label htmlFor="email"><i class="fa-solid fa-envelope"></i></label>
                 <input type="email" placeholder='e.g. john@gmail.com'id='email' name='email' 
                 value={values.email}
                 onChange={handleChange}
                 onBlur={handleBlur} 
                 autoComplete="off"
                 />
                 </div>
                 {errors.email&&touched.email?(<p className="form-error">{errors.email}</p>):null }
                 
                 <hr />
                 <div>
                 <label htmlFor="password"><i class="fa-solid fa-lock"></i></label>
                 <input type="password"  placeholder='Enter password' id='password' name='password' 
                 value={values.password}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 autoComplete="off"/>
                 </div>
                 {errors.password&&touched.password?(<p className="form-error">{errors.password}</p>) :null}
                 
                 <hr />
                 <div>
                 <label htmlFor="confirm-password"><i class="fa-solid fa-lock"></i></label>
                 <input type="password" name="confirmPassword" id="confirm-password" placeholder='Confirm password' 
                 value={values.confirmPassword}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 autoComplete="off" />
                 </div>
                 {errors.confirmPassword&&touched.confirmPassword?( <p className="form-error">{errors.confirmPassword}</p>) :null}
                
                 <div class="sinup-btn">
                 <button className="signup-btn">
                    Create Account
                 </button>
                 </div>

                </form>
            </div>
           
        </div>
    );
}
export default Signup;