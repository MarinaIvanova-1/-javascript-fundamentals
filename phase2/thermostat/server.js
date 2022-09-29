const express = require('express');
const Thermostat = require('./thermostat');
const app = express();
const port = 3000;
const thermostat = new Thermostat();

app.get('/', (req, res) => {
  res.send('This is your thermostat!\n')
});

app.get('/temperature', (req,res) => {
  res.send(`"temperature":${thermostat.getTemperature()}\n`)
})

app.post('/up', (req, res) => {
  thermostat.up();
  res.end();
})

app.delete('/temperature', (req, res) => {
  thermostat.reset();
  res.end();
})

console.log(`Server listening on localhost:${port}`);
app.listen(port);