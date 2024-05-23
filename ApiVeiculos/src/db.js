const mysql = require('mysql2');

const conn = mysql.createConnection({

    host: 3306,
    user: 'root',
    password: 'root',
    database: 'apiwebsemantica'
     

});

conn.connect((error)=>{
    if(error) throw error;
    console.log(`Conectado ao banco: apiwebsemantica`)
});
exports.execute = (query, params=[]) => {
    return new Promise((resolve, reject) => {
        pool.query(query, params, (error, result, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(result)
            }
        });
    })
}

module.exports = conn;