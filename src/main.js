import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Planets from './galactic-age.js';
$(document).ready(function () {
  $('.userInput').submit(function (event) {
    event.preventDefault();
    const ageInput = $('#age').val();
    const expectedAgeInput = $('#expectedAge').val();
    let newPlanets = new Planets(ageInput, expectedAgeInput);
    $('#result').html('Your age on earth: ' + newPlanets.earth[0] + '<br>Your expected lifespan on Earth: ' + newPlanets.earth[1] + '<br> Your age on Mercury: ' + newPlanets.mercury[0] + '<br> Your expected lifespan on Mercury: ' + newPlanets.mercury[1] + '<br> Your age on Venus: ' + newPlanets.venus[0] + '<br> Your expected lifespan on Venus: ' + newPlanets.venus[1] + '<br> Your age on Mars: ' + newPlanets.mars[0] + '<br> Your expected lifespan on Mars: ' + newPlanets.mars[1] + '<br> Your age on Jupiter: ' + newPlanets.jupiter[0] + '<br> Your expected lifespan on Jupiter: ' + newPlanets.jupiter[1]);
    console.log(newPlanets);
  });
});
