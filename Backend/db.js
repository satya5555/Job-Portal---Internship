const mysql = require('mysql'); 

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'jobportal',
    port     : 3307
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to the database!");
});

module.exports = connection;
