import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUserPlus ,faLock} from '@fortawesome/free-solid-svg-icons';
function NavigationBar(){
  return (
     <nav>
      <ul className="nav-bar">
      <div className="logo">
       
        <span className="brand-name">FunPlans</span>
      </div>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <div className="right-corner">
        <li><Link to="/signup"  title='Sign Up'><FontAwesomeIcon icon={faUserPlus} /> </Link></li>
        <li className="dropdown-trigger" >
        <Link to="/login"  title='Login'><FontAwesomeIcon icon={faLock} /> </Link>
          </li>
          </div>
          </ul>
      </nav>
  );
};

export default NavigationBar;
