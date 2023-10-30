// Home.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import Footer from './Footer';
import NavigationBar from '../components/NavigationBar';


function Home() {
  const [fadeIn, setFadeIn] = useState(false);
  
  useEffect(() => {
    // Trigger the fade-in effect after a short delay (e.g., 500ms)
    const delay = 500;
    const timeoutId = setTimeout(() => {
      setFadeIn(true);
    }, delay);

    // Clean up the timeout to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, []);
  
  
  return (
   <div className="home-container">
        <NavigationBar/>
      <div className='home'>
      <div className={`home-content ${fadeIn ? 'fade-in' : ''}`}><br/>
      <h1> <i><br/>"Minimalism is great.<br /> Maximalism is too.<br /> What we avoid is medium-ism."</i></h1>
     <Link to="/signup"><button>Book Now!</button></Link>
     {/* <Link to="/bookingform"><button>development</button></Link> */}
     </div>
  </div>
  <div className="desc">
        <p className='wha'>F U N P L A N S</p>
        <p><strong>We Plan ,You Party! </strong></p>
        <p>"Welcome to Event Excellence, where every moment becomes a masterpiece. <br/>Our passion for creativity, attention to detail, and commitment are the cornerstones of our exceptional event services. <br/>Join us in crafting unforgettable experiences that last a lifetime."
        </p><br/>
  </div>
  <div className="slider-container">
  <div className="slider">
    <div className="slide">
      <img src="https://bonniesen.com/wp-content/uploads/2019/07/Ruby-The-Fox-Letterpress-Wedding-Invitation-Film-Wedding-Photographer-Bonnie-Sen-Photographer-1-774x1024.jpg" alt="Slide 1" />
      <div className="slide-text">
        <h3>P L A N N I N G</h3>
        <p>Text for Slide 1</p>
      </div>
    </div>
    <div className="slide">
      <img src="https://london.bridestory.com/images/c_fill,dpr_1.0,f_auto,fl_progressive,pg_1,q_80,w_680/v1/assets/whatsapp-image-2021-03-23-at-17.40.54-S1owFHDN_/jingle-wedding-entertainment-organizer_wedding-entertainment1616496915_1.jpg" alt="Slide 3" />
      <div className="slide-textR">
        <h3>E N T E R T A I N M E N T</h3>
        <p>Text for Slide 6</p>
      </div>
    </div>
    <div className="slide">
      <img src="https://cdn.weddingsonline.ie/blog/wp-content/uploads/2022/04/776eb67667804feebba321da59452c81.jpeg" alt="Slide 3" />
      <div className="slide-text">
        <h3>B A N Q U E T H A L L S</h3>
        <p>Text for Slide 3</p>
      </div>
    </div>
    <div className="slide">
      
      <img src=" https://www.justmarriedfilms.com/wp-content/uploads/2020/06/2.1-Photo-1-scaled.jpg" alt="Slide 3" />
      <div className="slide-textR">
        <h3>W E D D I N G B O O K</h3>
        <p>Text for Slide 4</p>
      </div>
    </div>
    <div className="slide">
      <img src="https://whimsicalwonderlandweddings.com/wp-content/uploads/2021/02/Burnt-Orange-Wedding-Ideas-Laura-Williams-Photography-25.jpg" alt="Slide 3" />
      <div className="slide-text">
        <h3>T H E M E D W E D D I N G S</h3>
        <p>Text for Slide 5</p>
      </div>
    </div>
    <div className="slide">
      <img src="https://assets.vogue.in/photos/5f19549a63616a15c5d4186f/2:3/w_2560%2Cc_limit/Wedding%2520decor.jpg" alt="Slide 2" />
      <div className="slide-textR">
        <h3>S T Y L I N G</h3>
        <p>Text for Slide 2</p>
      </div>
    </div>
    
    <div className="slide">
    <img src="https://mangostudios.com/wp-content/uploads/2018/05/vote-for-the-best-wedding-photography-in-toronto-3.jpg" alt="Slide 3" />
        <div className="slide-text">
        <h3>P H O T O G R A P H Y</h3>
        <p>Text for Slide 6</p>
      </div>
    </div>
  </div>
</div>

   <div className="grid-container">
    <div className="grid-item">
        <h4>A Decade of Excellence</h4>
        <p>Celebrating 10 years of delivering excellence in event planning and execution. Join us as we continue to create unforgettable experiences.</p>
    </div>
    <div className="grid-item"> 
        <h4>Global Reach, Local Roots</h4>
        <p>With a global reach and local roots, we've expanded our footprint while staying true to our commitment to community and excellence.</p>
    </div>
    <div className="grid-item">
      <h4>Client Testimonials</h4>
      <p>Over the years, we've had the privilege of serving thousands of clients. Read what they have to say about their exceptional event experiences with us.</p>
    </div>
</div>
<div className="card-container">
      <div className="card">
          <img src="https://www.customerthermometer.com/img/Ways-to-Increase-Customer-Loyalty1-1-1500x624.jpg" style={{width:"380px"}} alt="Card 1" />
          <div className="card-text"><b>1000+ Happy Clients</b></div>
        </div>
        <div className="card">
          <img src="https://img.freepik.com/premium-vector/business-people-team-office-teamwork-professional-finance-workers-group-businessman-characters-cartoon-illustration_102902-1654.jpg?w=900" alt="Card 2" />
          <div className="card-text"><b>Creative team at best services</b></div>
        </div>
       <div className="card">
          <img src="https://melanietaylorconsulting.com/wp-content/uploads/2022/04/cropped-CultureTransformation.png" alt="Card 3" />
          <div className="card-text"><b>Organizing successful events</b></div>
        </div>
       </div>
       <br/><br/>


<div className='homeCont' >
  <div className='homeCont-text'>
      <p className='what'><strong>Plan your event with us!</strong></p>
      <p className="text-muted" >Explore venues & ideas and our very popular blog to prepare ,<br/>for your weddings following latest trends.<br/>30% offer on your first booking, Grab your offer!<br/><i>Contact us for more details.</i></p>
      <Link to="/Budget"><button>Estimate your budget here!</button></Link>
      </div>
    </div>
    
       
       <Footer/>
       </div>
  );
}

export default Home;
