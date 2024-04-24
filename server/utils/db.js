import mysql from 'mysql'

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'abogn_DB'
})

con.connect(function(err) {
    if(err) console.log(`${err}`);
    else console.log("Connected to Abogn DB")
})

export default con;