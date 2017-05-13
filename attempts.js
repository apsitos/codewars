// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

//
// function cakes(recipe, available) {
//   let need = Object.keys(recipe)
//   let have = Object.keys(available)
//   //break need into component parts so comparing each element will work
//   function canMake(ing) {
//     return need.filter(function(el) {
//       return el.indexOf(ing) > -1;
//     })
//   }
//   console.log(need);
//   console.log(have);
//   console.log(canMake(have));
// }
//
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});


// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// DNAStrand ("ATTGC") # return "TAACG"
//
// DNAStrand ("GTAT") # return "CATA"


// function DNAStrand(strand) {
//   const DNA = {
//     A: 'T', C: 'G', T: 'A', G: 'C'
//   }
//   let newDNA =
//   strand.split('').reduce(function(gene, letter) {
//     return gene + DNA[letter]
//   }, [])
//   console.log(newDNA);
// }
//
// DNAStrand('ATTGC')

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
  function separate() {
  let notNum = (num + '').split('')
  let numArray = []
  notNum.forEach(function(i) {
    numArray.push(parseInt(i))
  })
  if(numArray.length > 1){
    function multiply(array) {
      let sum = 1
      for(let i =0; i < array.length; i++){
        sum = sum * array[i]
      }
      return(sum);
    }
    // console.log(multiply(numArray));
    let newNum = multiply(numArray);
  }
   else {console.log(numArray)}
 }
 separate()
}

persistence(99)

// let output = []
// let notNum = num.toString()
// if (notNum.length > 1) {
//   for(let i = 0; i < notNum.length; i++ ){
//     output.push(notNum.charAt(i))
//   }
//   console.log(output);
//   for(let j = 0; j < output.length; j++){
//     console.log();
//   }
// }
// console.log(notNum);

// evaluate the length of num, split the number into individual numbers, multiply them together

// persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                       // 1*2*6 = 12, and finally 1*2 = 2