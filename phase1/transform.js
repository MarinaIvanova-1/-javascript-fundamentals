const uppercaseMessage = (message) => {
  return message.toUpperCase();
}

const transform = (message, transformFunction) => {
  return transformFunction(message);
}

transform("hello", uppercaseMessage);