import React from 'react';
import NavigationLog from '../components/NavigationLog';
import Footer from './Footer'; // Adjust the import
import './BlogPage.css';

const BlogLog = () => {
  const s= {
     
    fontSize: '18px',
    textDecoration:'italic',
    marginRight:"370px"
   
  };
  return (
    <div className="blog-page">
      <NavigationLog/>
      <div className="descriptionB">
        <br/> <br/><h1 style={{marginTop:"100px" ,marginRight:"300px",letterSpacing:"8.4px",fontSize:"26px"}}>Explore Our Blog to Get to Know Us Better!</h1>
        <p style={s}>
        "Catch a glimpse of our company's insights <br/>and culture by diving into our blog.<br/> Discover our story, expertise, and more through engaging<br/> blog videos and content."</p>
      </div><br/><br/>
      <div className="grid-container1">
        <div className="grid-item1">
          <div className="video-container">

            <video autoPlay  muted poster="" className="blog-video">
              <source src="vdo6.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            <div className="video-text-overlay">
              <h2><i>19th January, 2023</i></h2>
              <p>Niyati & Aman</p>
            </div>
          </div>
        
        </div>
        <div className="grid-item1">
          <div className="video-container">
          <a href="/vdo5.mp4">
            <video autoPlay  muted poster="" className="blog-video">
              <source src="vdo5.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </a>
            <div className="video-text-overlay">
              <h2><i>9th March, 2023</i></h2>
              <p>Alisha & Nouman</p>
            </div>
          </div>

        </div>
        <div className="grid-item1">
          <div className="video-container">
          <a href="/vdo4.mp4">
            <video autoPlay  muted poster="" className="blog-video">
              <source src="vdo4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </a>
            <div className="video-text-overlay">
              <h2><i>Mesmerizing 2020 </i></h2>
              <p>Friends, bride, groom</p>
            </div>
          </div>
        </div>
        <div className="grid-item1">
          <div className="video-container">
          <a href="/vdo3.mp4">
            <video autoPlay  muted poster="" className="blog-video">
              <source src="vdo3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </a>
            <div className="video-text-overlay">
              <h2><i>2019 was great</i></h2>
              <p>Showreel of highlights</p>
            </div>
          </div>
          
        </div>
        <div className="grid-item1">
          <div className="video-container">
          <a href="/vdo2.mp4">
            <video autoPlay  muted poster="" className="blog-video">
              <source src="vdo2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </a>
            <div className="video-text-overlay">
              <h2><i>25th July, 2006</i></h2>
              <p>Chintan & Himanshi</p>
            </div>
          </div>
         
        </div>
        <div className="grid-item1">
          <div className="video-container">
          <a href="/vdo1.mp4">
            <video autoPlay  muted poster="" className="blog-video">
              <source src="vdo1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </a>
            <div className="video-text-overlay">
              <h2><i>Perfect 2022</i></h2>
              <p>Nothing but love & joy</p>
            </div>
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogLog;
