import Main from "./section1/main"; 
import './section1/section1.css'
import Navbar from "./section1/navbar";
import Bmain from "./section1/b-main";


const Section1 = () => {
  return (
    <div>
      <Navbar />
      
      <Main />

      <Bmain />
    </div>
  );
}
 
export default Section1;