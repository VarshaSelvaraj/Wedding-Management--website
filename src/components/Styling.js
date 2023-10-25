import React from 'react';
import Footer from './Footer';

const Styling = () => {
 
  const size = {
    fontSize: '18px',
   padding: '38px'
 };
 const sizeH = {
    fontSize: '20px',
 };

  return (
   
 <div className="venue-container">
      <div className="desc">
        <p className='what1'>P E R S O N A L I Z E D S T Y L I N G </p>
        <p><strong>"Elevate Your Wedding Style, Our Expert Styling Services"</strong></p><br/>
    </div>
    <div className="grid-containerV">
      <div className="grid-itemV">
        <img src="https://d39l2hkdp2esp1.cloudfront.net/img/photo/142014/142014_00_2x.jpg" alt="oops!"  />
      </div>
      <div className="grid-itemV">
        <p style={sizeH}>C U S T O M I Z E D S E R V I C E S</p>
        <p style={size}>We specialize in creating unforgettable and personalized weddings. With our customized wedding styling, we'll help you turn your dream wedding into a reality. From colors and themes to decor and attire, we ensure every detail reflects your unique love story and style. Let's make your<br/>big day truly special!</p>
      </div>
    </div><br/><br/>
    <div className="grid-containerV">
    <div className="grid-itemV">
        <p style={sizeH}>C O M P A S S I O N A T E A S S I S T A N C E</p>
        <p style={size}>We offer compassionate assistance for your big day. Our focus is on understanding your needs and providing a guiding hand throughout the entire wedding process. We're here to ensure your wedding is a heartfelt and stress-free celebration of your love, leaving you with beautiful <br/>memories to cherish.</p>
      </div>
      <div className="grid-itemV">
      <img src="https://chilhambridal.co.uk/wp-content/uploads/2019/10/Jessica-Hawkins-wedding-hair-and-makeup-in-Kent.jpg" alt="oops!"  />
       
      </div><br/><br/>
    </div>
   
      <Footer />
    </div>
  );
};

export default Styling;
