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

cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
