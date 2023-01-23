import './section6/section6.css'
import switchbtn from './section6/assets/Switch.png'
import line from './section6/assets/Line 7.png'
const Section6 = () => {
  return (
    <div className="sec6">
      <div className="sec6head">
        <h2>Choose the right plan for your finity</h2>
        <img src={ switchbtn }/>
      </div>
      <img src={ line } id="line"/>
      <div className="sections">
        <h3>Starter</h3>
        <div className="storage">
          <p>10 GB Storage</p>
          <p>15 Accounts</p>
          <p>1,000 Connections</p>
        </div>
        <div className="price">
          <h2>$228</h2>
          <p>$19 per month, billed yearly</p>
        </div>
        <a href="#" id='white-link'>Start 14 Days Free Trial</a>
      </div>
      <img src={ line } id="line"/>
      <div className="sections">
        <h3>Standard</h3>
        <div className="storage">
          <p>100 GB Storage</p>
          <p>50 Accounts</p>
          <p>5,000 Connections</p>
        </div>
        <div className="price">
          <h2>$468</h2>
          <p>$39 per month, billed yearly</p>
        </div>
        <a href="#" id='white-link'>Start 14 Days Free Trial</a>
      </div>
      <img src={ line } id="line"/>
      <div className="sections">
        <h3>Pro</h3>
        <div className="storage">
          <p>Unlimited GB Storage</p>
          <p>Unlimited Accounts</p>
          <p>Unlimited Connections</p>
        </div>
        <div className="price">
          <h2>$708</h2>
          <p>$59 per month, billed yearly</p>
        </div>
        <a href="#" id='blue-link2'>Start 14 Days Free Trial</a>
      </div>
    </div>
  );
}
 
export default Section6;