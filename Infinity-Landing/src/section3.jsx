import './section3/section3.css'
import connect from './section3/Assets/Icon.png'
import increase from './section3/Assets/Icon (1).png'
import unlimited from './section3/Assets/Icon (2).png'
import sideimg from './section3/Assets/Group 15.png'


const Section3 = () => {
  return (
    <div className="sec3">
      <div className="sec3main">
        <h2>Get all your emails in a single place</h2>
        <p id='sec3mainp'>These companies release their own versions of the <br /> operating systems with minor changes, and yet <br /> always with the same bottom line.</p>

        <div className="innersec3">
          <div className="sec3icons">
            <img src={ connect }/>
            <p className="sec3p">Connect with new people</p>
          </div>
          <div className="sec3icons">
            <img src={ increase }/>
            <p className="sec3p">Increase chance to engage</p>
          </div>
          <div className="sec3icons">
            <img src={ unlimited }/>
            <p className="sec3p">Unlimited storage <span>PRO</span></p>
          </div>
        </div>
      </div>
      <div className="sideimg">
        <img src={ sideimg }/>
      </div>
    </div>
  );
}
 
export default Section3;