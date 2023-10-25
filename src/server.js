const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/weds', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(bodyParser.json());
//
const User = mongoose.model('User', {
    username: String,
   
    email: String,
    password: String,
    contactNumber: String,
    
  });
 
;
app.post('/signup', async (req, res) => {
const {
      username,
     email,
      password,
      contactNumber,
     
    } = req.body;

    try {
        if ( !username || !email || !password || !contactNumber ) {
        return res.status(400).json({ message: 'Please fill in all fields' });
       }
       const newUser = new User({
        username,
        email,
        password,
        contactNumber,
       });
      res.setHeader('Content-Type', 'application/json')
      await newUser.save();
      res.status(201).json({ message: 'Registration successful!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

//login
  // login
  app.post('/coachlog', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await User.findOne({ username });
      if (!user ) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
      
      if (password !== user.password) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      
      const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
        expiresIn: '1h',
      });
  
      res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }

  });

  //booking
  const Booking = mongoose.model('Booking', {
    username: String,
    email: String,
    brideName: String,
    bridePhone: String,
    groomName: String,
    groomPhone: String,
    weddingDate: Date,
    weddingTime: String,
    location: String,
    venueType: String,
    budget: String,
    decType: String,
    cateringType: String, 
    guestCount: String,
    photography: Boolean, // New field for photography
  invitation: Boolean, // New field for invitations
  entertainment: Boolean, // New field for entertainment
  styling: Boolean, // New field for styling
  limousine: Boolean,
   
  });
  app.post('/submit-booking', async (req, res) => {
    const {
      user,
      em,
      brideName,
      bph,
      groomName,
      gph,
      weddingDate,
      weddingTime,
      location,
      venueType,
      budget,
      decType,
      cateringType, 
      guestCount,
      photography, // New field for photography
    invitation, // New field for invitations
    entertainment, // New field for entertainment
    styling, // New field for styling
    limousine, // New field for limousine rental
     
    } = req.body;
  
    try {
      const booking = new Booking({
        username: user,
        email: em,
        brideName,
        bridePhone:bph,
        groomName,
        groomPhone:gph,
        weddingDate,
        weddingTime,
        location,
        venueType,
      budget,
      decType,
      cateringType, 
      guestCount,
      photography, // New field for photography
    invitation, // New field for invitations
    entertainment, // New field for entertainment
    styling, // New field for styling
    limousine, // New field for limousine rental
     
});
  
      await booking.save();
   
      res.status(201).json({ message: 'Booking data saved successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
//get
app.get('/getUserDetails', async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'your-secret-key');
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

//checkavail
// ...

// Define a new route to check date and time availability
app.get('/check-availability', async (req, res) => {
  const { date} = req.query;

  try {
    // Query the Booking model to check if the date and time are already booked
    const existingBooking = await Booking.findOne({ weddingDate: date});

    if (existingBooking) {
      // Date and time are already booked, respond with a 409 status code (Conflict)
      return res.status(409).json({ message: 'The selected date and time are already booked.' });
    } else {
      // Date and time are available, respond with a 200 status code
      res.status(200).json({ message: 'The selected date and time are available for booking.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while checking availability.' });
  }
});

// ...



//port  
  
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
