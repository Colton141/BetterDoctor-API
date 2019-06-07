import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';
import { BetterDoctor } from './findABar';

$(document).ready(function() {
  $('#bar').submit(function(event) {
    event.preventDefault();
    let state = $('#state').val();
    let name = $('#name').val();
    let city = $('#city').val();
    $('#state').val("");
    $('#name').val("");
    $('#city').val("");

    let findABar = new FindABar();  // create instance of WeatherService class
    findABar.getBar(state, name, city).then((response) => {
      let text = JSON.parse(response);
      $("#output").append(`<h1>Bar Search Results:</h1><br>`);
      text.forEach((bar) => {
        console.log(bar);
        $("#output").append(`<h1> Name: ${bar.name}</h1>`);
        $("#output").append(`<h1> Brew Type: ${bar.brewery_type}</h1>`);
        $("#output").append(`<h1> Street Adress: ${bar.street}</h1>`);
        $("#output").append(`<h1> City: ${bar.city}</h1>`);
        $("#output").append(`<h1> State: ${bar.state}</h1>`);
        $("#output").append(`<h1> Phone-Number: ${bar.phone}</h1><br><br>`);

        //   $("#output").html(`<h1> ${body}</h1>`)

      });

    });  // call the instance method and pass in user input

    // promise.then(function(response) {
    //
    //
    //
    // }, function(error) {
    //   $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    // });
  });

});
