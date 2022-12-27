import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <div className="nav">
        <Link to='/' ><img src="/images/myLogo.jpg"  alt="technopedia" className='link brand-logo' /></Link>
        <Link exact activeClassName="active-class" to="/about" className="brand-name" onlyActiveOnIndex>Technopedia</Link>
        <Link exact activeClassName="active-class" to="/" className='link' onlyActiveOnIndex>Home</Link>
        <Link exact activeClassName="active-class" to="/about" className='link' onlyActiveOnIndex>About</Link>
        <Link exact activeClassName="active-class" to="/blogs" className='link' onlyActiveOnIndex>Blogs</Link>
        <Link exact activeClassName="active-class" to="/login" className='link' onlyActiveOnIndex>Login</Link>
      </div>
    </>
  );
}
export default Navbar;