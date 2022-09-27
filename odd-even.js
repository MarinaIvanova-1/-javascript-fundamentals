const getParity = (number) => {
  if (number % 2 === 0) {
    return `even`;
  } else {
    return `odd`;
  }
}


for (let i = 1 ; i <= 20 ; i ++ ) {
  console.log(`${i} is ${getParity(i)}`);
}