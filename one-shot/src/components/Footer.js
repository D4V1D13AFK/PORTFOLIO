import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="social">
        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
        <a href="#"><i className="fa-brands fa-square-instagram"></i></a>
        <a href="#"><i className="fa-brands fa-facebook"></i></a>
        <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
      </div>
      <ul className="list">
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Privacy Policies</a></li>
      </ul>
      <p className="copyright">© 2024 Your Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

