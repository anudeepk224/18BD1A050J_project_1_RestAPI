//very good app
const express = require('express');

const app = express();

//routes
app.get('/', (req,res) => {
    res.send('Hello world');
});

//app
app.use(express.json())
const hospitalRouter = require('./routes/hospitals')
app.use('/hospitals',hospitalRouter)

//listening to the server
app.listen(8080, () =>{
    console.log('Server started')
});
