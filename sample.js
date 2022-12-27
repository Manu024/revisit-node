const fs = require("fs");
var data = "test";
const temp = (cb) => {
  fs.readFile("data.json", "utf-8", (err, res) => {
    if (err) {
      console.log(err);
    }
    if (data) {
      data = JSON.parse(res);
      // console.log(data);
      cb(data);
    }
  });
};

temp((res) => console.log(data));
