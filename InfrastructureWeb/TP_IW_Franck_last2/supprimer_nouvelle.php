<?php 
session_start();
include_once('include/config.php'); 
include_once('include/common.php'); 

if(isset($_GET['action']) && $_GET['action'] == 'delete' && isset($_GET['nouvelle_id'])) {
	$nouvelle_id = $_GET['nouvelle_id'];
	// on supprime la nouvelle
	$requete = $connection->prepare("DELETE FROM nouvelles WHERE id=?" );

	if ($requete) {
		$requete->bind_param("i", $nouvelle_id); 
		if($requete->execute()) {
			$_SESSION["messageStatus"] = "<div class='alert alert-success'>Nouvelle supprimé!</div>";
			$_SESSION["action"] = 'delete';
			$_SESSION["status"] = 'success';
				
		} else {
			$_SESSION["messageStatus"] =  "<div class='alert alert-danger'>Une erreur est survenue lors de la suppression. Réessayez svp!</div>";
			$_SESSION["action"] = 'delete';
			$_SESSION["status"] = 'success';
		}
		$requete->close(); // Fermeture du traitement
		redirect('administration_nouvelles.php');
			
	} else  {
	 	echo $mysqli->error;
	}
} else echo 'Aucun parametres trouvées pour effectuer la suppression';

?>