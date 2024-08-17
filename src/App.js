import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer'
import { Container, Row, Col, Button } from 'react-bootstrap';
function App() {
  return (
    <div  className="main">
      <Header/>
      <Container fluid> 
        <Container>
          <Row>
            <h1 className='text-center'>Our Cources</h1>
            <Col>
            <Card/>
            </Col>
            <Col>
            <Card/>
            </Col>
            <Col>
            <Card/>
            </Col>
            <Col>
            <Card/>
            </Col>

            
          </Row>
        </Container>
      </Container>
      
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
