export class BetterDoctor {
  getBar(name, issue) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      // let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=5a84601bf7bac8924dd838cd000d89cc`

      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=cough&specialty_uid=dentist&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=5a84601bf7bac8924dd838cd000d89cc`

      request.onload = function() {
        if (this.status === 200) {
          //return(request.response);
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}



API key = 5a84601bf7bac8924dd838cd000d89cc
