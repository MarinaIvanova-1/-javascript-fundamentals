const names = ['Anna', 'Li', 'Charlie', 'Mary', 'Jo'];

const isShorterThanThree = (name) => {
  if (name.length < 3) {
    return true;
  } else {
    return false;
  }
}

const namesShorterThanThreeLetters = names.filter(isShorterThanThree);

console.log(namesShorterThanThreeLetters)