import './App.css';
import InvestmentForm from './InvestmentForm';
import HeroImg from './assets/fin.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

import Logo from './assets/logo-fin.png'; 


function App() {
  return (
    <div className="App">
    <Navbar expand="lg" variant="light" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <img
              src={HeroImg}
              alt="Logo"
              height="40"
              className="d-inline-block align-top nav-img"
            />
            <span className="ms-2 app-name">FinCalc</span>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <header className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={7} md={12}>
            <div className="hero-left">
  <h1>FinCalc</h1>                     
  <h2>Finance Calculator</h2>     
  <p className="hero-oneliner">
    Plan, track, and visualize your investments effortlessly.
  </p>                                    
  <p className="hero-description">
    Finance Calculator helps you forecast your returns, adjust your portfolio, and 
    make smarter investment decisions with interactive charts and insights.
  </p>                                  
</div>

          </Col>
          <Col lg={5} md={12} className="text-center">
            <div className="hero-right">
              <img src={Logo} alt="Hero" className="hero-image" />
            </div>
          </Col>
        </Row>
      </Container>
    </header>

      <main className="calculator-section">
        <InvestmentForm />
      </main>
    </div>
  );
}

export default App;
