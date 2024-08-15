import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer'
function App() {
  return (
    <div  className="main">
      <Header/>
      <div className='row'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
      <Footer/>
    </div>
    
  );
 }
 function Card() {
   return (

     <div className='card'>
      <div class="details">
    <div class="cardHeader">CSS Hover Animation</div>
    <div class="cardText">
      Welcome to this card where i have made use of the "Hover" effect to add
      some really cool interactions to it. Enjoy
    </div>
    <div class="button">Learn More</div>
  </div>
     </div>
   )
 }
 
export default App;
