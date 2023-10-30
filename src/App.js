import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import HomeLog from './components/HomeLog';
import ServicesPage from './components/ServicesPage';
import './App.css';
import BlogPage from './components/BlogPage';
import ContactUsPage from './components/ContactUsPage';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import Catering from './components/Catering';
import Styling from './components/Styling';
import Decor from './components/Decor';
import Venue from './components/Venue';
import Invitation from './components/Invitation';
import Photography from './components/Photography';
import BookingForm from './components/BookingForm';
import Budget from './components/Budget' ;
import DateTime from './components/DateTime';
import Profile from './components/Profile';
import ServicesLog from './components/ServicesLog';
import BlogLog from './components/BlogLog';
import ContactLog from './components/ContactLog';
import Feedback from './components/Feedback';
import FeedbackLog from './components/FeedbackLog';
function App() {
  

  return (
    <Router>
      
      <Routes>
      <Route path="*" element={<HomePage />} />
      <Route path="/homeLog" element={<HomeLog/>} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} /> 
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/catering" element={<Catering/>} />
        <Route path="/styling" element={<Styling/>} />
        <Route path="/decor" element={<Decor/>} />
        <Route path="/invitation" element={<Invitation/>} />
        <Route path="/venue" element={<Venue/>} />
        <Route path="/photography" element={<Photography/>} />
        <Route path="/bookingform" element={<BookingForm/>} />
        <Route path="/budget" element={<Budget/>} />
        <Route path="/datetime" element={<DateTime/>} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/servicesLog" element={<ServicesLog/>}/>
        <Route path="/blogLog" element={<BlogLog/>}/>
        <Route path="/contactLog" element={<ContactLog/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
        <Route path="/feedbackLog" element={<FeedbackLog/>}/>
      


      </Routes>
      
    </Router>
  );
}

export default App;
