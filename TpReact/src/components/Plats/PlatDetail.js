import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import PlatApiService from "../../services/plats";
import { useParams } from "react-router-dom";
import "./styles/plat.scss";

// page detail du plat
function PlatDetail() {
  const { id } = useParams();
  const platId = id;
  const [platData, platDataSet] = useState(null);
  useEffect(() => {
    async function platDetail() {
      const platDetailResult = await PlatApiService.obtenirUnPlat(platId);
      platDataSet(platDetailResult.data);
    }

    try {
      platDetail();
    } catch (error) {
      console.error("error : " + error);
    }
  });

  if (platData === null) {
    return (
      <div className="text-center">
        <br />
        <h3>Aucun detail trouvé pour ce plat! Veuillez recharger la page </h3>
      </div>
    );
  }

  return (
    <div className="container plat-carte-list-container pb-5">
      <Row>
        <Col sm="12" md="9">
          <h2>{platData.nom}</h2>
        </Col>
        <Col sm="12" md="3" className="actions-btn">
          <Button
            variant="outline-secondary"
            href={"/modifier-plat/" + platData._id}
          >
            Modifier
          </Button>
        </Col>
      </Row>
      <hr />
      <Row className="plat-detail-container">
        <Col sm="12" md="4" className="plat-infos">
          <img src={platData.photoUrl} alt={platData.nom} />
        </Col>
        <Col sm="12" md="8" className="plat-infos">
          <p>{platData.description}</p>

          <div className="text-center background_gradient py-2 mb-3">
            <h4 className="text-center text-light">
              Vous aimeriez préparer ce plat chez vous ?{" "}
            </h4>
          </div>

          <h5>Liste des ingrédients :</h5>
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: platData.ingredientsList }}
          ></div>
        </Col>
      </Row>

      <Row>
        <Col sm="12" md="12" className="recette-infos">
          <hr />
          <h5>Préparation de la recette :</h5>
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: platData.preparationRecette }}
          ></div>
        </Col>
      </Row>
    </div>
  );
}

export default PlatDetail;
