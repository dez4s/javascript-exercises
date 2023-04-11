const removeFromArray = function(array, ...theArgs) {
  let finalArray = [];
  
  array.filter((element) => {
    let isGood = 0;   
    for (i = 0; i < theArgs.length; i++) {
      if (element === theArgs[i]) {
        isGood++;
      }
    }

    if (isGood < 1) {
      finalArray.push(element);
    }

  })
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
