const Weather = require('./weather');


describe('Weather', () => {
  it('outputs the weather information from a given city', () => {
    const mockedApi = {
      fetchWeatherData: (city, callback) => {
        callback({
          name: 'London',
          id: 'anything'
        })
      }
    }

    const weather = new Weather(mockedApi);

    weather.fetch('London');

    expect(weather.getRepoData()).toEqual({
      name: 'London',
      id: 'anything'
    })
  })
})



