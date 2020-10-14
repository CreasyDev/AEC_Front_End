<?php
  $page = 'Nouvelles';
  include_once('include/header.php'); 

  // retourne la liste de toutes les nouvelles actives
  $nouvelles_actives = $connection->query("SELECT id, titre, description_courte, date_nouvelle, actif
                                                            FROM nouvelles
                                                            WHERE actif = 1
                                                            ORDER BY date_nouvelle DESC");

  ?>

  <!-- Page Content -->
  <div class="container py-4">
  
	<h1 class="my-4">Toutes les nouvelles</h1>
  <!-- Section : toutes nouvelles actives -->

  <div class="row">
    <?php

      // Affichage de toutes nouvelles actives

      while ($row = $nouvelles_actives->fetch_assoc()) { ?>
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

</html>

