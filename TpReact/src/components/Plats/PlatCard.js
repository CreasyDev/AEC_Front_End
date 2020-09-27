import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Redirect } from "react-router";
import { toast } from "react-toastify";
import PlatApiService from "../../services/plats";
import "./styles/plat.scss";

toast.configure();

function PlatCard(props) {
  const plat = props.platData;
  const [isPlatDeleted, platDeleteSet] = useState(false);

  function handleDelete(platId) {
    try {
      PlatApiService.supprimerPlat(platId);
      toast.success("Plat supprimé avec succès!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      platDeleteSet(true);
    } catch (error) {
      console.error("error : " + error);
      toast.error(
        "Error lors de la suppression du plat! Veuillez recommencer svp.",
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
      platDeleteSet(false);
    }
  }

  if (isPlatDeleted) return <Redirect to="/nos-plats" />;
  return (
    <Row className="plat-carte-container">
      <Col sm="12" md="12" lg="4" xl="4" className="plat-image">
        <img src={plat.photoUrl} alt={plat.nom} />
      </Col>
      <Col sm="12" md="12" lg="6" xl="6" className="plat-infos">
        <h3>{plat.nom}</h3>
        <hr className="bg-hr" />
        <p>{plat.description}</p>
      </Col>
      <Col sm="12" md="12" lg="1" xl="2" className="actions-btn pt-md-4 pt-lg-4">
        <Button variant="outline-success" href={"/plat/" + plat._id}>
          Voir plus
        </Button>
        <Button variant="outline-warning" href={"/modifier-plat/" + plat._id}>
          Modifier
        </Button>
        <Button variant="outline-danger" onClick={() => handleDelete(plat._id)}>
          Supprimer
        </Button>
      </Col>
    </Row>
  );
}

export default PlatCard;
