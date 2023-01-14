import './section4/section4.css'
import sideimg from './section4/assets/Group 16.png'
import AppStore from './section4/assets/BTN 1.png'
import PlayStore from './section4/assets/BTN 2.png'

const Section4 = () => {
  return (
    <div className="Sec4">
      <div className="sec4">
        <img src={ sideimg } id='leftimg'/>
        <div className="sec4text">
          <h2>Work anywhere, with any device</h2>
          <p>These companies release their own versions of the operating systems with minor changes, and yet always with the same bottom line.</p>
          <img src={ AppStore } id='appstore'/>
          <img src={ PlayStore } id='playstore'/>
        </div>
      </div>
      </div>
  );
}
 
export default Section4;