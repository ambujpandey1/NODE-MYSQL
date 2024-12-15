// const mysql = require('mysql');
const express = require('express');
const app = express();

const con = require("./config");




app.get("/", (req, resp) => {
    // resp.send("route done");
    con.query("select * from users", (err, result) => {
        if (err) {
            resp.send("Error");
        }
        else {
            resp.send(result);
        }
    })
});

//routes


app.use(express.json());
app.post("/", (req, resp) => {
    // const data={name:"pandeyr",password:"56020",user_type:"visitors"};
    const data = req.body;
    con.query('INSERT INTO users SET ?', data, (error, result, fields) => {
        if (error) throw error;
        else {
            resp.send(result);
        }
    })
})





app.put("/:id", (req, resp) => {
    // const data = ["TONY", "0000", "user", 2];
    const data = [req.body.name, req.body.passord, req.body.user_type, req.params.id];
    con.query("UPDATE users SET name =?,password=?,user_type=? where id=?", data, (error, result, fields) => {


        if (error) throw error;
        else {
            resp.send(result);
        }
    });
    //  resp.send(data);
})




app.delete("/:id", (req, resp) => {
    
    con.query("DELETE FROM users WHERE id=" + req.params.id, (error, result) => {
        if (error) throw error;
        else {
            resp.send(result);
        }
    });
    //   resp.send("delete")
})
app.listen(5000);













con.query("select * from users", (err, result) => {
    console.warn("result: ", result);
})