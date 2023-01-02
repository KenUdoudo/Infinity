import Backdrop from './assets/BGbackdrop.png'

const Main = () => {
  return (
    <div>
      <img src={ Backdrop } id="backdrop"/>
      <h2>More than your regular email inbox</h2>
      <p>We've helped over 25,000 individuals and companies to grow their business successfully.</p>
      <a href="#"><button>Start 14 Days Free Trial</button></a>
      <p>No credit card required</p>
    </div>
  );
}
 
export default Main;