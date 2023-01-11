import Hero from './assets/Logo (Case Conflict).png'
import Hamburger from './assets/Group 1hamburger.png'
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={ Hero }/>
      <div className="navlinks">
        <ul className='menu active'>
          <li><a href="#">Demos</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Support</a></li>
          <a href="#" id='blue-link'>Start 14 Days Free Trial</a>
        </ul>
      </div>
      <img src={ Hamburger } id='ham'/>
    </div>
  );
}
 
export default Navbar;