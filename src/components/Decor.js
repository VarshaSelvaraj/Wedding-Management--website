import React from 'react';
import Footer from './Footer';

const Decor = () => {
 
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
        <p className='what1'>D E C O R S E R V I C E S </p>
        <p><strong>"Culinary Excellence for Your Special Moments: Our Catering Services"</strong></p>
    </div>
    <div className="grid-containerV">
      <div className="grid-itemV">
        <img src="https://www.brides.com/thmb/l2EFYpSzv6i-JaRnnBcDB9g2eMA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__brides__public__brides-services__production__2017__02__17__58a750e657b774039c7ee83f_18-Backyard-Colorado-Wedding-Laura-Murray-ba7081f3aba34c6881ca267d0d4c46ca.JPG" alt="oops!"  />
      </div>
      <div className="grid-itemV">
        <p style={sizeH}>R U S T I C</p>
        <p style={size}>String lights, mason jars, twine, lace, and all wood everything contributes to the simple and homey vibe of this theme. If you're a huge crafting fan, rustic wedding décor will be your cup of tea. Consider a more rural venue, like a chic and intimate barn, if this is your dream wedding style.</p>
      </div>
    </div>
    <div className="grid-containerV">
    <div className="grid-itemV">
        <p style={sizeH}>R E G E N C Y</p>
        <p style={size}>We can thank Bridgerton for the resurgence of this wedding style. With palatial settings, lavish linens, princess gowns, and no shortage of florals, regency-themed nuptials are anything but subtle, so if you can't choose between all the bells and whistles, this regal aesthetic won't make you compromise.</p>
      </div>
      <div className="grid-itemV">
      <img src="https://www.theknot.com/tk-media/images/cbf00d43-2b18-4b6d-9491-dcd968f447d0~rs_768.h" alt="oops!"  />
       
      </div>
    </div>
    <div className="grid-containerV">
      <div className="grid-itemV">
        <img src="https://cdn.greenvelope.com/blog/wp-content/uploads/Wedding-reception.jpeg" alt="oops!"  />
      </div>
      <div className="grid-itemV">
      <p style={sizeH}>W H I M S I C A L</p>
        <p style={size}>For the whimsical couple, your wedding will be one full of bright splashes of color and quirky, bohemian components. Incorporate design elements like multicolored balloons, streamers, punchy floral arrangements, and mismatched chairs.

</p>
      </div>
    </div>

    <div className="grid-containerV">
    <div className="grid-itemV">
    <p style={sizeH}>B O H E M I A N</p>
        <p style={size}>Calling all bohemian couples! If this matches your own personal style, then say "I do" to the corresponding wedding theme. Just like your wedding dress, a bohemian wedding remains cool and carefree, but still beautiful. Keep the venue decorations simplistically elegant, with oriental rugs lining the aisle and altar, and decorative pillows or hanging macramé decorations.</p>
      </div>
      <div className="grid-itemV">
      <img src="https://i0.wp.com/decorsutrablog.com/wp-content/uploads/2021/06/Decorsutra_Boho-Decor_6.jpg?resize=780%2C704&ssl=1" alt="oops!"  />
      </div>
    </div>

      <Footer />
    </div>
  );
};

export default Decor;
