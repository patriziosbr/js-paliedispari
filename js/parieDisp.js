// 2 - Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto. 


var choice = prompt('choose odd or even');
console.log(choice);

var chooseNum = parseInt(prompt('choose a number'));
console.log('user number: ' + chooseNum);

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
var pcNum =  getRandom(1, 5);
console.log('Pc number: ' + pcNum);


var somma = chooseNum + pcNum; 
console.log('the sum is: ' + somma);

var even ='even'
var odd = 'odd'
function answerNum(x) {
    if ( somma % 2 == 0) {
        return even
    } else {
        return odd
    }
}
console.log(answerNum(somma));

if (choice == answerNum() ) {
    console.log('user win');
} else {
    console.log('Pc win');
}




