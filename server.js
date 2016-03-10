var app = require('express')()
var dateHelper = require('./date-helper')

app.get('/', function(req, res) {
    // Lazy main path info as its not part of the user stories
    var url = req.get('host');
    var string = 'User stories: \n'+
                 '1) I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016) \n' +
                 '2) If it does, it returns both the Unix timestamp and the natural language form of that date.\n' +
                 '3) If it does not contain a date or Unix timestamp, it returns null for those properties.\n' +
                 'Example usage:\n' +
                 url + '/December%2015,%202015\n' +
                 url + '/1450137600\n' +
                'Example output:\n'+
                '{ "unix": 1450137600, "natural": "December 15, 2015" }\n'
    res.end(string)
})

app.get('/:input', function(req, res){
    
    var input = req.params.input,
        natural = null,
        unix = null
    
    if((new Date(input)).getTime() > 0 ||  // if valid timestamp
        new Date(Number(input)).getTime() > 0  // if valid unix ts
    ) {
        if(isNaN(input)) {
            unix = +new Date(input) / 1000 // get unix from natural date
            natural = input
        } else {
            unix = Number(input)
            natural = dateHelper(input) // convert unix to natural date
        }
    }
    
    res.status(200)
    
    res.json( { "unix": unix,  "natural": natural } )
    res.end()
    
}).listen(process.env.PORT)



