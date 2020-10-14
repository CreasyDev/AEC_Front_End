<?php
$page = 'Administration nouvelles';
include_once('include/header.php');
$_SESSION["messageStatus"] ="";

// gestion du message de notification de la suppression d'une nouvelle
if(isset($_SESSION["action"]) && $_SESSION["action"]== 'delete' && isset($_SESSION["status"])) {
	
	if($_SESSION["status"] == 'success') {
		$_SESSION["messageStatus"] = "<div class='alert alert-success'>Nouvelle supprimée!</div>"; 
	}
}

// on detruit les sessions action et status
unset($_SESSION["action"]);
unset($_SESSION["status"]);

// retourne la liste de toutes les nouvelles actives
$nouvelles = $connection->query("SELECT id, titre, description_courte, description_longue, date_nouvelle, actif
															FROM nouvelles
															ORDER BY date_nouvelle DESC");

?>
<div class="container py-4">
<?php if(isset($_SESSION["utilisateur"]) && !empty($_SESSION["utilisateur"])): ?>
	<!-- UTILISATEUR CONNECTÉ -->
	<!-- Page Content -->
	<div class="row news-management-list-element-header">
			<div class="col-lg-9 mb-9">
				<h1 class="my-4">Administration - Nouvelles</h1>
			</div>
			<div class="col-lg-3 mb-3">
				<a class="btn btn-primary my-4 btn-lg" href="modifier_ou_ajouter_nouvelle.php"> Ajouter une nouvelle</a>
			</div>
		</div>
		<div class="text-align-center"><br/><?php echo $_SESSION["messageStatus"]; ?></div>
		<hr/>
	
		<!-- Cette section doit permettre de gérer (lister, ajouter, modifier et supprimer) des nouvelles. -->
		<!-- Section : toutes les nouvelles -->
			<?php

			// Affichage de toutes les nouvelles

			while ($row = $nouvelles->fetch_assoc()) { ?>
				<div class="row news-management-list-element">
				<?php 
					echo '<div class="col-lg-9 mb-9">';
					echo '<h6 class="">' . date('F j, Y', strtotime($row["date_nouvelle"])) . '</h6>';
					echo '<h4 class="">' . $row["titre"] . '</h4>';
					echo '<p class="card-text">' . $row["description_courte"] . '</p>';
					echo '</div>';
					echo '<div class="col-lg-3 mb-3">';
					echo '<a class="btn btn-primary" href="modifier_ou_ajouter_nouvelle.php?nouvelle_id=' . $row["id"] . '"> Modifier</a>';
					echo '<a class="btn btn-danger" href="supprimer_nouvelle.php?action=delete&nouvelle_id=' . $row["id"] . '"> Supprimer</a>';
					echo '</div>';
				?>
				</div>
			<?php }
			?>
		<!-- /.row -->	
<?php else: ?>
	<!-- UTILISATEUR NON CONNECTÉ -->
	<br/>
	<div class='alert alert-danger text-align-center'>Vous n'avez pas les droits pour accéder à cette page! Veuillez-vous connecter d'abord.</div>
<?php endif; ?>
</div>

<?php include_once('include/footer.php'); ?>