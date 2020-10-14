<?php
  $page = 'Module personnel';
  include_once('include/header.php'); 
  include_once('include/common.php'); 
  $connection->query('SET NAMES utf8');
  $sujets = $connection->query("SELECT s.titre, s.auteur_id , s.description, s.url, s.date_creation, m.nom_complet, m.rating
                                FROM sujets AS s, membres_forum_discussion AS m
                                INNER JOIN sujets on auteur_id = m.id
                                WHERE m.rating > 4
                                AND s.auteur_id = m.id
                                ORDER BY s.date_creation DESC");

  ?>

  <!-- Page Content -->
  <div class="container py-4">
  
  <h1 class="my-4">Bienvenue dans le flux de discussion Quora</h1>
  <p>La section suivante présente quelques sujets de discussion récentes parmi les plus intéressentes de la plateforme Quora.com.</p>
  <p>Les discussions ont été sélectionnées parmi quelques meilleures auteurs de Quora.com ayant un note supérieure 4/5.</p>
  <hr/>
  <!-- Section : discussions -->

  <div class="row">
    <?php

      // Affichage de toutes nouvelles actives

      while ($row = $sujets->fetch_assoc()) { ?>
        <div class="col-lg-12 mb-12 new-list-element">
          <?php 
            echo '<div><h6 class="">' . date('F j, Y', strtotime($row["date_creation"])) . '</h6>';
            echo '<img src="//placehold.it/30" class="rounded-circle" />&nbsp;&nbsp;<strong class="">' . $row["nom_complet"] . '</strong>';
            echo '&nbsp;(auteur)&nbsp;&nbsp;&nbsp;<label class="">' . $row["rating"] . '/5</label></div><br/>';
            echo '<h5 class="">' . escape($row["titre"]) . '</h5>';
            echo '<p class="card-text">' . $row["description"] . '...</p>';
            echo '<a class="dropdown-item" href="' . escape($row["url"]) . '"> Lire plus</a>';
          ?>
        </div>
      <?php } ?>
  <!-- /.row -->
  </div>
  <!-- /.container -->
	
  </div>

<?php include_once('include/footer.php'); ?>

</html>

