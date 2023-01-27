import './section7/section7.css'
import footerLogo from './section7/assets/Logo white.png'
import footerbg from './section7/assets/Group 17.png'

const Section7 = () => {
  return (
    <div className="sec7">
      <img src={ footerbg } id="footerbg"/>
      <div className='sec7main'>
      <div className="part1">
        <img src={ footerLogo } />
        <p id='part1text' >Your ultimate email solution to grow business and engaging with future customers and clients.</p>
        <a href="#"><p id='footerbtn' >Ask Question</p></a>
      </div>
      <div className="part2">
        <p id="parthead">Community</p>
        <a href="#"><p id="white">For Talents</p></a>
        <a href="#"><p id="white">For Companies</p></a>
        <a href="#"><p id="white">Facebook Group</p></a>
        <a href="#"><p id="white">FAQ</p></a>
      </div>
      <div className="part3">
      <p id="parthead">About us</p>
      <a href="#"><p id="white">Meet the Team</p></a>
      <a href="#"><p id="white">Our Story</p></a>
      <a href="#"><p id="white">Career</p></a>
      </div>
      <div className="part4">
      <p id="parthead">Contacts</p>
      <p id="white" className='part4text'>Feel free to get in touch with us via phone or send us a message.</p>
      <a href="#"><p id="gold">+1-301-340-3946 <br />info@infinity.com</p></a>
        
      </div>
      </div>
    </div>
  );
}
 
export default Section7;