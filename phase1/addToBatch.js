const addToBatch = (array, number) => {
  if (array.length < 5) {
    return array.concat(number);
  } else {
    return array;
  }  
}

addToBatch([1], 3); 
addToBatch([1, 2, 3], 4); 
addToBatch([], 8); 
addToBatch([1, 2, 3, 4, 5, 6], 7); 
addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10); 