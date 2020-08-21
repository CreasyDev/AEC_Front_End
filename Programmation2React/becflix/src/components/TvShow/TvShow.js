import React from 'react';
import Col from 'react-bootstrap/Col';


export class TvShow extends React.Component {

    constructor(props) {
        super(props);
       
        this.state = {
            hovered: false
        }

        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);

        this.onMouseOver = () => this.setState({hovered: !this.state.hovered});
      
    }

    render() {
        return (
            
            <Col col="12" lg="2" className="mb-3 mb-sm-0 mb-md-3">
                <img src = {this.props.src} 
                    alt = {this.props.alt}
                    title = {this.props.title}
                    className = "img-fluid"
                    onMouseOver={this.onMouseOver}
                />
            </Col>

        )
    }
}