const axios = require('axios');

axios.post('http://localhost/announce', {announcement: 'Bawa bawa BMMMMMMM badududum dum duuuuuummmm BBBBBBBB'}).then(res => {
    console.log(`statusCode: ${res.statusCode}`);
    console.log(res);
}).catch(error => {
    console.error(error);
});