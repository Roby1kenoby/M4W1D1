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


// 1.e) input string output carattere più usato

let findMostUsedChar = function(s1){
    let chars = {}
    let topLetter = ''
    let topLetterCount = 0
    for (let s of s1){
        if (chars.hasOwnProperty(s)){
            chars[s] += 1
            if (chars[s] > topLetterCount){
                topLetterCount = chars[s]
                topLetter = s
            }
        }
        else{
            chars[s] = 1
            if(topLetterCount === 0 && topLetter === ''){
                topLetterCount = 1
                topLetter = s
            }
        }
    }
    return topLetter
}

// test 1.e
console.log('Test 1.e')
console.log(findMostUsedChar('sassari'))
console.log(findMostUsedChar('Bologna'))
console.log(findMostUsedChar('ciao'))
console.log(findMostUsedChar('mamma'))
console.log(findMostUsedChar('Bleeeeeep'))
console.log(findMostUsedChar('allungo'))
console.log('\n')


// 2.e) input 2 stringhe output true se una è l'anagramma dell'altra

let isAnagram = function(s1, s2){
    return s1.toLowerCase().split("").sort().join("") === s2.toLowerCase().split("").sort().join("") ? true : false
}

// test 2.e
console.log('Test 2.e')
console.log(isAnagram('sassari', 'irassas'))
console.log(isAnagram('sassari', 'ssSirAa'))
console.log(isAnagram('Bologna', 'cipolla'))
console.log(isAnagram('Bologna', 'bologna'))
console.log('\n')

// 3.e) input 1 stringa 1 array output stringhe dell'array che sono anagramma della stringa input

let findAnagrams = function(s1, a1){
    let word = s1.toLowerCase().split("").sort().join("") 
    let anagrams = []
    for (let s of a1){
        s.toLowerCase().split("").sort().join("") === word ? anagrams.push(s) : null
    }

    return anagrams
}

// test 3.e
console.log('Test 3.e')
console.log(findAnagrams('sassari', ['irassas', 'ssSirAa', 'cipolla']))
console.log(findAnagrams('cartine', ['carenti', 'incerta', 'espatrio']))
console.log('\n')


// 4.e) input 1 stringa output true se stringa palindroma, altrimenti false

let isPalindrome = function(s1){
    // reverse della stringa per "leggerla al contrario". Se è uguale allora è palindroma
    return s1.toLowerCase().split('').join() === s1.toLowerCase().split('').reverse().join() ? true : false
}

// test 4.e
console.log('Test 4.e')
console.log(isPalindrome('mammam'))
console.log(isPalindrome('ciao sono io oi onos oaic'))
console.log(isPalindrome('boh che ne so?'))
console.log('\n')


// 5.e) input un numero intero output numero letto dal fondo

let reverseInt = function(i1){
    let revInt = 0
    while(i1 > 0){
        // il modulo mi permette di prendere il resto, che dividendo per 10 è l'ultima cifra del numero.
        // poi divido per 10 il numero stesso, e uso floor per eliminare la parte dopo la virgola (che tanto non mi serve)
        // a questo punto, al nuovo giro, prendo cosa c'è nella variabile rev (inizializzata a 0) e moltiplico per 10
        // per creare al primo giro le decine, poi le centinaia, poi le migliaia e così via
        revInt = (revInt * 10) + (i1%10) 
        i1 = Math.floor(i1/10)
    }
    return revInt
}

// test 5.e
console.log('Test 5.e')
console.log(reverseInt(981))
console.log(reverseInt(12347))
console.log(reverseInt(456))
console.log('\n')

// 6.e) input un numero intero output scala di #

let scala = function(i1){
    for (let i = 0; i <i1; i++ ){
        for (let j = 0; j <= i; j++){
            console.log("#")
        }
        console.log("\n")
    }
}

// test 6.e
console.log('Test 6.e')
console.log(scala(2))
console.log(scala(3))
console.log(scala(4))
console.log('\n')


// 7.e) input string output stringa reversed

let stringReverse = function(s1){
    return s1.split('').reverse().join('')
}

// test 7.e
console.log('Test 7.e')
console.log(stringReverse('ciao'))
console.log(stringReverse('pippo'))
console.log(stringReverse('otrebla'))
console.log('\n')

// 8.e) input array + intero output array diviso in n parti

let arraySplit = function(a1, n1){
    
}

// test 8.e
console.log('Test 8.e')
console.log(stringReverse('ciao'))
console.log(stringReverse('pippo'))
console.log(stringReverse('otrebla'))
console.log('\n')