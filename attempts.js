// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

function cakes(recipe, available) {
  let need = Object.keys(recipe)
  let have = Object.keys(available)
  //break need into component parts so comparing each element will work
  function canMake(ing) {
    return need.filter(function(el) {
      return el.indexOf(ing) > -1;
    })
  }
  console.log(need);
  console.log(have);
  console.log(canMake(have));
}

// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});


// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
//
// DNAStrand ("ATTGC") # return "TAACG"
//
// DNAStrand ("GTAT") # return "CATA"

function DNAStrand(strand) {
  const DNA = {
    A: 'T', C: 'G', T: 'A', G: 'C'
  }
  let newDNA =
  strand.split('').reduce(function(gene, letter) {
    return gene + DNA[letter]
  }, [])
  console.log(newDNA);
}

// console.log(DNAStrand('ATTGC'));

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
  let notNum = (num + '').split('').length
  function multiply() {
    notNum = (num + '').split('')
    let numArray = []
    notNum.forEach(function(i) {
      numArray.push(parseInt(i))
    })
    let sum = 1
    for (let i = 0; i < numArray.length; i++) {
      sum = sum * numArray[i]
    }
    console.log(sum)
    num = sum
  }

  notNum > 1 ? multiply() : console.log(0);

  notNum = (num + '').split('').length
  notNum > 1 ? multiply() : console.log(num);

}

// console.log(persistence(999));

// evaluate the length of num, split the number into individual numbers, multiply them together

// persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                       // 1*2*6 = 12, and finally 1*2 = 2


// Parse nice int from char problem
// For correct answer program should return int from 0 to 9.
// Assume test input string always valid and may look like "1 year old" or "5 years old", etc.. The first char is number only.

function getAge(inputString) {
  return parseInt(inputString.charAt())
}

 // console.log(getAge('5 years old'))


//Guess the Word: Count Matching Letters
// Consider a game, wherein the player has to guess a target word. All the player knows is the length of the target word.
//
// To help them in their goal, the game will accept guesses, and return the number of letters that are in the correct position.
//
// Write a method that, given the correct word and the player's guess, returns this number.

  //First, put both strings into arrays. Then, loop through first array and compare each item to the first element in the second array. If there is a match,
  //push that element into a new array. Repeat for each element in second array. Return the length of the new array.
function countCorrectCharacters(correctWord, guess){
  const real = correctWord.toLowerCase().split('');
  const attempt = guess.toLowerCase().split('');
  if (real.length !== attempt.length) {
    throw 'ERROR!';
  } else {
    let array = []
    for (let i = 0; i < real.length; i++) {
      if (real[i] === attempt[i]) {
        array.push(real[i])
      }
    }
    return array.length;
  }
}

//Mike's solution:
function countCorrectCharacters(correctWord, guess) {
  if (correctWord.length !== guess.length) {
    throw 'ERROR!';
  } else {
    let count = 0
    for (let i = 0; i < correctWord.length; i++) {
      if (correctWord[i] === guess[i]) {
        count++
      }
    }
    return count;
  }
}

// console.log(countCorrectCharacters("dog", "cog"));

//Whose Move

// Two players - "black" and "white" are playing a game. The game consists of several rounds. If a player wins in a round,
// he is to move again during the next round. If a player loses a round, it's the other player who moves on the next round.
// Given whose turn it was on the previous round and whether he won, determine whose turn it is on the next round.

function whoseMove(lastPlayer, win) {
  if (win === false) {
    lastPlayer === 'black' ? lastPlayer = 'white' : lastPlayer = 'black'
  }
  return lastPlayer
}

// console.log(whoseMove('black', false));

// Is Prime
//
// Define a function isPrime that takes one integer argument and returns true or false depending on if the integer is a prime.
// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

//Check to see if the number is 0 or 1 (therefore not prime). If neither, is the number evenly divisible by 2, 3, or 5. If true '<num> is prime'. If false,
//'<num> is not prime.'

function isPrime(num) {
  num > 0 ? num = num : num = Math.abs(num)
  let prime = true
  if (num !== 0 || 1) {
    let count = 0
    for (let i = 1; i < num; i++) {
      if (num % i == 0) {
        count++
      }
    }
    count == 1 ? prime = true : prime = false
  } else {
    prime = false
  }
  return prime
}

console.log(isPrime(-4247));
