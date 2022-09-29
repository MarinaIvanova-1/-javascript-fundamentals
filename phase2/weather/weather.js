class Weather {
  constructor(api) {
    this.api = api
    this.dataFromApi;
  }

  fetch(city) {
    this.api.fetchWeatherData(city, (apiResponse) => {
      this.dataFromApi = apiResponse
    })
  }

  getRepoData() {
    return this.dataFromApi
  }
}

module.exports = Weather