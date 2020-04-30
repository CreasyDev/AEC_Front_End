import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import imageBecflix from '../img/becflix.jpg';

const image = <img className="imgBecflix img-fluid" title="serieBecflix" src={imageBecflix} alt="Serie Becflix" />


export default class TvShow extends React.Component {

    render() {
        return (
            
            <Col md="6" lg="2" className="mb-3 mb-sm-0 mb-md-3">{image}</Col>

        )
    }
}