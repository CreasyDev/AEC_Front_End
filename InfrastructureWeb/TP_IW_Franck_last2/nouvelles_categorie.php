<?php
$page = 'Nouvelles catégories';
include_once('include/header.php'); 
if(!isset($_GET['categorie_id'])) {
  echo 'Identifiant de la catégorie manquant';
  exit();
}

$categorie_id = $_GET['categorie_id'];
  
// retourne la catégorie dont l'identifiant est $categorie_id
$categorie = $connection->query("SELECT categorie
                                  FROM categories
                                  WHERE id = '".$categorie_id."'
                                  LIMIT 1");

// retourne la liste des 3 nouvelles les plus récentes et actives
$nouvelles_actives_de_la_categorie = $connection->query("SELECT id, titre, description_courte, date_nouvelle, actif
                                                          FROM nouvelles
                                                          WHERE actif = 1
                                                          AND fk_categorie = '".$categorie_id."'
                                                          ORDER BY date_nouvelle DESC");

?>

  <!-- Page Content -->
  <div class="container py-4">
  
	<h1 class="my-4"><?php echo $categorie->fetch_assoc()['categorie'] ?></h1>
	
  <!-- Section : nouvelles actives et récentes -->

  <div class="row">
    <?php

      // Affichage des nouvelles actives

      while ($row = $nouvelles_actives_de_la_categorie->fetch_assoc()) { ?>
        <div class="col-lg-12 mb-12 new-list-element">
          <?php 
            echo '<h6 class="">' . date('F j, Y', strtotime($row["date_nouvelle"])) . '</h6>';
            echo '<h4 class="">' . $row["titre"] . '</h4>';
            echo '<p class="card-text">' . $row["description_courte"] . '</p>';
            echo '<a class="dropdown-item" href="nouvelle.php?nouvelle_id=' . $row["id"] . '"> Plus d\'information</a>';
          ?>
        </div>
      <?php }
    ?>
  <!-- /.row -->
  </div>
  <!-- /.container -->
  </div>

<?php include_once('include/footer.php'); ?>

