//Add variables to require the necessary dependencies
const express = require('express');
const app = express();



//set view engine to pug
app.set('view engine', 'pug');

app.use('/static', express.static('public')); //static route and the express.static method to serve the static files located in the public folder

app.use('/', indexRoute);
app.use('/about', aboutRoute);


//catching errors 

app.use((req, res, next) => {
    console.log('There was an error with the server!')
      res.status(404).render('page-not-found');
});

app.use((err, req, res, next) => {

    if(err.status === 404) {
        console.log('There was an error with the server!')
        res.status(404).render('page-not-found', {err});
    } else {
        err.message = err.message || `There was an error with the server!`;
        res.status(err.status || 500).render('error', {err});
    };
});



// starting server
app.listen(8080, () => {
    console.log('This server is listening on port 3000');
}); 
