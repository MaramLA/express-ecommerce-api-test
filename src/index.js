const express = require("express");
const app = express();

let products = [
  { id: 1, title: "iphone 11", price: 1100 },
  { id: 2, title: "iphone 12", price: 1200 },
  { id: 3, title: "iphone 13", price: 1300 },
  { id: 4, title: "iphone 14", price: 1400 },
];

const port = 3004;

app.get("/", (request, response) => {
  response.send("Welcome to the express server");
});

app.get("/products", (request, response) => {
  response.send({
    products: products,
  });
});

app.get("/products/:id", (request, response) => {
  try {
    const id = Number(request.params.id);
    const product = products.find((product) => product.id === id);
    if (!product) {
      response.status(404).send({ message: "product not found" });
    }
    response.send({
      product: product,
    });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
