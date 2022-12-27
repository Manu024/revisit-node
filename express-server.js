const express = require("express");
const bodyParser = require('body-parser')
const path = require('path')
const fs = require('fs')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const validate = (req, res, next) => {
  let date = new Date(new Date().toISOString().substring(0, 10));
  fs.writeFile('server.log', ""+date, (err, res) => {
    if (err) {
      console.log("Error in loggin the entry date");
    }
  })
  const query = req.body;
  if (query.username == "raman" && query.password == "123") {
    res.send("Login Successful");
    next();
  } else {
    res.send("Login Failed");
  }
  date = "\n" + new Date(new Date().toISOString().substring(0, 10));
  fs.appendFile('server.log', date, (err, res) => {
    if (err) {
      console.log("Error in loggin the exit date");
    }
  })
}

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname + '/demo.html'));
});

app.post('/validate', validate, (req, res) => {
  console.log('server hit');
})


app.listen(3000, () => console.log("express server started"));
