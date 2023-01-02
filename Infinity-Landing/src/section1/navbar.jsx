import Hero from './assets/Logo (Case Conflict).png'

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={ Hero }/>
      <div className="navlinks">
        <ul>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
        </ul>
      </div>
    </div>
  );
}
 
export default Navbar;