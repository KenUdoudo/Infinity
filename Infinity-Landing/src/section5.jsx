import './section5/section5.css'
import background from './section5/assets/BG.png'
import one from './section5/assets/1.png'
import two from './section5/assets/1 copy 3.png'
import three from './section5/assets/1 copy 4.png'
import four from './section5/assets/1 copy 5.png'
import five from './section5/assets/1 copy 6.png'
import six from './section5/assets/1 copy 7.png'

const Section5 = () => {


  return (
    <div className="sec5">
      <img src={ background } id='back'/>
      <div className="mainsec5">
        <h2>10,000+ people love us</h2>
        <p>These companies release their own versions of the operating systems with minor changes, and yet always.</p>
        <div className="container">
          <img src={ one }/>
          <img src={ two }/>
          <img src={ three }/>
          <img src={ four }/>
          <img src={ five }/>
          <img src={ six }/>
        </div>
      </div>
    </div>
  );
}
 
export default Section5;