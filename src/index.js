const express = require('express');
const server = express();


server.get('/teste', (req, res) => {
res.send('WELCOME TO THE BACKEND 2');

});


server.listen(3000, () => {

    console.log('API ONLINE');
});
