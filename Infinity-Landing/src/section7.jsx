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
        <p>Your ultimate email solution to grow business and engaging with future customers and clients.</p>
        <p>Ask Question</p>
      </div>
      <div className="part2">
        <p id="parthead">Community</p>
        <p id="white">For Talents</p>
        <p id="white">For Companies</p>
        <p id="white">Facebook Group</p>
        <p id="white">FAQ</p>
      </div>
      <div className="part3">
      <p id="parthead">About us</p>
        <p id="white">Meet the Team</p>
        <p id="white">Our Story</p>
        <p id="white">Career</p>
      </div>
      <div className="part4">
      <p id="parthead">Contacts</p>
        <p id="white">Feel free to get in touch with us via phone or send us a message.</p>
        <p id="gold">+-301-340-3946 <br />info@infinity.com</p>
        
      </div>
      </div>
    </div>
  );
}
 
export default Section7;