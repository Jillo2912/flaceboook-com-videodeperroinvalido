const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'u'
});

connection.connect( (err)=>{
    if(err){
        console.log('No se pudo conectar a la base de datos');
        console.log(err);
    }else{
        console.log('Conectado a la base de datos');
    }
});

module.exports = connection;