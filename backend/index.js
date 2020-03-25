const express = require('express');

var pi = 2.265656;
const app = express();

app.get('/',(request , response)=>{
    return response.json({
        id:1,
        nome:'jeff',
        idade:25

    });
});


app.listen(3333);