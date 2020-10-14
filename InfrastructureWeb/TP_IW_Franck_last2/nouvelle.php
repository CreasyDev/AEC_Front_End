<?php 

    include_once('include/header.php'); 
    if(!isset($_GET['nouvelle_id'])) {
    echo 'Identifiant de la nouvelle manquant';
    exit();
    }

    $nouvelle_id = $_GET['nouvelle_id'];
    
    // retourne la nouvelle à afficher

    // retourne la liste des 3 nouvelles les plus récentes et actives
    $nouvelle = $connection->query("SELECT titre, description_longue, date_nouvelle
                                    FROM nouvelles
                                    WHERE id = ".$nouvelle_id);
                                    
    $nouvelle_infos = $nouvelle->fetch_assoc();

?>

<!-- Page Content -->
<div class="container">
  
    <h1 class="my-4"><?php echo $nouvelle_infos["titre"] ?></h1>
	
<!-- Section : nouvelles actives et récentes -->

<div class="row">

        <div class="col-lg-12 mb-12 new-list-element new-detail-container">
        <?php 
            // affichage des informations de la nouvelle
            echo '<h6 class="">' . date('F j, Y', strtotime($nouvelle_infos["date_nouvelle"])) . '</h6>';
            echo '<p class="card-text">' . $nouvelle_infos["description_longue"] . '</p>';
        ?>
        </div>
<!-- /.row -->
</div>
<!-- /.container -->
</div>

<?php include_once('include/footer.php'); ?>

