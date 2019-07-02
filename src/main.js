import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Planets from './galactic-age.js'

$(document).ready(function () {
  $('.userInput').submit(function (event) {
    const ageInput = $('#age');
    const expectedAgeInput = $('#expectedAge');
    let newPlanets = new Planets(ageInput, expectedAgeInput);
    console.log(newPlanets);
    event.preventDefault();
  });
});
