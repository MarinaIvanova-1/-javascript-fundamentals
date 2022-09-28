const url = 'https://api.github.com/repos/';
const got = require('got');

const fetchRepositoryInfo = (path, callback) => {
  got(url + path)
  .then((response) => {return response.body})
  // .then(response => response.body) - this is also valid if it's a single line
  .then((string) => {return JSON.parse(string)})
  .then((parsed) => {callback(parsed)});
}
// const fetchRepositoryInfo = require('./fetchRepositoryInfo');

fetchRepositoryInfo('sinatra/sinatra', (receivedResponse) => {
  console.log(receivedResponse);
});



// // In node

// const fetchRepositoryInfo = require('./fetchRepositoryInfo');

// fetchRepositoryInfo('sinatra/sinatra', (receivedResponse) => {
//   console.log(receivedResponse);
// });

// // This should log:
// //
// // {
// //   id: 106995,
// //   node_id: 'MDEwOlJlcG9zaXRvcnkxMDY5OTU=',
// //   name: 'sinatra',
// //   full_name: 'sinatra/sinatra',
// //   private: false,
// //   owner: {
// //     login: 'sinatra',
// //     id: 8312,
// //     node_id: 'MDEyOk9yZ2FuaXphdGlvbjgzMTI=',
// //   (...)
// //   (...)
// // }