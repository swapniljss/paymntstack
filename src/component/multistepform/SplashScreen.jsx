import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SplashScreen.css'; 

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login'); 
    }, 4000); 

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={styles.container}>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <p className="tagline">
        PaymntStack is a financial platform to manage your business and money.
      </p>
      <h1 className="companyName">
        Paymnt <span className="highlight">Stack</span>
      </h1>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#006D77', 
    position: 'relative',
  },
};

export default SplashScreen;
