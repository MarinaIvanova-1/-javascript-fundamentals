const notifyByEmail = (email) => {
  return `Email sent to ${email}`;
}

const notifyByText = (number) => {
  return `Text sent to ${number}`;
}

const notify = (str, notification) => {
  return notification(str);
}

console.log(notify('hello@makers.tech.test', notifyByEmail));
console.log(notify('+10000000000', notifyByText));