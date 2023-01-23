import './section6/section6.css'
import switchbtn from './section6/assets/Switch.png'

const Section6 = () => {
  return (
    <div className="sec6">
      <div className="sec6head">
        <h2>Choose the right plan for your finity</h2>
        <img src={ switchbtn }/>
      </div>
      <div className="starter">
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
    </div>
  );
}
 
export default Section6;