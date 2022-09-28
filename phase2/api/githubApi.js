const got = require('got');

class GithubApi {
  constructor() {
    this.url = 'https://api.github.com/repos/';
  }

  fetchRepositoryData(path, callback) {
    got(this.url + path)
    .then((response) => {return response.body})
    .then((string) => {return JSON.parse(string)})
    .then((parsed) => {callback(parsed)});
  }
}



// In node



const api = new GithubApi();

api.fetchRepositoryData('sinatra/sinatra', (repositoryData) => {
  console.log(repositoryData);
});

// This should log:
//
// {
//   id: 106995,
//   node_id: 'MDEwOlJlcG9zaXRvcnkxMDY5OTU=',
//   name: 'sinatra',
//   full_name: 'sinatra/sinatra',
//   private: false,
//   owner: {
//     login: 'sinatra',
//     id: 8312,
//     node_id: 'MDEyOk9yZ2FuaXphdGlvbjgzMTI=',
//   (...)
//   (...)
// }