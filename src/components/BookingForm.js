import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate,useLocation } from 'react-router-dom';
import './Book.css';
import Swal from 'sweetalert2';

function BookingForm() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const date = searchParams.get('date');
  const s = {
    color:'white',
    padding:'0px'
 };
 const s1={
  color:'white',
  textAlign:'center'
 }
 const navigate = useNavigate();
 const [formData, setFormData] = useState({
  user: '',
  em: '',
  brideName: '',
  bph:'',
  groomName: '',
  gph:'',
  weddingDate: date,
  weddingTime: '',
  location: '',
  venueType:'',
  budget: '',
  decType:'',
  cateringType: 'Plated', 
  guestCount:'',
  photography: false,
    invitation: false,
    entertainment: false,
    styling: false,
    limousine: false,
  // Initialize other form fields here
});
useEffect(() => {
  const token = localStorage.getItem('token');

  fetch('/getUserDetails', {
    headers: {
      Authorization: `Bearer ${token}`, // Replace with your actual authentication token
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('User details not found');
      }
    })
    .then((data) => {
      // Update the state with user details
      setFormData({
        ...formData,
        user: data.username,
        em: data.email,
      });
    })
    .catch((error) => {
      console.error(error);
    });
}, []);
const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
    
  if (type === 'radio') {
    // Handle radio buttons separately
    setFormData({
      ...formData,
      cateringType: value, // Update cateringType directly for radio buttons
    });
  } else if (type === 'checkbox') {
    // Handle checkboxes
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      };
  
    });
  } else {
    // Handle other input fields
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  
  

};
const handleFormSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('/submit-booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.status === 201) {
      Swal.fire("Booking Successfull!",'','success')
      navigate('/homeLog');
    } else {
      alert("Errror")   
     }
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className="booking-form-background" >
      <div className="container-center">
        <div className="cardB">
          <div className="card-header">
            <h3 style={s1}>Book your wedding here!</h3>
          \
          </div>
          <div className="card-body">
            <form  onSubmit={handleFormSubmit}>
            <div className="grid-containerB">
    <div className="grid-itemB">
      
    <div className="form-group">
              <input type="text" id="user" name="user" className="form-control" placeholder="Username"  value={formData.user}
          onChange={handleChange} readOnly/>
            </div> 
    </div>
    <div className="grid-itemB"> 
    <div className="form-group">
    <input type="text" id="em" name="em" className="form-control" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Enter a valid Email!" value={formData.em}
          onChange={handleChange} readOnly/>
      </div>
  </div>
</div>
         
<div className="grid-containerB">
    <div className="grid-itemB">
    <div className="form-group">
      <p style={s}>Bride's Details</p>
              <input type="text" id="brideName"name="brideName" className="form-control" placeholder="Bride's Name"  value={formData.brideName}
          onChange={handleChange} required/>
              <input type="tel" id="bph" name="bph" className="form-control" placeholder="Phone Number" pattern="[0-9]{10}" title="Enter a valid Phone number" value={formData.bph}
          onChange={handleChange} required/>
            </div> 
      </div>
    <div className="grid-itemB"> 
    <div className="form-group">
    <p style={s}>Groom's Details</p>
    <input type="text" id="groomName"name="groomName" className="form-control" placeholder="Groom's Name" value={formData.groomName}
          onChange={handleChange}  required/>
              <input type="tel" id="gph" name="gph" className="form-control" placeholder="Phone Number" pattern="[0-9]{10}" title="Enter a valid Phone number"  value={formData.gph}
          onChange={handleChange}required/>
      </div>
  </div>
  </div>
<div className="grid-containerB">
<div className="grid-itemB">
<div className="form-group">
  <label htmlFor="weddingDate" style={s}>Wedding Date:</label>
      <input type="date" id="weddingDate" name="weddingDate" className="form-control"    value={date}
          onChange={handleChange} readOnly/>
</div>
</div>
<div className="grid-itemB">
  <label htmlFor="ceremonyTime" style={s}> Timing:</label>
    
    <div className="form-group" >
     <input type="time" id="weddingTime" name="weddingTime" className="form-control" placeholder="Time" value={formData.weddingTime}
          onChange={handleChange} required />
     </div>
    
    
    
    
  </div>
  
 </div>
    
    
        <div className="grid-containerB">
    <div className="grid-itemB">
              <div className="form-group">
              <input
                  type="number"
                  id="guestCount"
                  name="guestCount"
                  className="form-control"
                  placeholder='Estimated Number of Guests'
                  value={formData.guestCount}
                  onChange={handleChange}
                  required
                />
              </div>
              </div>
              <div className="grid-itemB">
              <div className="form-group">
               <input
                  type="number"
                  id="budget"
                  name="budget"
                  className="form-control"
                  placeholder="Estimated Budget"
                  value={formData.budget}
                  onChange={handleChange}/>
              </div>
              </div>
              </div>
              <div className="grid-containerB">
    <div className="grid-itemB">
    
    <div className="form-group">
    <select id="decType" name="decType" className="form-select"  value={formData.decType}
                 onChange={handleChange}>
                <option value="type">--Decoration Type--</option>
                <option value="Floral">Floral</option>
                <option value="Light">Lights</option>
                <option value="StageBackdrop">Stage Backdrop</option>
                <option value="FabricDrapes/Curtain">Fabric Drapes/Curtain</option>
                <option value="SparklingCrystals">Sparkling Crystals </option>
                <option value="Paper Floral">Paper Floral</option>
              </select>
            </div>
      </div>
    <div className="grid-itemB">
    <div className="form-group">
    <select id="venueType" name="venueType" className="form-select" value={formData.venueType}
                 onChange={handleChange}>
                <option value="type">--Venue Type--</option>
                <option value="BanquetHall">Banquet Hall</option>
                <option value="Beach">Beach</option>
                <option value="Lawn">Lawn</option>
                <option value="FarmHouse">Farmhouse</option>
                <option value="Temple">Temple</option>
                <option value="Church">Church</option>
              </select>
            </div>
        </div>
        </div>
        <div className="grid-containerB">
          <div className="grid-itemB">

                <p style={s}>Catering Type</p>
                <div className="form-check">
                  <input type="radio" id="plated" name="cateringType" value="Plated" className="form-check-input" checked={formData.cateringType === 'Plated'}
            onChange={handleChange}required/>
                  <label htmlFor="plated" className="form-check-label" style={s}> &emsp;Plated</label>
                </div>
                <div className="form-check">
                  <input type="radio" id="buffet" name="cateringType" value="Buffet" className="form-check-input"  checked={formData.cateringType === 'Buffet'}
            onChange={handleChange} required/>
                  <label htmlFor="buffet" className="form-check-label" style={s}> &emsp;Buffet </label>
                </div>
            </div>
            <div className="grid-itemB">
            <p style={s}>Supplementary Services</p>
                <div className="form-check" >
                <input
                    type="checkbox"
                    id="photography"
                    name="photography"
                    className="form-check-input"
                    checked={formData.photography}
                    onChange={handleChange}
                  />
                  <label htmlFor="photography" className="form-check-label" style={s}>&emsp;Photography & Videography</label>
                </div>
                <div className="form-check">
                <input
                    type="checkbox"
                    id="invitation"
                    name="invitation"
                    className="form-check-input"
                    checked={formData.invitation}
                    onChange={handleChange}
                  />
                  <label htmlFor="invitation" className="form-check-label" style={s}>&emsp;Invitations</label>
                </div>
                <div className="form-check">
                <input
                type="checkbox"
                id="entertainment"
                name="entertainment"
                className="form-check-input"
                checked={formData.entertainment} // Add checked property
          onChange={handleChange}
              />
                  <label htmlFor="entertainment" className="form-check-label" style={s}>&emsp;Entertainment & Music</label>
                </div>
                <div className="form-check">
                <input
                    type="checkbox"
                    id="styling"
                    name="styling"
                    className="form-check-input"
                    checked={formData.styling}
                    onChange={handleChange}
                  />
                  <label htmlFor="styling" className="form-check-label" style={s}>&emsp;Styling </label>
                </div>
                <div className="form-check">
                <input
                    type="checkbox"
                    id="limousine"
                    name="limousine"
                    className="form-check-input"
                    checked={formData.limousine}
                    onChange={handleChange}
                  />
                  <label htmlFor="limousine" className="form-check-label" style={s}>&emsp;Limousine Rental </label>
                </div>
            </div>
        </div><br/>
        <div className="form-group">
              <input
                  type="text"
                  id="location"
                  name="location"
                  className="form-control"
                  placeholder='Wedding Location'
                  value={formData.location}
                  onChange={handleChange}
                required
                />
              </div>
              <div className="form-group">
                <textarea
                  id="additionalComments"
                  name="additionalComments"
                  className="form-control"
                  rows="4"
                  placeholder="Any other specific requests or comments"
                />
              </div>
              {/* Terms and Conditions */}
              <div className="form-check">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  className="form-check-input"
                  required
                />
                <label htmlFor="agreeTerms"style={s} className="form-check-label " >
                  I agree to the Terms and Conditions
                </label>
              </div><br/>
            
              <div className="form-group"> &emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;
                <button type="submit" className="btn-success" >
                Book Now!
                </button>
              </div>
            </form>
          </div><br/>
         
        </div>
      </div>
      </div>
    
  );
}

export default BookingForm;
