console.log ("mon script js : Boucle FOR");

/* Exercice 1 :
Objectif : Créer une fonction qui affiche les nombres de 1 à nombre, où nombre est un paramètre de la fonction.

Déclarez une fonction nommée afficherNombres qui prend un paramètre nombre.
Utilisez une boucle for pour afficher tous les nombres de 1 à nombre dans la console.
*/
function afficherNombres(nombre) 
{
    let array = []; 
    // si le premier nombre est 1, il faut commencer à 1 et pas let i = 0  
    for(let i= 1; i <= nombre; i++) {
        array.push(i);
        
    }
    // ! ce n'est pas nombre mais array que je dois loger
    console.log(array); 
}
// Now call to this function 
afficherNombres(5);
// Résultat attendu : 1 2 3 4 5

