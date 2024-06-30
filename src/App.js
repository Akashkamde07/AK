import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Make sure to import the CSS file

function App() {

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const fadeInElements = document.querySelectorAll('.fade-in');
      fadeInElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App bg-white min-vh-100 p-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-3 mb-4">
            <button type="button" className="btn btn-primary " onClick={() => scrollToSection('section1')}>Submit Application</button>
          </div>
          <div className="col-md-2 mb-4">
            <button type="button" className="btn btn-primary " onClick={() => scrollToSection('section2')}>Select Domain</button>
          </div>
          <div className="col-md-2 mb-4">
            <button type="button" className="btn btn-primary " onClick={() => scrollToSection('section3')}>Certifite</button>
          </div>
        </div>

        <div id='section1' className="row mt-5 fade-in">
          <div className="col-md-6">
            <img src="application.png" className="img-fluid card-img-left pt-4 hover-opacity" alt="Submit Application" />         
          </div>  
          <div className='col-md-6'>
            <h5 className="mt-5">Submit Application</h5>
            <p className="card-text">Tell us a bit about yourself and mention your reasons for participating in this program.</p>
            <h6>Unleash your potential. Apply now for exclusive workshop!</h6>
            <button type="button" className="btn btn-outline-primary btn-hover">Apply Now</button>
          </div>
        </div>

        <img className='way1 align-middle rounded mx-auto d-block img-fluid hover-opacity fade-in' src='way1.png' alt='way1'></img>
          
        <div id='section2' className="row fade-in"> 
          <div className='col-md-6'>
            <h5 className="mt-5">Select Domain</h5>
            <p className="card-text">Choose the domain of your interest and get started with the program.</p>
            <h6>Ready to take your skills to the next level?</h6>
            <button type="button" className="btn btn-outline-primary btn-hover">Apply Now</button>
          </div>
          <div className="col-md-6">
            <img src="application.png" className="img-fluid card-img-left pt-4 hover-opacity" alt="Select Domain" />         
          </div> 
        </div>

        <img className='align-middle rounded mx-auto d-block img-fluid hover-opacity fade-in' src='way2.png' alt='way2'></img>
        
        <div className="row fade-in">
          <div className="col-md-6">
            <img src="application.png" className="img-fluid card-img-left pt-4 hover-opacity" alt="Certifite" />         
          </div>  
          <div id='section3' className='col-md-6'>
            <h5 className="mt-5">Certifite</h5>
            <p className="card-text">Get certified after the completion of the design.</p>
            <h6>Ready to take your skills to the next level?</h6>
            <button type="button" className="btn btn-outline-primary btn-hover">Apply Now</button>
          </div>
        </div>

        <img className='ms-5 img-fluid hover-opacity fade-in' src='way3.png' alt='way3'></img>
      </div>
    </div>
  );
}

export default App;

