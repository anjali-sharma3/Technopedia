import React from 'react';
import { Link } from 'react-router-dom';
import { signUpSchema } from '../schema_yup';
const Login = () => {
  
    return (
        <>
            <div className="login-container">
                <h1>Login</h1>
                <div className="form-container">

                    <form action="">
                        <div className="name-field ">
                            <label htmlFor="name">
                                <i class="fa-solid fa-user"></i>
                            </label>
                            <input type="text" name='name' placeholder='Your full name'id='name' value="" />
                        </div>
                        <hr />
                        <div className="email-field">
                            <label htmlFor="email">
                                <i class="fa-solid fa-envelope"></i>
                            </label>
                            <input type="email" name='email' placeholder='E-mail'id='email' value="" />
                        </div>
                        <hr />
                        <div className="password-field">
                            <label htmlFor="password">
                                <i class="fa-solid fa-lock"></i>
                            </label>
                            <input type="password" name='password' placeholder='password'id='password' value="" />
                        </div>
                        <div className="login-btn">
                        <button className="submit-btn">
                            LOGIN
                        </button>
                        </div>
                        <div className='signup-reference'>
                            
                            <p className='signup-reference-para'>or</p>
                            
                            <Link to="/signup">create account</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>

    );
}
export default Login;