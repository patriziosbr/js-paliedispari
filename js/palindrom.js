// 1 - Palindroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var parola = prompt('inserisci parola');
console.log(parola);

// var rev = parola.split("").reverse().join("");
// console.log(rev)
//non capisco gli argomenti undefined


function alContrario(parola) {
    var rev = "";
    rev = parola.split("").reverse().join("");
    return rev
}

var stringaGirata = alContrario(parola);
console.log(stringaGirata);

if ( parola === stringaGirata) {
    console.log('ok');
} else {
    console.log('nope');
}

