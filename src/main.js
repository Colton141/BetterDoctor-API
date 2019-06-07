import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';
import { BetterDoctor } from './findABar';

$(document).ready(function() {
  $('#bar').submit(function(event) {
    event.preventDefault();
    let name = $('#name').val();
    let issue = $('#issue').val();
    $('#name').val("");
    $('#issue').val("");

    let betterDoctor = new BetterDoctor();  // create instance of WeatherService class
    betterDoctor.getBar(name, issue).then((response) => {
      let text = JSON.parse(response);
      $("#output").append(`<h1>Search Results:</h1><br>`);
      text.forEach((doc) => {
        console.log(doc);
        $("#output").append(`<h1> Name: ${doc}</h1>`);
        $("#output").append(`<h1> `)


        promise.then(function(response) {


          
        }, function(error) {
          $('.showErrors').text(`There was an error processing your request: ${error.message}`);
        });

        //   $("#output").html(`<h1> ${body}</h1>`)

      });

    });  // call the instance method and pass in user input
  });

});
