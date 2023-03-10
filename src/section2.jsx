import './section2/section2.css'
import Collab from './section2/assets/Iconteam collab.png'
import Chat from './section2/assets/Iconinstant chat.png'
import manager from './section2/assets/Iconmedia manager.png'
import Btn from './section2/assets/Shapebtn.png'

const Section2 = () => {
  return (
    <div className="sec2">
      <div className="header">
        <h2>Solution made for you</h2>
        <p>These companies release their own versions of the operating systems with minor changes, and yet always.</p>
      </div>
      <div className="cards">
        <div className="card">
          <img src={ Collab } />
          <div className="inner-card">
            <h3>Team Collaboration</h3>
            <p>We've helped over 2,500 job seekers to get into the most popular tech teams</p>
          </div>
        </div>
        <div className="card">
          <img src={ Chat } />
          <div className="inner-card">
            <h3>Instant Chat</h3>
            <p>We've helped over 2,500 job seekers to get into the most popular tech teams</p>
          </div>
        </div>
        <div className="card">
          <img src={ manager } />
          <div className="inner-card">
            <h3>Media Manager</h3>
            <p>We've helped over 2,500 job seekers to get into the most popular tech teams</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <a href="#"><div className="btn">
          <img src= { Btn }/>
          <p>See Finity in Action</p>
        </div></a>
      </div>
    </div>
  );
}
 
export default Section2;