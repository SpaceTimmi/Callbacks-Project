/*******************************************************************************
Write a function `xorSelect` that accepts an array and two callback as arguments.
The function should return a new array containing elements of the original array
that result in true when passed in one of the callbacks, but not both.

Examples:
 
let iseven = function(n) {
  return n % 2 === 0;
};

let ispositive = function(n) {
  return n > 0;
};

console.log(xorselect([-2, -1, 1, 2, 3, 4], iseven, ispositive));
// [ -2, 1, 3 ]


let longstring = function(s) {
  return s.length > 4;
};

let startsa = function(s) {
  return s[0] === "a";
};

console.log(
  xorselect(["art", "academy", "app", "cat", "buttery"], longstring, startsa)
);
// [ 'art', 'app', 'buttery' ]
*******************************************************************************/

let xorSelect = function(array, cb1, cb2) {
  let result = array.filter(function (value, i) {
    let cbResult1 = cb1(value, i, array);
    let cbResult2 = cb2(value, i, array);

    // Below -> Will return true only if 'only one' of cbResult1 or cbResult2 is true.
    let bothNotEqualToTrue = !(cbResult1 == true && cbResult2 == true);
    
    // Below -> Will return true only if 'only one' of cbResult1 or cbResult2 is false.
    let bothNotEqualToFalse = !(cbResult1 == false && cbResult2 == false)
    
    if ( bothNotEqualToTrue && bothNotEqualToFalse ) {
      return true;
    } else {
      return false;
    };
  })
  return result;
};


// Test
 
let iseven = function(n) {
  return n % 2 === 0;
};

let ispositive = function(n) {
  return n > 0;
};

console.log(xorSelect([-2, -1, 1, 2, 3, 4], iseven, ispositive));
// [ -2, 1, 3 ]


let longstring = function(s) {
  return s.length > 4;
};

let startsa = function(s) {
  return s[0] === "a";
};

console.log(
  xorSelect(["art", "academy", "app", "cat", "buttery"], longstring, startsa)
);
// [ 'art', 'app', 'buttery' ]






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = xorSelect;
