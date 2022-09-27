const printHello = () => {
  console.log("Hello!");
}

const executeAfterDelay = (sec, print) => {
  setTimeout(print, sec * 1000);
}

executeAfterDelay(5, printHello);