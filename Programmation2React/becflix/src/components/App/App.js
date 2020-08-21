import React from 'react';
import logo from '../img/logo-becflix.png';
import '../App/App.css';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col";
import {Catalogue} from '../Catalogue/Catalogue';


function App() {
  return (
      <Container fluid>
        <Row>
          <Col>
            <img src={logo} className="img-fluid logo" alt="Logo Becflix"></img>
          </Col>
        </Row>
         <Catalogue />
      </Container>

  );
}

export default App;
