<?php 
include_once('include/header.php'); 
include_once('include/common.php'); 

$action = "Ajout"; // action par defaut
$_SESSION["messageStatus"] = ""; // message de succès ou echec affiché après traitement du formulaire

if (isset($_POST['submit'])) { // si $_POST['submit'] est défini, il s'agit de la soummission d'une nouvelle annonce
	$nouvelle_id = $_POST['nouvelle_id'];
	$titre = $_POST['titre'];
	$categorie = $_POST['categorie'];
	$description_courte = $_POST['description_courte'];
	$description_longue = $_POST['description_longue'];
	$date = $_POST['date'];
	$active = $_POST['active'];

	if(empty($nouvelle_id)){  // il s'agit d'un ajout de nouvelle
		$requete = $connection->prepare("INSERT INTO nouvelles(titre, description_courte, description_longue, date_nouvelle, actif, fk_categorie) VALUES(?, ?, ?, ?, ?, ?)");

		if ($requete) {
			$requete->bind_param("ssssii", $titre, $description_courte, $description_longue, $date, $active, $categorie); 
			if($requete->execute()) {
				$_SESSION["messageStatus"] = "<div class='alert alert-success'>Nouvelle ajouté!</div>"; 
			} else {
				$_SESSION["messageStatus"] =  "<div class='alert alert-danger'>Une erreur est survenue lors de l'ajout.</div>";
			}
			$requete->close(); // Fermeture du traitement
			
		} else  {
		echo $mysqli->error;
		}

	} else { // il s'agit d'une modification de nouvelle
		$action = "Modification";
		$requete = $connection->prepare("UPDATE nouvelles SET titre=?, description_courte=?, description_longue=?, date_nouvelle=?, actif=?, fk_categorie=? WHERE id=?" );

		if ($requete) {
			$requete->bind_param("ssssiii", $titre, $description_courte, $description_longue, $date, $active, $categorie, $nouvelle_id); 
			if($requete->execute()) {
				$_SESSION["messageStatus"] = "<div class='alert alert-success'>Nouvelle modifiée!</div>";
				$nouvelle = $connection->query("SELECT *
												FROM nouvelles
												WHERE id = ".$_SESSION["nouvelle_id"]);
				$nouvelle_infos = $nouvelle->fetch_assoc();
				$_SESSION["nouvelle_infos"] = $nouvelle_infos;
				
			} else {
				$nouvelle_infos = $_SESSION["nouvelle_infos"];
				$_SESSION["messageStatus"] =  "<div class='alert alert-danger'>Une erreur est survenue lors de la modification. Réessayez svp!</div>";
			}
			$requete->close(); // Fermeture du traitement
			
		} else  {
		echo $mysqli->error;
		}

	}
}
elseif(isset($_GET['nouvelle_id'])) { // si $_GET['nouvelle_id'] est défini, il s'agit d'une modification de nouvelle
	$action = "Modification"; // action par defaut
	$nouvelle_id = $_GET['nouvelle_id'];

	// retourne la nouvelle à modifier
	$nouvelle = $connection->query("SELECT *
									FROM nouvelles
									WHERE id = ".$nouvelle_id);
	$nouvelle_infos = $nouvelle->fetch_assoc();
	$_SESSION["nouvelle_id"] = $nouvelle_id;
	$_SESSION["nouvelle_infos"] = $nouvelle_infos;
}
else { // sinon, il s'agit simplement de l'ajout d'une nouvelle annonce

}

?>

<!-- Page Content -->
<div class="container">
	
	<div class="my-4">
		<a href="<?= baseUrl().'administration_nouvelles.php'; ?>">< Retour à la liste des nouvelles</a>
		<h1 class="my-4 text-align-center"> <?= $action ?> d'une nouvelle</h1>
	</div>
	
	<hr>
	<div class="text-align-center"><?= $_SESSION["messageStatus"]; ?></div>
	<!-- FORMULAIRE DE NOUVELLE -->	
	<form method="POST" >
		<div class="form-group">
			<label for="titre">Titre *</label>
			<input type="text" class="form-control" name="titre" placeholder="Titre" value='<?= escape($nouvelle_infos['titre']); ?>' required minlength="3"/>
			<div class="invalid-feedback">
				Le titre est requis et doit comporter au moins 3 caractères. 
			</div>
		</div>
		<div class="form-group">
			<label for="categorie">Catégorie *</label>
			<select class="form-control custom-select my-1 mr-sm-2" name="categorie" id="categorie" required>
				<option value="" >Veuillez sélectionner une catégorie</option>
				<option value=1 <?php if($nouvelle_infos['fk_categorie'] == 1): ?> selected="selected"<?php endif; ?>>Général</option>
				<option value=2 <?php if($nouvelle_infos['fk_categorie'] == 2): ?> selected="selected"<?php endif; ?>>Consignes</option>
				<option value=3 <?php if($nouvelle_infos['fk_categorie'] == 3): ?> selected="selected"<?php endif; ?>>Lorem ipsum</option>
			</select>
		</div>
		<div class="form-group">
			<label for="titre">Description courte *</label>
			<textarea class="form-control" id="description_courte" name="description_courte" placeholder="Description courte" rows="5" required minlength="15"><?= escape($nouvelle_infos['description_courte']); ?></textarea>
		</div>
		<div class="form-group">
			<label for="titre">Description longue *</label>
			<textarea class="form-control" id="description_longue" name="description_longue" placeholder="Description longue" rows="10" required minlength="30"><?= escape($nouvelle_infos['description_longue']); ?></textarea>
		</div>
		<div class="form-group">
			<label for="titre">Date *</label>
			<input type="date" class="form-control" name="date" placeholder="Date" value='<?= $nouvelle_infos["date_nouvelle"]; ?>' required/>
		</div>
		<div class="form-check">
			<label class="" for="active">
				Active
			</label>
			<label><input class="form-check-input" type="radio" name="active" value=1 <?php if($nouvelle_infos['actif'] == 1): ?> checked="checked"<?php endif; ?>/>Oui</label>
			<label><input class="form-check-input" type="radio" name="active" value=0 <?php if($nouvelle_infos['actif'] == 0): ?> checked="checked"<?php endif; ?>/>Non</label>
		</div>
		<!-- identifiant de la nouvelle (champ caché) sera utilisé pour
			savoir s'il s'agit d'une modification ou d'un ajout de nouvelle 
			lors de la soumission du formulaire 
		-->
		<input type="hidden" name="nouvelle_id" value='<?= escape($nouvelle_infos['id']); ?>' />
		<hr/>
		<!--Buttons-->
		<div class="form-group">
			<button type="submit" name="submit" class="btn btn-primary">Soumettre</button>
		</div>
		<!--Buttons-->
	</form>
	<!--/.FORMULAIRE DE NOUVELLE -->
</div>

<?php include_once('include/footer.php'); ?>