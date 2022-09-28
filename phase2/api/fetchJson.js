const got = require('got');

url = 'https://jsonplaceholder.typicode.com/todos'

const fetchJson = (url, callback) => {
  got(url)
  .then((response) => {return response.body}) 
  .then((string) => {return JSON.parse(string)})
  .then((parsed) => {callback(parsed)});
}


fetchJson('https://jsonplaceholder.typicode.com/todos', (response) => {
  console.log(response);
})