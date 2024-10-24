// importing express
const express = require('express');
const UserRouter = require('./routers/userRouter');

// intializing express
const app = express();
const port = 5000;

// middleware
app.use('/user',UserRouter);
// app.use('/product')

// routes
app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/add', (req, res) => {
    res.send('respond from add')
});

app.get('/getall', (req, res) => {
    res.send('respond from getall');
});

app.get('/delete', (req, res) => {
    res.send('respond from delete');
});

app.get('/insert', (req, res) => {
    res.send('respond from insert');
}); 


// start the server
app.listen( port, () => {
    console.log('server started');
});
