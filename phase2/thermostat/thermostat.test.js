const Thermostat = require('./thermostat')

describe('Thermostat', () => {
  it('starts with 20 as the temperature', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual(20)
  })

  it('increases the temperature by 1', () => {
    const thermostat = new Thermostat();
    thermostat.up()
    expect(thermostat.getTemperature()).toEqual(21)
  })

  it('decreases the temperature by 1', () => {
    const thermostat = new Thermostat();
    thermostat.down()
    expect(thermostat.getTemperature()).toEqual(19)
  })

  it('minimum temp is 10', () => {
    const thermostat = new Thermostat();
    for(let i=1; i<=11; i++) {
      thermostat.down()
    }
    expect(thermostat.getTemperature()).toEqual(10)
  })

  it('power saving is on by default', () => {
    const thermostat = new Thermostat();
    expect(thermostat.powerSaveMode).toEqual(true)
  })

  it('power saving can be turned off', () => {
    const thermostat = new Thermostat();
    thermostat.turnPowerSaveModeOff()
    expect(thermostat.powerSaveMode).toEqual(false)
  })

  it('if power saving max temp is 25', () => {
    const thermostat = new Thermostat();
    for(let i=1; i<=6; i++) {
      thermostat.up()
    }
    expect(thermostat.getTemperature()).toEqual(25)
  })

  it('if not power saving max temp is 32', () => {
    const thermostat = new Thermostat();
    thermostat.turnPowerSaveModeOff()
    for(let i=1; i<=13; i++) {
      thermostat.up()
    }
    expect(thermostat.getTemperature()).toEqual(32)
  })

  it('increases the temperature by 1', () => {
    const thermostat = new Thermostat();
    thermostat.up()
    thermostat.reset()
    expect(thermostat.getTemperature()).toEqual(20)
  })

  it('returns low-usage if temp below 18', () => {
    const thermostat = new Thermostat();
    thermostat.down()
    thermostat.down()
    thermostat.down()
    expect(thermostat.getEnergyUse()).toEqual('low-usage')
  })

  it('returns medium-usage if temp between 18 and 25 inclusive', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getEnergyUse()).toEqual('medium-usage')
  })

  it('returns high-usage if temp above 25', () => {
    const thermostat = new Thermostat();
    thermostat.turnPowerSaveModeOff()
    for(let i=1; i<=13; i++) {
      thermostat.up()
    }
    expect(thermostat.getEnergyUse()).toEqual('high-usage')
  })

})

