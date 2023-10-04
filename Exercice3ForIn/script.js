console.log ("mon script js : Boucle FOR IN POUR LES OBJETS");
/* Exercice 3 FOR ... IN
Objectif : Créer une fonction qui affiche les propriétés et les valeurs d'un objet.

Déclarez une fonction nommée afficherObjet qui prend un argument objet.
Utilisez une boucle for...in pour parcourir toutes les propriétés de l'objet et afficher le nom de la propriété suivi de sa valeur.
Exemple d'utilisation :

const personne = {
    prenom: "Bertrand",
    nomDeFamille: "Dupuis",
    age: 30,
    profession: "Développeur",
    naissance: 1993,
    situation: "Marié",
    enfants: 2
};

afficherObjet(personne);
// Résultat attendu :
//  prenom: "Bertrand"
//  nomDeFamille: "Dupuis"
//  age: 30
//  profession: "Développeur"
//  naissance: 1993
//  situation: "Marié"
//  enfants: 2

*/


    let person = {
        prenom: "Bertrand",
        nomDeFamille: "Dupuis",
        age: 30,
        profession: "Développeur",
        naissance: 1993,
        situation: "Marié",
        enfants: 2
    };

    function afficherObjet()
{
    
    for (let key in person) {
        console.log(key + ": " + person[key]); // person[key] signifie que vous utilisez la VALEUR de la variable key comme nom de propriété
    }

}
// Appel de fonction
afficherObjet(person);



