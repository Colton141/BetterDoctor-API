import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';
import { BetterDoctor } from './betterDoctor';

$(document).ready(function() {
  $('#doctor').submit(function(event) {
    event.preventDefault();
    let name = $('#name').val();
    let issue = $('#issue').val();
    $('#name').val("");
    $('#issue').val("");

    let betterDoctor = new BetterDoctor();
    let promise = betterDoctor.getDoctor();

    promise.then((response) => {
      let text = JSON.parse(response);
      console.log(text);
      $("#output").append(`<h1>Search Results:</h1><br>`);
      text.meta.data.forEach((doc) => {
        console.log(doc);
        $("#output").append(`<h1> Name: ${doc.profile.first_name}</h1>`);



        promise.then(function(response) {



        }, function(error) {
          $('.showErrors').text(`There was an error processing your request: ${error.message}`);
        });

        //   $("#output").html(`<h1> ${body}</h1>`)

      });

    });  // call the instance method and pass in user input
  });

});
