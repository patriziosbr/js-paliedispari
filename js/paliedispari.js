// 1 - Palindroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var parola = prompt('inserisci parola');
console.log(parola);

var rev = parola.split("").reverse().join("");
console.log(rev)
//non capisco gli argomenti undefined

if ( parola === rev) {
    console.log('ok');
} else {
    console.log('nope');
}































// 2 - Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto. 

