var http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == '/user') {
    res.write("User page");
  }
  else if (req.url == '/product') {
    res.write("Product page");
  }
  else {
    res.write("Home page");
  }  
  // res.end();
});

server.listen(3000, () => console.log("Server started"));