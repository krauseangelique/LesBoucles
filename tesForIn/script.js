console.log ("mon script js : Boucle FOR IN POUR LES OBJETS");

let person = {
    name: "John",
    age: 30,
    job: "developer"
};

for (let key in person) {
    console.log(key + ": " + person[key]); // person[key] signifie que vous utilisez la VALEUR de la variable key comme nom de propriété
}

/*
Très interressant pour les API donc au départ il s'agit d'un tableau d'objets donc on fait un foreach puis dedant un for...in et dans le for...in on fait une ou des conditions ex. les arbres de + de 3 mètres qui sont des Chênes.
*/

