import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';
import { BetterDoctor } from './betterDoctor';

$(document).ready(function() {
  $('#doctor').submit(function(event) {
    $("#output").empty();
    event.preventDefault();
    let name = $('#name').val();
    let issue = $('#issue').val();
    $('#name').val("");
    $('#issue').val("");

    let betterDoctor = new BetterDoctor();
    let promise = betterDoctor.getDoctor(issue, name);

    promise.then((response) => {
      let text = JSON.parse(response);
      console.log(text);
      if(text.meta.total > 0){
      $("#output").append(`<h1>Search Results:</h1><br>`);
      text.data.forEach((doc) => {
        console.log(doc);
        $("#output").append(`<h1> Doctor</h1>`);
        $("#output").append(`<h1> First Name: ${doc.profile.first_name}</h1>`);
        $("#output").append(`<h1> Last Name: ${doc.profile.last_name}</h1>`);
        $("#output").append(`<h1> Street Adress: ${doc.practices[0].visit_address.street}</h1>`);
        $("#output").append(`<h1> Phone Number: ${doc.practices[0].phones[0].number}</h1>`);
        $("#output").append(`<h1> Website: ${doc.practices[0].website}</h1>`);
        if (doc.practices[0].accepts_new_patients == true) {
          $("#output").append(`<h1> Are They Accepting New Patients?: Yes</h1><br></br>`);
        }
        if (doc.practices[0].accepts_new_patients == false) {
          $("#output").append(`<h1> Are They Accepting New Patients?: No</h1><br></br>`);
        }

      });
    }else $("#output").append(`<h1> No Doctors Found</h1><br></br>`);




        promise.then(function(response) {



        }, function(error) {
          $('.showErrors').text(`There was an error processing your request: ${error.message}`);
        });




    });
  });

});
