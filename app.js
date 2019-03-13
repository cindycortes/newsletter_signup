const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')


const app = express(); 

app.use(express.static('public')); // use the css styling for the static page
app.use(bodyParser.urlencoded({extended: true}));


// Get Route
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/signup.html");
})

// Post Route
app.post('/', function (req, res) {
    
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

    console.log(firstName, lastName, email);

})



app.listen(3000, function() {
    console.log('Server is running on port 3000');
});