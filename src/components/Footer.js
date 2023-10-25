import React from 'react';
import SocialMediaIcons from './SocialMediaIcons'; 

function Footer() {
  return (
    <footer className="footer1">
      <div className="logo">
        
        <span className="brand-name">FunPlans</span>
        <p>"Your Perfect Day, Our Expertise"</p>
        </div>
        


        
        <div className="social-media">
        <p>Contact us at: <a href="mailto:contact@example.com">funplans@123.com</a></p>
          <p>FOLLOW US</p>
          <SocialMediaIcons />
        </div>
      </footer>
  );
}

export default Footer;
