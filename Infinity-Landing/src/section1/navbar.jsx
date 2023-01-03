import Hero from './assets/Logo (Case Conflict).png'

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={ Hero }/>
      <div className="navlinks">
        <ul>
          <li><a href="#">Demos</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Support</a></li>
          <a href="#" id='blue-link'>Start 14 Days Free Trial</a>
        </ul>
      </div>
    </div>
  );
}
 
export default Navbar;