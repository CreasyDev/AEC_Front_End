<?php
  session_start();
  include_once 'config.php';
  $_SESSION["messageStatus"] = "";
  
  // retourner la liste des catégories
  $categories = $connection->query("SELECT id, categorie FROM categories");

  if(isset($_POST['seDeconnecter'])) {
    unset($_SESSION["utilisateur"]);
  }

  if (isset($_POST['submit_authentification'])) { // si $_POST['submit'] est défini, il s'agit du formulaire de connexion qui a été soumis pour traitement
    $nom_utilisateur = $_POST['nom_utilisateur'];
    $mot_de_passe = $_POST['mot_de_passe'];
    
    if ($requete = $connection->prepare("SELECT mot_de_passe FROM utilisateurs WHERE utilisateur_login = ?")) {
        $requete->bind_param("s", $nom_utilisateur); 
        if($requete->execute()) {
          $result = $requete->get_result();
          $utilisateur = $result->fetch_assoc(); 
          if(password_verify($mot_de_passe, $utilisateur["mot_de_passe"])) {
            // Confirmer la connexion
            $_SESSION["utilisateur"] = $nom_utilisateur;
            $_SESSION["messageStatus"] = "<br/><div class='alert alert-success'>Vous êtes connecté!</div><hr/>";
            
          } else {
            // Erreur de connexion
            $_SESSION["messageStatus"] = "<br/><div class='alert alert-danger'>Erreur d\'authentification! Le nom d\'utilisateur/mot de passe fourni est erroné</div><hr/>";
          }
          $requete->close(); // Fermeture du traitement

        } else {
          // Erreur de connexion
          $_SESSION["messageStatus"] =  "<br/><div class='alert alert-danger'>Une erreur est survenue lors de l\'authentification. Réessayez svp!</div><hr/>";
        }
        $requete->close(); // Fermeture du traitement
        
    } else  {
    echo $mysqli->error;
    }
  }

?>

<!DOCTYPE html>
<html lang="fr-CA">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Franck Gallard</title>

  <!-- Bootstrap core CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

  <!-- Custom styles for this template -->
  <link href="css/modern-business.css" rel="stylesheet">

</head>

<body>

  <!-- Navigation -->
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="index.php">Franck Gallard</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="index.php">Énoncé</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Nouvelles
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
              <?php

                // Affichage des catégories sous forme de sous-menu

                while ($row = $categories->fetch_assoc()) {
                    echo '<a class="dropdown-item" href="nouvelles_categorie.php?categorie_id=' . $row["id"] . '">' . $row["categorie"] . '</a>';
                }
              ?>
			        <a class="dropdown-item" href="nouvelles.php">Toutes les nouvelles</a>
            </div>
          </li>
		      <li class="nav-item">
            <a class="nav-link" href="module_personnel.php">Module personnel</a>
          </li>
		  
          <!-- Le menu Administration doit s'afficher seulement lorsque l'utilisateur est connecté !-->
          <?php if(isset($_SESSION["utilisateur"]) && !empty($_SESSION["utilisateur"])): ?>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownPages" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Administration
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPages">
              <a class="dropdown-item" href="administration_nouvelles.php">Nouvelles</a>
            </div>
            <li class="nav-item">
              <form method="POST">
                <button class="btn btn-outline-info my-2 my-sm-0" tyoe="submit" name="seDeconnecter" >Déconnexion</button>
              </form>					
            </li>
          </li>
          <?php else: ?>
          <li class="nav-item">
            <button class="btn btn-outline-info my-2 my-sm-0" data-toggle="modal" data-target="#modalConnexion">Connexion</button>					
          </li>
          <?php endif; ?>
        </ul>
      </div>
    </div>
  </nav>
  <div class="text-align-center"><?php echo $_SESSION["messageStatus"]; ?></div>
  
  
<!-- Formulaire de connexion -->
<div class="modal" id="modalConnexion" tabindex="-1" role="dialog">
  <form class="needs-validation" method="POST">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Connexion</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="nom_utilisateur">Nom utilisateur *</label>
              <input type="text" class="form-control" id="nom_utilisateur" name="nom_utilisateur" required minlength="3">
            </div>
            <div class="col-md-6 mb-3">
              <label for="nom">Mot de passe *</label>
              <input type="password" class="form-control" id="mot_de_passe" name="mot_de_passe" required minlength="2" minlength="3">
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-primary" name="submit_authentification">Connexion</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal" name="cancel">Fermer</button>
        </div>
      </div>
    </div>
  </form>
</div>	