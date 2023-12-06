const express = require("express");
const app = express();

const port = 3004;

app.get("/products", (request, response) => {
  response.send({
    products: [
      { id: 1, title: "iphone 11", price: 1100 },
      { id: 2, title: "iphone 12", price: 1200 },
      { id: 3, title: "iphone 13", price: 1300 },
      { id: 4, title: "iphone 14", price: 1400 },
    ],
  });
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
