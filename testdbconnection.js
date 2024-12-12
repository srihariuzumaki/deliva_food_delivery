const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',         // or 127.0.0.1
    user: 'root',              // MySQL username
    password: 'itachi@2004', // Replace with your MySQL password
    database: 'foodorderingwesitedb', // Replace with your database name
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database!');
});

connection.query('SHOW TABLES;', (error, results) => {
    if (error) throw error;
    console.log('Tables in the database:', results);
    connection.end();
});
