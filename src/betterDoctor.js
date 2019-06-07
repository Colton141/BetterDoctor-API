export class FindABar {
  getBar(state, name, city) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      // let url = `https://api.openbrewerydb.org/breweries/search?query=${bar}`
      let url = `https://api.openbrewerydb.org/breweries?by_state=${state}&by_name=${name}&by_city=${city}`

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
