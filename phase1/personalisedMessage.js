const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

// > generateMessages(names);
// [
//   'Hi Anna! 50% off our best candies for you today!',
//   'Hi Laura! 50% off our best candies for you today!',
//   'Hi Josh! 50% off our best candies for you today!',
//   'Hi Min! 50% off our best candies for you today!',
//   'Hi Karla! 50% off our best candies for you today!'
// ]

const generateMessages = (name) => {
  console.log(`Hi ${name}! 50% off our best candies for you today!`)
}
const messages = names.map(generateMessages)

// const generateMessages = names.map(name => `${name}! 50% off our best candies for you today!`)

console.log(messages)