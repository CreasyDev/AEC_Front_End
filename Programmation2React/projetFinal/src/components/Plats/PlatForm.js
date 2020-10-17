import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Redirect } from "react-router";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import PlatApiService from "../../services/plats";
import "./styles/plat.scss";

toast.configure();

class PlatForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      platId: null,
      isFormValidated: false,
      isPlatCreatedOrUpdated: false,
      nom: "",
      description: "",
      ingredientsList: "",
      preparationRecette: "",
      photoUrl: "",
    };

    this.handleNomPlat = this.handleNomPlat.bind(this);
    this.handleDescriptionPlat = this.handleDescriptionPlat.bind(this);
    this.handleIngredientsPlat = this.handleIngredientsPlat.bind(this);
    this.handlePreparationPlat = this.handlePreparationPlat.bind(this);
    this.handlePhotoUrlPlat = this.handlePhotoUrlPlat.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const platId = this.props.match.params.id;

    if (!platId) {
    } else {
      this.setState({ platId });
      try {
        const platDetailResult = await PlatApiService.obtenirUnPlat(platId);
        const {
          nom,
          description,
          ingredientsList,
          preparationRecette,
          photoUrl,
        } = platDetailResult.data;
        this.setState({
          nom,
          description,
          ingredientsList,
          preparationRecette,
          photoUrl,
        });
      } catch (error) {
        console.error("error : " + error);
        toast.error("Error : aucun Identifiant de plat fourni.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  }

  setFormValidated = (isValidated) => {
    this.setState({ isFormValidated: isValidated });
  };

  handleNomPlat = (e) => {
    this.setState({ nom: e.target.value });
  };

  handleDescriptionPlat = (e) => {
    this.setState({ description: e.target.value });
  };

  handleIngredientsPlat = (e) => {
    this.setState({ ingredientsList: e.target.value });
  };

  handlePreparationPlat = (e) => {
    this.setState({ preparationRecette: e.target.value });
  };

  handlePhotoUrlPlat = (e) => {
    this.setState({ photoUrl: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setFormValidated(true);

    const {
      platId,
      nom,
      description,
      ingredientsList,
      preparationRecette,
      photoUrl,
    } = this.state;
    const platData = {
      nom,
      description,
      ingredientsList,
      preparationRecette,
      photoUrl,
    };
    if (!nom || !description || !photoUrl) {
      toast.error(
        "Certains champs du formulaire sont invalides! Veuillez vérifier vos entrées svp.",
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
    } else {
      try {
        let statusMessage = null;

        // modification de plat
        if (platId) {
          PlatApiService.modifierPlat(platId, platData);
          statusMessage =
            "Plat modifié avec succès! Merci de recharger la page si la modification se voie pas";
        } else {
          // ajout de nouveau plat
          PlatApiService.ajouterNouveauPlat(platData);
          statusMessage =
            "Nouveau plat ajouté avec succès! Merci de recharger la page si le plat s'affiche";
        }
        toast.success(statusMessage, {
          position: toast.POSITION.TOP_RIGHT,
        });
        this.setState({ isPlatCreatedOrUpdated: true });
      } catch (error) {
        toast.error(
          "Error lors de l'ajout/modification du plat! Veuillez recommencer svp.",
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        );
        this.setState({ isPlatCreatedOrUpdated: false });
      }
    }
  };

  renderFormHeader() {
    const { platId } = this.state;
    return (
      <div>
        {platId ? <h2>Modification de plat </h2> : <h2>Ajout de plat</h2>}
        <hr />
      </div>
    );
  }

  renderFormBody() {
    const {
      platId,
      nom,
      description,
      ingredientsList,
      preparationRecette,
      photoUrl,
    } = this.state;

    return (
      <div className="">
        <div className="">
          <Form
            className="login-form"
            noValidate
            validated={this.state.isFormValidated}
            onSubmit={this.handleSubmit}
          >
            <Form.Group controlId="validation1">
              <Form.Label>Nom du plat*</Form.Label>
              <Form.Control
                required
                type="text"
                name="nomPlat"
                placeholder="Nom du plat"
                value={nom}
                onChange={this.handleNomPlat}
              />
              <Form.Control.Feedback type="invalid">
                Veuillez entrer un nom du plat valide.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validation2">
              <Form.Label>Description du plat*</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows="3"
                placeholder="Description du plat"
                value={description}
                onChange={this.handleDescriptionPlat}
              />
              <Form.Control.Feedback type="invalid">
                Veuillez entrer une description du plat valide.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validation3">
              <Form.Label>Url de la photo du plat*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Url de la photo du plat"
                value={photoUrl}
                onChange={this.handlePhotoUrlPlat}
              />
              <Form.Control.Feedback type="invalid">
                Veuillez entrer une url valide de la photo du plat.
              </Form.Control.Feedback>
            </Form.Group>
            <br />
            <h5>
              Informations sur la préparation de la recette{" "}
              <small>(optionnelles)</small>
            </h5>
            <hr />
            <Form.Group>
              <Form.Label>List des ingrédients</Form.Label>
              <Form.Control
                as="textarea"
                rows="5"
                placeholder="List des ingrédients"
                value={ingredientsList}
                onChange={this.handleIngredientsPlat}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Préparation du plat</Form.Label>
              <Form.Control
                as="textarea"
                rows="10"
                placeholder="Préparation du plat"
                value={preparationRecette}
                onChange={this.handlePreparationPlat}
              />
            </Form.Group>
            <Button
              className="btn btn-warning"
              size="lg"
              type="submit"
              onClick={this.handleSubmit}
            >
              {platId ? "Modifier" : "Ajouter"}
            </Button>
          </Form>
        </div>
      </div>
    );
  }

  renderFormContent() {
    return (
      <Container className="container plat-form-container">
        {this.renderFormHeader()}
        {this.renderFormBody()}
      </Container>
    );
  }

  render() {
    if (this.state.isPlatCreatedOrUpdated) return <Redirect to="/nos-plats" />;
    return this.renderFormContent();
  }
}

export default withRouter(PlatForm);
