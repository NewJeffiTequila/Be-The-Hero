const express = require('express');

const app = express();

app.get('/',(request , response)=>{
    return response.json({
        id:1,
        nome:'jeff',
        idade:25

    });
});


app.listen(3333);