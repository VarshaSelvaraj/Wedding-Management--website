import React from 'react';
import Footer from './Footer';
import './venue.css';
const Venue = () => {
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
        <p className='what1'>V E N U E P L A N N I N G </p>
        <p><strong>"Where dreams meet venues." </strong></p>
    </div>
    <div className="grid-containerV">
      <div className="grid-itemV">
        <img src="https://images.squarespace-cdn.com/content/v1/5757f5dcf85082d2ca1e509e/1612888127285-SV4QQL5RQFVDC03KDKEX/MissyMillys_EventRentals_Repurpose.gif" alt="oops!"  />
      </div>
      <div className="grid-itemV">
        <p style={sizeH}>B A N Q U E T   H A L L S</p>
        <p style={size}>Experience the charm of our banquet hall facilities, where every detail is designed to create a memorable ambiance for your special occasions. Banquet halls are often a one-stop-shop for wedding venue selection with all your boxes checked especially with a gust list planned between 150 to 800 people. </p>
      </div>
    </div>
    <div className="grid-containerV">
    <div className="grid-itemV">
        <p style={sizeH}>B E A C H E S & I S L A N D S</p>
        <p style={size}>If a seaside soirée has been your lifelong wedding dream, you can absolutely make it happen. And the best part is, we provide an affordable tariff for beach weddings.So you can say "I do" with the sand beneath your feet and the waves as your backdrop, without breaking the bank.</p>
      </div>
      <div className="grid-itemV">
        <img src="https://www.discoveryshoresboracay.com/files/2016/08/beach-destination-wedding-in-the-Philippines-1.gif" alt="oops!"  />
      </div>
    </div>
    <div className="grid-containerV">
      <div className="grid-itemV">
        <img src="https://images.squarespace-cdn.com/content/v1/51e7ab7de4b0cfebaa144bcf/1512349874703-MYAE4ZOTIRJTT9SX91IO/friday.gif" alt="oops!"  />
      </div>
      <div className="grid-itemV">
      <p style={sizeH}>P L A C E S O F W O R S H I P</p>
        <p style={size}>Our expertise lies in curating enchanting weddings within the sacred confines of temples, churches, and various places of worship. Our commitment to providing all necessary amenities guarantees that your traditional wedding unfolds with grace and grandeur. Trust us to make your special day truly divine.</p>
      </div>
    </div>

    <div className="grid-containerV">
    <div className="grid-itemV">
    <p style={sizeH}>L A W N S & F A R M H O U S E S</p>
        <p style={size}>Farms offer a beautiful outdoor space with spacious rolling hills and fields. It can be especially affordable if a family member or friend lives on a farm and allows you to use the space for free.We offer a breezy wedding experience in our lush lawns with premium plans, ensuring your special day is as beautiful as it is memorable.</p>
      </div>
      <div className="grid-itemV">
        <img src="https://www.muskphotographyandfilms.co.uk/wp-content/uploads/2020/06/wedding-videography-hampshire-festival-wedding-.gif" alt="oops!"  />
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Venue;
