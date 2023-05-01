import axios from 'axios';

console.log(axios.isCancel('something'));

axios.get('http://localhost:8080/helloworld')
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });