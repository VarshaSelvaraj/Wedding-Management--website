import React from 'react';
import { useState ,useEffect} from 'react';
import "./Profile.css";
import NavigationLog from './NavigationLog';
function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    
    const token = localStorage.getItem('token');
    if (token) {
      fetch('/getUserDetails', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error('Error fetching user details:', error);
        });
    }
  }, []);
  

  return (
    <div>
        <NavigationLog/>
    <div className="app">

      <div className="app-main">
      
        <div className="profile">
          <div className="profile-header">
            P R O F I L E
            <div className="profile-info">
            {user && (
        <div>
    
              <p className="profile-other">Username&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {user.username}</p>
              <hr />
              <p className="profile-other">Email&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {user.email}</p>
              <hr />
              <p className="profile-other">Phone&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.contactNumber}</p>
              <hr/>
            
              
              
              </div>
      )}
            </div>

           
          </div>
        </div>
      </div>
    </div></div>
  
  );
}

export default Profile;