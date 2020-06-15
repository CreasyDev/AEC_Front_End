import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import AlbumCard from '../albumCard/AlbumCard'
import './styles.css';

class Albums extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
    };
  }

  renderBody(){
    const albumList = this.props.albumList;
    if(albumList.length === 0) {
      return (
        <div>
          <br/>
          <h3>Aucun resultat trouvé pour votre recherche...</h3>
        </div>
      )
    }

    const albumListContent = albumList.map((album)=> {
      return ( 
              <Col sm="6" md="3">
                <AlbumCard albumData = {album} setAlbumPage={this.props.setAlbumPage}/>
              </Col>
            )
    });

    return (
      <Container fluid>
        <Row className="album-list">
          {albumListContent}
        </Row> 
      </Container>
    );
  }

  render() {
    return (
      <div className="albums-container">
        {this.renderBody()}
      </div>
    )
  }
}

export default Albums;
