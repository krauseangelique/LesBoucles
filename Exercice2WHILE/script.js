console.log ("mon script js : Boucle WHILE");
/* Exercice 2 
Objectif : Créer une fonction qui calcule la somme des entiers de 1 à nombre, où nombre est un argument de la fonction.

Déclarez une fonction nommée calculerSomme qui prend un paramètre nombre.
Utilisez une boucle while pour calculer la somme des entiers de 1 à nombre.
Retournez la somme calculée.
*/

function calculerSomme(nombre)
{
    let i = 1;
    let somme = 0;
    

    while(i <= nombre) {

        somme = somme + i;
        i++;
    }
    console.log(somme);

}
calculerSomme(5);