<?php
      $page = 'Accueil';
      include_once('include/header.php');
  
      // retourner la liste des 3 nouvelles les plus récentes et actives
      $nouvelles_recentes_actives = $connection->query("SELECT id, titre, description_courte, date_nouvelle, actif
                                                        FROM nouvelles
                                                        WHERE actif = 1
                                                        ORDER BY date_nouvelle DESC
                                                        LIMIT 3");
  ?>

  <header>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <!-- Slide One - Set the background image for this slide in the line below -->
        <div class="carousel-item active" style="background-image: url('img/img1-min.jpg')">
          <div class="carousel-caption">
            <h3>Huiles Essentielles</h3>
            <p>Menthe poivrée, Ravintsara, Basilic tropical...</p>
          </div>
        </div>
        <!-- Slide Two - Set the background image for this slide in the line below -->
        <div class="carousel-item" style="background-image: url('img/img2-min.jpg')">
          <div class="carousel-caption">
            <h3>Hydrolats</h3>
            <p>D'orange, Rose, Jasmin...</p>
          </div>
        </div>
        <!-- Slide Three - Set the background image for this slide in the line below -->
        <div class="carousel-item" style="background-image: url('img/img3-min.jpg')">
          <div class="carousel-caption">
            <h3>Herbes & Plantes</h3>
            <p>Lavande, Camomille, Millepertuis...</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Précédent</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Suivant</span>
      </a>
    </div>
  </header>

  <!-- Page Content -->
  <div class="container py-4">

    <h1 class="my-4">Dernières nouvelles</h1>

    <!-- Section 3 nouvelles actives et récentes -->

    <div class="row">
      <?php

        // Affichage des 3 nouvelles actives et récentes

        while ($row = $nouvelles_recentes_actives->fetch_assoc()) { ?>

          <div class="col-lg-4 mb-4">
            <div class="card h-100">
              <?php echo '<h4 class="card-header">' . $row["titre"] . '</h4>';?>
              <div class="card-body">
                <?php 
                  echo '<h6 class="card-title">'. date('F j, Y', strtotime($row["date_nouvelle"])) . '</h6>';
                  echo '<p class="card-text">' . $row["description_courte"] . '</p>';
                ?>
              </div>
              <div class="card-footer">
                <?php  echo '<a class="btn btn-primary" href="nouvelle.php?nouvelle_id=' . $row["id"] . '"> Plus d\'information</a>'; ?>
              </div>
            </div>
          </div>
        <?php }
      ?>
    <!-- /.row -->
    </div>
    <!-- /.container -->
	
  </div>
  <!-- /.container -->

<?php include_once('include/footer.php'); ?>
