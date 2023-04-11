const removeFromArray = function(array) {
  let removeNr = Array.prototype.slice.call(arguments, 1);
  let finalArray = [];
  label:
  for (i = 0; i < array.length; i++) { 
    for (j = 0; j < removeNr.length; j++) {
      if (array[i] === removeNr[j]) {
        continue label;
      }
    }
    finalArray.push(array[i]); 
  }
return finalArray;
}
  
  removeFromArray([1, 2, 3, 4], 3);

  removeFromArray([1, 2, 3, 4], 3, 2);

  removeFromArray([1, 2, 3, 4], 7, "tacos");

  removeFromArray([1, 2, 3, 4], 7, 2);

  removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
  
  removeFromArray(["hey", 2, 3, "ho"], "hey", 3);

  removeFromArray([1, 2, 3], "1", 3);

// Do not edit below this line
module.exports = removeFromArray;
