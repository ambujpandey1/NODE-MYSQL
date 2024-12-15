const mysql = require('mysql');




/*
  1-start xampp server (appache,mysql)
  2-on chrom(  localhost/phpmyadmin)
  3.create database
 */

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'test'
});

// check sql is connected or not
con.connect((err) => {
    if (err) {
        console.warn("error");
    }
    else {
        console.warn("Connected");
    }
});

module.exports=con;
