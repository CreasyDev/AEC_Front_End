import React from 'react';
import Row from 'react-bootstrap/Row';
import {TvShow} from '../TvShow/TvShow';

const tabSuspense = [
  {
    src: require("../../img/Suspense/lesinvincibles.jpg"),
    alt: "Les invincibles",
    title: "Les Invincibles",

  },
  {
    src: require("../../img/Suspense/19-2.jpg"),
    alt: "19-2",
    title: "19-2",

  },
  {
    src: require("../../img/Suspense/district31.jpg"),
    alt: "District 31",
    title: "District 31",

  },
  {
    src: require("../../img/Suspense/fugueuse.jpg"),
    alt: "La Fugueuse",
    title: "La Fugueuse",

  },
]


const tabAmericaine = [
  {
    src: require("../../img/Series americaines/betterCallSaul.jpg"),
    alt: "Better call Saul",
    title: "Better call Saul",

  },
  {
    src: require("../../img/Series americaines/breakingbad.jpg"),
    alt: "Breaking Bad",
    title: "Breaking Bad",

  },
  {
    src: require("../../img/Series americaines/dexter.jpg"),
    alt: "Dexter",
    title: "District 31",

  },
  {
    src: require("../../img/Series americaines/fugueuse.jpg"),
    alt: "Américaine",
    title: "La Fugueuse",

  },
]


export class Categorie extends React.Component {
    render() {

      return (
        <React.Fragment>
          <Row>
            <h1>{this.props.nom}</h1>
          </Row>
          <Row>{this.AfficherCategorie()}</Row>
        </React.Fragment>
      )
    }

    AfficherCategorie() {
      
      if (this.props.nom === 'Suspense') {
          return tabSuspense.map((element, i) => (
      
            <TvShow
              key={"Suspense" + i}
              src={element.src}
              alt={element.alt}
              title={element.title}
              ></TvShow>
          ));
       
      }
      else if (this.props.nom === "Humour") {
        return (

          <React.Fragment>
            <TvShow src={require("../../img/Humour/LanceEtCompte.jpg")} />
            <TvShow src={require("../../img/Humour/Lapetitevie.jpg")} />
            <TvShow src={require("../../img/Humour/Lesboys.jpg")} />
            <TvShow src={require("../../img/Humour/Lesbeauxmalaises.jpg")} />
            <TvShow src={require("../../img/Humour/Lesbougon.jpg")} />
            <TvShow src={require("../../img/Humour/minuitlesoir.jpg")} />
          </React.Fragment>

        );
      }
      else if (this.props.nom === "Série américaines") {
        return tabAmericaine.map((element, i) => (
          <TvShow
            key={"américaine" + i}
            src={element.src}
            alt={element.alt}
            title={element.title}
          ></TvShow>
        ));
      } 
       
    }
}
Categorie.defaultProps = {nom: "Suspense"};
  
