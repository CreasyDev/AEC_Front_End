import React from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import Main from './Main'
import './login.css';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      email: null,
      password: null,
      isLogged:false
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleEmail = (event) => {
    this.setState({email : event.target.value});
  }

  handlePassword = (event) => {
    this.setState({password : event.target.value});
  }

  handleLogin = (e) => {
    e.preventDefault()
    const email = this.state.email;
    const password = this.state.password;
    if(email === 'franck@gmail.com' && password === 'patate'){
      this.setState({isLogged:true})
    }
  }

  logout = () => {
    this.setState({isLogged : false});
  }

  renderLoginHeader(){
    return (
      <div className="login-header">
        <img className="spotify-logo" src="assets/img/Spotify_Logo_RGB_White.png" alt="spotify-logo"/>
        <h3>De la musique pour tous.</h3>
      </div> 
    )
  }

  renderLoginBody(){
    return (
      <Form className="login-form" onSubmit={this.handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Adresse courriel ou nom d'utilisateur" onChange={this.handleEmail}/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="password" placeholder="Mot de passe" onChange={this.handlePassword}/>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Garder ma session ouverte" className="form-check-label"/>
        </Form.Group>
        <Button size="lg" type="submit" onClick={this.handleLogin}>
          SE CONNECTER
        </Button>
      </Form> 
    )
  }

  renderLoginContent(){
    return (
      <Container className="login">
        {this.renderLoginHeader()}
        {this.renderLoginBody()}
      </Container>
    )
  }

  render() {
    const isLogged = this.state.isLogged;
    if(isLogged) {
      return <Main logout={this.logout}/>
    } else {
      return this.renderLoginContent()
    }
  }
}

export default Login;
