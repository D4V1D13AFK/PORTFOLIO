import React from 'react';
import './Home.css';
import mainImage from './main.jfif'; // Ajusta la ruta según sea necesario

const Home = () => {
  return (
    <section className='home'>
      <div className='home-img'>
        <img src={mainImage} alt="Profile" />
      </div>
      <div className='home-content'>
        <h1>Hi, it's <span>David</span></h1>
        <h3 className='typing-text'>I'm a <span></span></h3>
        <p>
    I am a <strong>Python developer</strong> proficient in libraries such as <strong>Matplotlib</strong>, <strong>NumPy</strong>, and <strong>Scikit-learn</strong>. In addition to data analysis and machine learning, I have some experience in <strong>web development</strong> using <strong>React</strong>. I enjoy building efficient and scalable solutions across different domains.
        </p>
        <div className='social-icons'>
          <a href='#'><i className='fa-brands fa-linkedin'></i></a>
          <a href='#'><i className='fa-brands fa-instagram'></i></a>
          <a href='#'><i className='fa-brands fa-github'></i></a>
          <a href='#'><i className='fa-brands fa-x-twitter'></i></a>
        </div>
        <a href='#' className='btn'>Download CV</a>
      </div>
    </section>
  );
}

export default Home;
;
