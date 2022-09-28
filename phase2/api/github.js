class Github {
  constructor(api) {
    this.api = api; 
    this.dataFromApi;
  }

  fetch(path) {
    this.api.fetchRepositoryData(path, (apiResponse) => {
      this.dataFromApi = apiResponse
    })
  }

  getRepoData() {
    return this.dataFromApi
  }
}

module.exports = Github


// const api = new GithubApi();

// // We inject the instance of `GithubApi`:
// const gihub = new Github(api);

// // This method will delegate to `GithubApi.fetchRepositoryData()`
// github.fetch('sinatra/sinatra');

// // And after a few moments, this should return a JS object with the repo information.
// github.getRepoData();