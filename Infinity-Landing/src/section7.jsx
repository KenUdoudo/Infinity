import './section7/section7.css'
import footerLogo from './section7/assets/Logo white.png'
import footerbg from './section7/assets/Group 17.png'

const Section7 = () => {
  return (
    <div className="sec7">
      <img src={ footerbg } id="footerbg"/>
      <div className="part1"><img src={ footerLogo } /></div>
      <div className="part2"></div>
      <div className="part3"></div>
      <div className="part"></div>
    </div>
  );
}
 
export default Section7;