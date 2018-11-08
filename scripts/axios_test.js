const axios = require('axios');
function getServerStatusCode() {
    return new Promise(function(resolve, reject) {
        axios
            .get("https://httpbin.org/status/200")
            .then(response => resolve(response.status))
            .catch(error => reject(error.response.status))
    });
}

getServerStatusCode()
    .then(statusCode=>console.log("letsten",statusCode))
    .then(statusCode=>console.log("down",statusCode))
;