
/* Lire 10 valeurs déjà triées (en ordre) et les mettre dans un tableau. Par la suite,
 lire une nouvelle valeur et afficher toutes les valeurs lues dans l’ordre en ajoutant
  la nouvelle valeur à la bonne place. */

var tabValeurs = ['Porshe', 'Mustang', 'Lamborgini', ' ', 'Audi', 'Mazda', 'Volvo', 'Hyundai', 'Toyota', 'Jetta', 'Ford'];

document.write (tabValeurs + '<br>');
tabValeurs[3] = prompt ('Entrez une valeur').toUpperCase();

for (var i = 0; i < 1; i++) {
    document.write (tabValeurs[3] + '<br>');
}

document.write (tabValeurs + '<br>');


