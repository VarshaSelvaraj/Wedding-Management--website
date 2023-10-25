import React from 'react';
import Footer from './Footer';

const Catering = () => {
 
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
        <p className='what1'>C A T E R I N G S E R V I C E S </p>
        <p><strong>"Culinary Excellence for Your Special Moments: Our Catering Services"</strong></p>
    </div>
    <div className="grid-containerV">
      <div className="grid-itemV">
        <img src="https://www.viralbake.com/wp-content/uploads/2022/11/Indian-Wedding-Food-List.jpg" alt="oops!"  />
      </div>
      <div className="grid-itemV">
        <p style={sizeH}>E X Q U I S I T E C U I S I N E</p>
        <p style={size}>Indulge in a world of culinary sophistication with our Exquisite Cuisine. Our chefs are passionate about creating dishes that not only tantalize the taste buds but also elevate the art of dining. We take pride in using the freshest ingredients, blending flavors harmoniously, and presenting each plate as a masterpiece. Discover the perfect balance of flavors, textures, and creativity with our culinary offerings, and experience a taste of true culinary artistry.</p>
      </div>
    </div>
    <div className="grid-containerV">
    <div className="grid-itemV">
        <p style={sizeH}>D E S S E R T S & P A S T R I E S</p>
        <p style={size}>Explore a world of sweetness with our Desserts & Pastries. Our delightful treats, from decadent cakes to exquisite pastries, are meticulously crafted to bring joy to your taste buds. Whether you're celebrating a special moment or just looking for a daily indulgence, our selection of sweets promises a delectable experience that will keep you coming back for more.</p>
      </div>
      <div className="grid-itemV">
      <img src="https://christinequartephotography.com/wp-content/uploads/sites/11100/2021/11/CQP_RachelJosh-Wedding-SP-Insta-22-1024x683.jpg" alt="oops!"  />
       
      </div>
    </div>
    <div className="grid-containerV">
      <div className="grid-itemV">
        <img src="https://shaandaarevents.com/wp-content/uploads/2021/10/s.jpg" alt="oops!"  />
      </div>
      <div className="grid-itemV">
      <p style={sizeH}>E X P E R T I S E C O O K I N G</p>
        <p style={size}>Experience culinary mastery with our Expertise Cooking. Our skilled chefs combine years of experience with a passion for excellence to create dishes that are nothing short of extraordinary. From innovative flavors to elegant presentations, every meal is a testament to their culinary artistry. Taste the expertise in every bite. </p>
      </div>
    </div>

    <div className="grid-containerV">
    <div className="grid-itemV">
    <p style={sizeH}>A T T R A C T I V E S E R V I N G</p>
        <p style={size}>Enhance your dining experience with our Attractive Serving. We turn every meal into a visual masterpiece, from stylish table settings to creatively plated courses. Whether it's an intimate gathering or a grand event, our attention to detail ensures a visually stunning dining experience.</p>
      </div>
      <div className="grid-itemV">
      <img src="https://img.freepik.com/premium-photo/people-group-catering-buffet-food-indoor-restaurant_916191-57148.jpg" alt="oops!"  />
      </div>
    </div>

      <Footer />
    </div>
  );
};

export default Catering;
