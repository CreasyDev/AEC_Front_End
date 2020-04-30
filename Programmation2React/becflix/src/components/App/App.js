import React from 'react';
import logo from '../img/logo-becflix.png';
import '../App/App.css';
import Container from 'react-bootstrap/Container';
import Categorie from '../Categorie/Categorie';


function App() {
  return (
    <div className="App">
      <header>
        <Container className="container-fluid text-left px-0 mb-3">
            <img src={logo} className="img-fluid logo"></img>
        </Container>
      </header>
      <Container>
          <Categorie />
          <Categorie />
          <Categorie />
          <Categorie />
          <Categorie />
          <Categorie />
      </Container>
      
    </div>
  );
}

export default App;
