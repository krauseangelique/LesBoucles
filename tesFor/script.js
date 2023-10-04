console.log ("mon script js : Boucle FOR");

function echo(...s) // rest operator
{
        // ;i+=2 si c'est par pas de deux
    for(var i= 0; i < s.length; i++) {
        document.write(s[i] + ' '); // quotes for space
    }
}
// Now call to this function 
echo('Hellow', "World");

/*
Note: (...) rest operator dotes for access more parameters in one as object/array, to get value from object/array we should iterate the whole object/array by using for loop, like above and s is name i just kept you can write whatever you want.

*/