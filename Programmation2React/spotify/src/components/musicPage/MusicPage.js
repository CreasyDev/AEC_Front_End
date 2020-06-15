import React from 'react';
import { Col, Row, Image} from 'react-bootstrap'
import './styles.css';

class MusicPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="album-page-container">
        <Row>
          <Col sm="12" md="2">
            <Image src={this.props.albumPhotoSrc} className="album-page-img"/>
          </Col>
          <Col sm="12" md="10">
            <div className="album-infos">
              <span>ALBUM</span>
              <h1>{this.props.albumTitle}</h1>
              <span>CHANSON</span>
              <h4>{this.props.musicTitle}</h4>
            </div>
          </Col>
        </Row>
        <Row className="music-list-container">
          <Col sm="12" md="5">
           <p dangerouslySetInnerHTML={{__html: this.props.musicParoles}}/>
          </Col>
        </Row>
      </div>
    )
  }
}

MusicPage.defaultProps = {
  musicParoles: 'Aucunes paroles trouvées pour cette chanson'
};

export default MusicPage;
