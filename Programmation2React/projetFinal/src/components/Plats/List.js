import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import PlatCard from "./PlatCard";
import PlatApiService from "../../services/plats";
import "./styles/plat.scss";

// liste des plats
function List() {
  const [platList, platListSet] = useState([]);
  const location = useLocation();
  useEffect(() => {
    async function listDesPlats() {
      const platListResult = await PlatApiService.obtenirTousLesPlats();
      platListSet(platListResult.data);
    }

    try {
      listDesPlats();
    } catch (error) {
      console.error("error : " + error);
    }
  }, [location.key]);

  if (platList.length === 0) {
    return (
      <div className="text-center">
        <br />
        <h3>Aucun plat trouvé pour le moment </h3>
      </div>
    );
  }

  const platListContent = platList.map((plat, i) => {
    return <PlatCard key={i} platData={plat} />;
  });

  return (
    <div className="container plat-carte-list-container">
      <Row>
        <Col sm="12" md="9">
          <h2>Nos Spécialités</h2>
        </Col>
        <Col sm="12" md="3" className="actions-btn">
          <Button variant="outline-secondary" href="/ajouter-plat">
            Ajouter un plat
          </Button>
        </Col>
      </Row>
      <hr />
      <div className="plat-carte-list-container">{platListContent}</div>
    </div>
  );
}

export default List;
