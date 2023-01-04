import './section2/section2.css'
import Collab from './section2/assets/Iconteam collab.png'
import Chat from './section2/assets/Iconinstant chat.png'
import manager from './section2/assets/Iconmedia manager.png'
const Section2 = () => {
  return (
    <div className="sec2">
      <div className="header">
        <h2>Solution made for you</h2>
        <p>These companies release their own versions of the operating systems <br /> with minor changes, and yet always.</p>
      </div>
      <div className="cards">
        <div className="card">
          <img src={ Collab } />
          <div className="inner-card">
            <h3>Team Collaboration</h3>
            <p>We've helped over 2,500 job seekers to get into the most popular tech teams</p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Section2;