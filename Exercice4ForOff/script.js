console.log ("mon script js : Boucle FOR OF");

  /* Exercice 4 FOR OF
  Objectif : Créer une fonction qui calcule la somme des éléments d'un tableau de nombres.

Déclarez une fonction nommée calculerSommeTableau qui prend un tableau d'entiers comme argument.
Utilisez une boucle for...of pour parcourir tous les éléments du tableau et calculez leur somme.
Retournez la somme calculée.
Exemple d'utilisation :

const nombres = [1, 2, 3, 4, 5];
const somme = calculerSommeTableau(nombres);
console.log(somme); // Résultat attendu : 15 (car 1 + 2 + 3 + 4 + 5 = 15)
  */
 
  function calculerSommeTableau () 
  {
    const nombres = [1, 2, 3, 4, 5];
    let somme = 0;

    for (let element of nombres) {
        somme = somme + element;
    }
console.log(somme);
  }
  // Appel de la fonction
  calculerSommeTableau();
