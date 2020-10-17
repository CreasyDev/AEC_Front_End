import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Accueil from "./components/Accueil/Accueil";
import PlatsList from "./components/Plats/List";
import PlatDetail from "./components/Plats/PlatDetail";
import PlatForm from "./components/Plats/PlatForm";

function Routage() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route path="/nos-plats" component={PlatsList} />
          <Route path="/plat/:id" component={PlatDetail} />
          <Route path="/ajouter-plat" component={PlatForm} />
          <Route path="/modifier-plat/:id" component={PlatForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default Routage;
