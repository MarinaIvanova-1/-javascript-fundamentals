class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSaveMode = true;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    this.temperature++;
    if (this.powerSaveMode && this.temperature > 25) {
      this.temperature = 25
    }
    if (!this.powerSaveMode && this.temperature > 32) {
      this.temperature = 32
    }
  }

  down() {
    this.temperature--;
    if (this.temperature < 10) this.temperature = 10;
  }

  turnPowerSaveModeOff() {
    this.powerSaveMode = false
  }

  reset() {
    this.temperature = 20;
  }

  getEnergyUse() {
    if (this.temperature < 18) {
      return 'low-usage'
    } else if (this.temperature <= 25) {
      return 'medium-usage'
    } else {
      return 'high-usage'
    }
  }
}

module.exports = Thermostat