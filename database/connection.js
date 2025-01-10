const myqsl = require('mysql');

const conn = myqsl.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database: 'zavrsnirad'
});

conn.connect((err) => {
    if(err) throw err;
    console.log('Successfully connected')
})

module.exports = conn;