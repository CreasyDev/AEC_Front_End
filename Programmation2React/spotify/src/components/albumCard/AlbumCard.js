import React from 'react';
import { Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEllipsisH, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import './styles.css';

class AlbumCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      showAlbumPage: false,
      showAlbumOverLay: false
    };

    this.handleAlbumClick = this.handleAlbumClick.bind(this);
    this.showAlbumOverlay = this.showAlbumOverlay.bind(this);
  }

  handleAlbumClick = () => {
    this.props.setAlbumPage(this.props.albumData)
  }

  showAlbumOverlay (value) {
    this.setState({showAlbumOverLay : value})
  }

  renderAlbumOverlay () {
    return (
      <div className="overlay ablum-actions">
        <Button variant="outline-dark" className="favorite">
          <FontAwesomeIcon className="marginRight10px activatedColor" icon={faHeart} inverse/>
        </Button> 
        <Button variant="outline-dark" className="play">
          <FontAwesomeIcon className="marginRight10px activatedColor" icon={faPlayCircle}/>
        </Button> 
        <Button variant="outline-dark" className="more">
          <FontAwesomeIcon className="activatedColor" icon={faEllipsisH} inverse/>
        </Button> 
      </div>
    )
  }

  renderAlbumCardContent(){
    const title = this.props.albumData.title;
    const artiste = this.props.albumData.artiste;
    const albumPhotoImageSource = this.props.albumData.photoSrc;
    const showAlbumOverLay = this.state.showAlbumOverLay;

    return (
      <div>
        <Card className="album-container cursorPointer" onMouseEnter={() => this.showAlbumOverlay(true)} onMouseLeave={() => this.showAlbumOverlay(false)} onClick={this.handleAlbumClick}>
          <Card.Img variant="top" src={albumPhotoImageSource} />
          <Card.Body className="album-body">
            <Card.Title>{title}</Card.Title>
            <Card.Text>{artiste}</Card.Text>
          </Card.Body>
          {showAlbumOverLay && this.renderAlbumOverlay()}
        </Card>
      </div>
    )
  }

  render() {
    return this.renderAlbumCardContent()
  }
}

export default AlbumCard;
