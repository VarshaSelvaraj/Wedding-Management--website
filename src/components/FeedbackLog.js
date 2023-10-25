import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './feed.css';
import Swal from 'sweetalert2';

const FeedbackLog = () => {
  const [rating, setRating] = useState(null);
  const [feedback, setFeedback] = useState('');

  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
  };
const navigate = useNavigate();
  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // You can customize the SweetAlert as per your preference
    Swal.fire({
      title: 'Thank You!',
      text: 'Your feedback has been submitted.',
      icon: 'success',
      showCancelButton: false,
      confirmButtonColor: 'blue',
    });
  navigate('/servicesLog');
  };
  return (
    <div className='fee-container'>
      <div className="feedback-container">
        <h3>Give us your feedback/comments</h3>
        <form onSubmit={handleSubmit}>
        <div className="feedback-text">
            <textarea id="feedback" name="feedback" value={feedback} onChange={handleFeedbackChange} rows="4" placeholder="Leave your feedback here..." />
          </div>
          <div className="rating">
            <span>Rate us: &emsp;</span>
            {[5, 4, 3, 2, 1].map((star) => (
              <label key={star}>
                <span className={star <= rating ? 'filled-star' : 'empty-star'} onClick={() => handleRatingChange(star)}>
                  &#9733;&emsp;
                </span>
              </label>
            ))}
          </div>
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackLog;
