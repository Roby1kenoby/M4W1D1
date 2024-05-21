// NOTA: non testerò la validità degli input perchè so già farlo e perchè sono io che inserisco
// gli input in questo file.

// 1) input 2 num, true se uno è 50 o se la somma è 50.
let isFifty = function(n1, n2){
    return n1 + n2 == 50 || n1 == 50 || n2 == 50 ? true : false
}

// test 1 
console.log('Test 1')
console.log(isFifty(50, 2))
console.log(isFifty(30, 20))
console.log(isFifty(100,50))
console.log(isFifty(100,200))
console.log('\n')
// 2) input stringa e nrCarattere da rimuovere, restituisce stringa modificata
// considero l'array a base 1, perchè l'utente conta a partire da 1, non da 0, quindi 2 è la seconda lettera, non la terza 
let remCharFromString = function(s1, n1){
    newS1 = s1.slice(0,n1-1) + s1.slice(n1, s1.length)
    return newS1
}

// test 2
console.log('Test 2')
console.log(remCharFromString('ciao', 2))
console.log(remCharFromString('pippo', 5))
console.log(remCharFromString('Epicode', 4))
console.log(remCharFromString('Epicode edocipE', 8))
console.log('\n')
// 3) input due numeri, se entrambi compresi tra 40 e 60 o tra 70 e 100, allora true altrimenti false

let checkNumbersInRange = function(n1, n2){
    okN1 = n1 >= 40 && n1 <= 60 || n1 >= 70 && n1 <= 100
    okN2 = n2 >= 40 && n2 <= 60 || n2 >= 70 && n2 <= 100
    return (okN1 && okN2)
    
}

// test 3
console.log('Test 3')
console.log(checkNumbersInRange(3,2))
console.log(checkNumbersInRange(45,75))
console.log(checkNumbersInRange(90,2))
console.log('\n')