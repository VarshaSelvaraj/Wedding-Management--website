import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Service.css'; 
import Footer from './Footer';
import NavigationBar from '../components/NavigationBar';


const ServicesPage = () => {
  
  
  
  const carouselItems = [
    {
      image: 'https://lucymunozphotography.com/wp-content/uploads/2019/02/Lucy-Munoz-Photography-28-1.jpg',
      text: ' Unveil Your Dream Wedding Venue Destination',
    },
    {
      image: 'https://salsaritas.com/wp-content/uploads/2018/05/WeddingCatering2020-9770-1024x683.jpg',
      text: 'Exquisite Wedding Catering Services',
    },
    {
      image: 'https://images.squarespace-cdn.com/content/v1/5f294bfc6bf057426af98f0c/8e8e344d-2728-4749-b6e8-8ff05465cb32/1V8A6274.jpg',
      text: 'Experience Personalized Wedding Styling',
    },
    {
      image: 'https://www.paperlesspost.com/blog/wp-content/uploads/080822_Blog_DecorationsForAnOutdoorWedding_01-hero.png',
      text: 'Creating Timeless Beauty with Our Decorations',
    },
    {
      image: 'https://cdn.profoto.com/cdn/0520114/globalassets/profoto-stories/wedding/shun/wedding-photography-shun-a1x-bts-image-06_3840.jpg?width=1280&quality=75&format=jpg',
      text: 'Documenting Your Special Day with Artistry',
    },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,      
    autoplaySpeed: 1000, 
  };
 

  return (
    <div className="services-page">
    <NavigationBar/>
      <Slider {...carouselSettings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item.image} alt={`Service ${index + 1}`} />
            <div className="carousel-text">{item.text}</div>
          </div>
        ))}
      </Slider>

      <div className="service-description">
        <p className='wha'>W H A T  W E  D O</p>
        <p><strong>Step into a world of exceptional wedding services.</strong></p>
        <p>
        Explore our diverse wedding services, including catering, decor, and photography, designed to <br/>create your perfect day. Our expert team ensures a seamless and memorable celebration.<br/>" Let us turn your dream wedding into a reality. "
        </p>
      </div>

      <div className="card-container1">
      <div className="card1">
        <Link to="/Catering">
          <img src="https://www.weddingsutra.com/images/Vendor_Images/Catering/gyanjee-caterers/gyanjee-caterers-01.jpg" alt="Card 1"  />
          </Link>
          <div className="card-text">Catering Services</div>
      
    </div>
    <div className="card1">
        <Link to="/Styling">
          <img src="https://images.squarespace-cdn.com/content/v1/5f07aeb8cf21964e6fa981fc/1595481352100-HZT75I2GJWXOMQNZAF2F/bridal-makeup-application-lipstick-wedding-brisbane-makeup-artist.jpg" alt="Card 2"   />
          </Link>
          <div className="card-text">Personalized Styling</div>
       
        </div>
      <div className="card1">
        <Link to="/Decor">
          <img src="https://media.cntraveler.com/photos/56e0811762c2faba1dda7045/1:1/w_1536,h_1536,c_limit/peabody-opera-house-wedding-cr-mnc-photography.jpg" alt="Card 3"  />
          </Link>
          <div className="card-text">Decor Services</div>
          
        </div>
        </div>

        <div className="card-container1">
        <div className="card1">
        <Link to="/Venue">
          <img src="https://weddingsdegoa.com/wp-content/uploads/2020/01/Quinta-de-Valadares-6.jpg" alt="Card 1" />
          </Link>
          <div className="card-text">Venue Planning</div>
          
        </div>

        <div className="card1">
        <Link to="/Invitation">
          <img src="https://i.etsystatic.com/6415355/r/il/8574ed/4634690975/il_fullxfull.4634690975_cezj.jpg" alt="Card 2" />
          </Link>
          <div className="card-text">Invitation cards</div>
          
        </div>

        <div className="card1">
        <Link to="/Photography">
          <img src="https://wildromanticphotography.com/wp-content/uploads/Wild-Romantic-Photography-Crown-Aviary-Wedding-162-1200x1200-cropped.jpg" alt="Card 3"  />
          </Link> 
          <div className="card-text">Photography & Videography</div>
         
        </div>
        
      </div>

      <center style={{padding:"60px",fontSize:"20px"}} className='ser'>We'd love to hear what you think about our services and management. Your feedback helps us improve and serve you better. Please take a moment to share your thoughts with us. Your insights are invaluable!"<br/><br/>
      <Link to="/feedback"><button>Give us your feedback here!</button></Link></center>
      

      <br/><br/>
      <Footer/>
    </div>
  );
};

export default ServicesPage;
