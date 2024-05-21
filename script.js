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

// 4) input stringa città, se inizia con Los o New restituisce stringa, altrimenti false

let checkCityName = function(s1){
    
    return s1.startsWith('Los') || s1.startsWith('New') ? s1 : false
    
}

// test 4
console.log('Test 4')
console.log(checkCityName('Pippo'))
console.log(checkCityName('Los Pippo'))
console.log(checkCityName('New Pippo'))
console.log(checkCityName('Pippo New'))
console.log('\n')

// 5) input array (darò per scontato che contenga numeri, non avendo altre indicazioni nell'intestazione dell'esercizio)
// output somma degli elementi

let sumArray = function(a1){
    
    let total = 0.0
    for (let n of a1){
        total += n
    }
    
    return total
    
}

// test 5
console.log('Test 5')
console.log(sumArray([1,2,3,4,5]))
console.log(sumArray([10.8,45,98,125]))
console.log(sumArray([-15,-45,-78,-55]))
console.log(sumArray([0,0,0.5,78,96,112,154.73]))
console.log('\n')


// 6) input array output true se non contiene 1 e 3 (testo uguaglianza anche di type)

let findOnesAndThree = function(a1){
    
    let hasOneOrThree = false
    
    for (let n of a1){
        if((n === 1 || n === 3) && !hasOneOrThree){
            hasOneOrThree = true
            break
        }
    }
    return !hasOneOrThree
}

// test 6
console.log('Test 6')
console.log(findOnesAndThree([1,2,3,4,5]))
console.log(findOnesAndThree([10.8,'3',98,125]))
console.log(findOnesAndThree([-15,-45,-78,-55]))
console.log(findOnesAndThree([0,0,0.5,78,3,112,154.73]))
console.log('\n')


// 7) input angolo in gradi output stringa acuto\ottuso\retto\piatto

let angleType = function(n1){
    switch (true){
        case (n1 === 180): return 'piatto'
        case (n1 === 90): return 'retto'
        case (n1 < 90): return 'acuto'
        default: return 'ottuso'
    }
}

// test 7
console.log('Test 7')
console.log(angleType(180))
console.log(angleType(90))
console.log(angleType(45))
console.log(angleType(115))
console.log('\n')


// 8) input frase output acronimo

let acronymize = function(s1){
    let acronym = ''
    for (let s of s1.split(' ')){
        acronym += s.slice(0,1).toUpperCase()
    }
    return acronym
}

// test 8
console.log('Test 8')
console.log(acronymize('ciao sono io'))
console.log(acronymize('Amore mio'))
console.log(acronymize('Pensavo a teeeee'))
console.log(acronymize('vat\'la pié n\'tla giaca!'))
console.log('\n')