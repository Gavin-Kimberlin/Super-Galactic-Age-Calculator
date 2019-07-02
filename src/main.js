import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Planets from './galactic-age.js'
console.log('working');
$(document).ready(function () {
  console.log('working');
  $('.userInput').submit(function (event) {
    event.preventDefault();
    const ageInput = $('#age').val();
    const expectedAgeInput = $('#expectedAge').val();
    let newPlanets = new Planets(ageInput, expectedAgeInput);
    console.log(newPlanets);
  });
});
