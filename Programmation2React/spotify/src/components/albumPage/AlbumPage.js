import React from 'react';
import { Col, Row, Image, Button, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import './styles.css';

class AlbumPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
    };
    
    this.handleMusic = this.handleMusic.bind(this);
  }

  handleMusic (musicIndex) {
    const album = this.props.albumData;
    const albumTitle = album.title;
    const albumPhotoSrc = album.photoSrc;
    const musicTitle = album.musics[musicIndex].title;
    const musicParoles = album.musics[musicIndex].paroles;

    this.props.setMusicPage(albumTitle, musicTitle, musicParoles, albumPhotoSrc);
  }

  render() {
    const albumData = this.props.albumData;
    const title = albumData.title;
    const artiste = albumData.artiste;
    const albumYear = albumData.year;
    const albumListeningTime = albumData.listeningTime;
    const musics = albumData.musics? albumData.musics : [];
    const musicsCount = albumData.musics ? albumData.musics.length : 0;
    const albumPhotoImageSource = albumData.photoSrc;

    const musicsRows = musics.map((music, index) => {
      return (              
          <tr onClick={() => this.handleMusic(index)} >
            <td className="width60px">{index +1}</td>
            <td className="width60px"><FontAwesomeIcon className="activatedColor" icon={faHeart} inverse/></td>
            <td className="textAlighLeft">{music.title}</td>
          </tr>
      )
    });

    return (
      <div className="album-page-container">
        <Row>
          <Col sm="12" md="2">
            <Image src={albumPhotoImageSource} className="album-page-img"/>
          </Col>
          <Col sm="12" md="10">
            <div className="album-infos">
              <span>ALBUM</span>
              <h1>{title}</h1>
              <span>Par <strong className="">{artiste}</strong></span>
              <label>{albumYear} . {musicsCount} chansons, {albumListeningTime} min</label>
              <div className="album-actions">
                  <Button variant="success" size="sm" className="play-btn">
                    LECTURE
                  </Button>
                  <Button variant="outline-dark" className="round-btn">
                    <FontAwesomeIcon className="marginRight10px activatedColor" icon={faHeart} inverse/>
                  </Button> 
                  <Button variant="outline-dark" className="round-btn">
                    <FontAwesomeIcon className="marginRight10px activatedColor" icon={faEllipsisH} inverse/>
                  </Button>               
              </div>              
            </div>
          </Col>
        </Row>
        <Row className="music-list-container">
          <Table hover variant="dark" className="music-list-container">
                <thead>
                <tr>
                    <th className="width60px">#</th>
                    <th className="width60px"></th>
                    <th className="textAlighLeft">TITRE</th>
                </tr>
                </thead>
                <tbody>
                {musicsRows}
                </tbody>
          </Table>
        </Row>
      </div>
    )
  }
}

export default AlbumPage;
