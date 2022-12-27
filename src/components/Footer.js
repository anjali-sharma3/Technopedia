import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="footer-container">
                <div className="col">
                    <h3 className='footer-brand'>Technopedia </h3>
                    <ul>
                        <li>101 A 9/1, Naraina Indl Area,Delhi,India</li>
                        <li><Link  to="/about" className='footer-color f-link'>www.technopedia.com </Link></li>
                        <li className='footer-color'>91-0598490009</li>
                        <li><Link className='footer-color f-link'>technopedia@query.com</Link></li>
                    </ul>
                </div>
                <div className="col">
                    <h4>Technologies</h4>
                    <ul>
                        <li>Web Development</li>
                        <li>Application Development</li>
                        <li>Blockchain Technology</li>
                        <li>Machine Learning</li>
                        <li>Artificial Intelligence</li>
                        <li>And many more</li>
                    </ul>
                </div>
                <div className="col">
                    <h4>Follow us</h4>
                    <ul>
                        <li><i class="fa-brands fa-square-instagram"></i><a href="https://www.instagram.com/" target="_blank" className='social-link'> Instagram</a></li>
                        <li><i class="fa-brands fa-facebook" ></i> <a href="https://www.facebook.com/"  target="_blank" className='social-link'>Facebook</a></li>
                        <li><i class="fa-brands fa-square-twitter"></i> <a href="https://twitter.com/login"  target="_blank" className='social-link'>Twitter</a></li>
                    </ul>
                </div>
            </div>
          
                <div className="row">
                <p>&copy; {new Date().getFullYear()}Technopedia | All right reserved.</p>
                </div>

        </div>
    );
}
export default Footer;