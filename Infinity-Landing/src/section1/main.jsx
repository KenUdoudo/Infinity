import Backdrop from './assets/BGbackdrop.png'

const Main = () => {
  return (
    <div className='main'>
      <img src={ Backdrop } id="backdrop"/>
      <h2>More than your <br /> regular email inbox</h2>
      <p id='p1'>We've helped over 25,000 individuals and companies to grow their business successfully.</p>
      <a href="#"  id='mainbtn'>Start 14 Days Free Trial</a>
      <p id='p2'>No credit card required</p>
    </div>
  );
}
 
export default Main;