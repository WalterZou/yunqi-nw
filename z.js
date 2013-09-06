"use strict";
var mysql = require('mysql'),
    fs = require('fs'),
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database:"yunqi"
    });
    var sql='select * from `yunqi_baby`';
    connection.connect();
    connection.query(sql,function(err,rows,fields){
        if(err) throw  err;
        console.log('yunqi_baby',rows);
        var str=JSON.stringify(rows);
        fs.writeFile('yunqi_baby'+'.json',str,function(err){
            if(err) throw err;
            connection.end();
        })
    })

