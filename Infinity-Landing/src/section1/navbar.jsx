import Hero from './assets/Logo (Case Conflict).png'
import Hamburger from './assets/Group 1hamburger.png'
import { useState } from "react";
const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <img src={ Hero } />
      <div className="navlinks">
        <ul className={`navul ${open? 'active' : 'inactive'}`}>
          <li><a href="#">Demos</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Support</a></li>
          <a href="#" id='blue-link'>Start 14 Days Free Trial</a>
        </ul>
      </div>
      <img src={ Hamburger } onClick={()=>{setOpen(!open)}} id='ham'/>
    </div>
  );
}
 
export default Navbar;