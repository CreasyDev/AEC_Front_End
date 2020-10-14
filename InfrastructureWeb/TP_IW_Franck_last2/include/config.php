<?php 
  $username="sql9365657";           // utilisateur
  $password="A2b5QfNWE4";           // mot de passe
  $host="localhost"; // url de votre serveur mysql distant
  $database="sql9365657";
  $port= 3306;      // port du serveur Mysql

  $connection = new mysqli($host, $username, $password, $database, $port);

  // Vérifier la connexion
  if ($connection -> connect_errno) {
    echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
    exit();
  }

?>