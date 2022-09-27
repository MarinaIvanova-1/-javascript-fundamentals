const lowercaseMessage = (str) => {
  return str.toLowerCase();
}

const transform = (string, aFunction) => {
  return aFunction(string);
}

transform('WHY ARE YOU SHOUTING?', lowercaseMessage);