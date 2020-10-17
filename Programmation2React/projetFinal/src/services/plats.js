import config from "../config/config";
import axios from "axios";

const PlatApiService = {
  // retourner tous les plats
  async obtenirTousLesPlats() {
    return await axios.get(config.url + "/plat");
  },

  // obtenir un plat
  async obtenirUnPlat(platId) {
    return await axios.get(config.url + "/plat/" + platId);
  },

  // ajouter un nouveau plat
  ajouterNouveauPlat(platData) {
    return axios.post(config.url + "/plat", platData);
  },

  // modifier un plat
  modifierPlat(platId, platData) {
    return axios.put(config.url + "/plat/" + platId, platData);
  },

  // supprimer un plat
  supprimerPlat(platId) {
    return axios.delete(config.url + "/plat/" + platId);
  },
};

export default PlatApiService;
