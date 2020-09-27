import React from "react";
import { Carousel, Card, Button, Col, Container, Row } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import { toast } from "react-toastify";
import "./styles/accueil.scss";

const interp = (i) => (r) =>
  `translate3d(0, ${0.625 * Math.sin(r + i * Math.PI)}rem, 0)`;

const PlatsDuJourList = [
  {
    id: 1,
    nom: "Ragoût de Boeuf",
    description:
      "Le ragoût de boeuf de grand-maman à la jamaïcaine. Un plat réconfortant, cuisiné avec amour. C'est le meilleur !",
    prix: 19.15,
    photoSrc: "../../assets/img/plats/ragoutBoeuf.jpg",
  },
  {
    id: 2,
    nom: "Crevette Rasta",
    description:
      "La meilleur crevette Rasta à notre façon ! Rien de mieux que des crevettes au barbecue pour vous regaler en famille.",
    prix: 20.99,
    photoSrc: "../../assets/img/plats/crevetteRasta.jpg",
  },
  {
    id: 3,
    nom: "Poulet Kingston",
    description:
      "Cuisiné à base d'une grande variété d'épices des îles, le poulet à la Jamaïcaine est l’un des plats les plus populaires.",
    prix: 23.25,
    photoSrc: "../../assets/img/plats/pouletKingston.jpg",
  },
  {
    id: 4,
    nom: "Sauté d'écrevisses Jamaïcains",
    description:
      "Appellé aussi 'Zion Crawfish', son goût frais, fluviale et ses épices colorées stimuleront vos papilles. Que du bonheur !",
    prix: 12.99,
    photoSrc: "../../assets/img/plats/ecrevisses.jpg",
  },
  {
    id: 5,
    nom: "Curry de Poisson Séché",
    description:
      "Le goût, la saveur du poisson ainsi que l'onctuosité de la sauce au curry en font la spécialité favorite des Jamaïcains.",
    prix: 23.15,
    photoSrc: "../../assets/img/plats/Poisson-Curry.jpg",
  },
  {
    id: 6,
    nom: 'Chèvre en Ragoût "Jah Love"',
    description:
      "Voici un plat traditionnel des plaines de Montego Bay. Il est agrémenté d'une sauce aux 10 épices et aux piments rouges.",
    prix: 8.99,
    photoSrc: "../../assets/img/plats/chevre-Ragout.jpg",
  },
];

function PlatDuJourCard(props) {
  const data = props.platData;

  function gererCommande() {
    toast.info(
      "Désolé! limite de commandes maximale atteint pour aujourd'hui.",
      {
        position: toast.POSITION.TOP_RIGHT,
      }
    );
  }
  return (
    <Card className="mt-4">
      <Card.Img variant="top" src={data.photoSrc} alt={data.nom} />
      <Card.Body className="background_grey_dark_color plat-du-jour-content">
        <Card.Title className="green_color">{data.nom}</Card.Title>
        <Card.Text className="gray_white_color">{data.description}</Card.Text>
        <Card.Text className="yellow_color price">{data.prix} $</Card.Text>
        <Button
          variant="outline-secondary orderBtn"
          onClick={() => gererCommande()}
        >
          Commander
        </Button>
      </Card.Body>
    </Card>
  );
}

function Accueil() {
  const { radians } = useSpring({
    to: async (next) => {
      while (1) await next({ radians: 2 * Math.PI });
    },
    from: { radians: 0 },
    config: { duration: 3500 },
    reset: true,
  });

  if (PlatsDuJourList.length === 0) {
    return (
      <div>
        <br />
        <h3>Aucun plat populaire disponible pour le moment </h3>
      </div>
    );
  }

  const platListContent = PlatsDuJourList.map((plat, i) => {
    return (
      <Col sm="6" md="4">
        <animated.div
          key={i}
          className="script-bf-box"
          style={{ transform: radians.interpolate(interp(i)) }}
        >
          <PlatDuJourCard key={i} platData={plat} />
        </animated.div>
      </Col>
    );
  });

  return (
    <>
      <Carousel className="">
        <Carousel.Item className="position-relative">
          <img
            className="d-block w-100"
            src="../../assets/img/header-bg/bg1.jpg"
            alt="Les meilleurs délices à la jamaïcaine"
          />
          <Carousel.Caption className="captionTitle position-absolute p-0">
            <h2 className="h2Carousel">Les Délices Exotiques Jamaïcains</h2>
            <h4 className="subTitle d-none d-md-block d-lg-block">
              Vous en Aurez pour vos Papilles
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../assets/img/header-bg/bg2.jpg"
            alt="Saveurs jamaicaines"
          />
          <Carousel.Caption className="captionTitle position-absolute p-0">
            <h2 className="h2Carousel">Saveurs Jamaïcaines</h2>
            <h4 className="subTitle d-none d-md-block d-lg-block">
              La Meilleure des Cuisines Caraïbéennes
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container plats-populaires-conteneur">
        <br />
        <h2>Les plats du jour</h2>
        <hr />
        <Container fluid>
          <Row className="album-list">{platListContent}</Row>
        </Container>
        <hr />
        <Button variant="outline-secondary" href="/nos-plats">
          VOIR NOS AUTRES PLATS
        </Button>
      </div>
    </>
  );
}

export default Accueil;
