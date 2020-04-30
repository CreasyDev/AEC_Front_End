import React from 'react';
import Row from 'react-bootstrap/Row';
import TvShow from '../TvShow/TvShow';

const nomCategorie = <h1>Suspense</h1>


export default class Categorie extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Row>{nomCategorie}</Row>
                <Row>
                    <TvShow />
                    <TvShow />
                    <TvShow />
                    <TvShow />
                    <TvShow />
                    <TvShow />
                </Row>
            </React.Fragment>
        )
    }
}
