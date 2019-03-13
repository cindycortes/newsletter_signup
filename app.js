const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')


const app = express();

app.use(express.static('public')); // use the css styling for the static page
app.use(bodyParser.urlencoded({ extended: true }));


// Get Route
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/signup.html");
})

// Post Route
app.post('/', function (req, res) {

    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed"
            }
        ]
    };
    var jsonData = JSON.stringify(data);

    var options = {
        url: 'https://us20.api.mailchimp.com/3.0/lists/9453f6c7fc',
        method: "POST",
        headers: {
            "Authorization": "cindy_cortes88 dcd2fba501a611f9bcadb67785dc1cfa-us20"
        },
        body: jsonData
    };


    // console.log(firstName, lastName, email);
    request(options, function (error, response, body) {
        if (error) {
            console.log(error);
        } else {
            console.log(response.statusCode)
        }
    });

});



app.listen(3000, function () {
    console.log('Server is running on port 3000');
});

// dcd2fba501a611f9bcadb67785dc1cfa-us20

// 9453f6c7fc