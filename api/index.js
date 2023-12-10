const express = require("express");
require("dotenv").config();
const productRouter = require("../routes/productRoute");
const app = express();

const port = process.env.PORT || 3004;

app.get("/", (request, response) => {
  response.send({ message: "API is working fine" });
});

app.use("/products", productRouter);

// app.get("/products", (request, response) => {
//   response.send({
//     products: products,
//   });
// });

// app.get("/products/:id", (request, response) => {
//   try {
//     const id = Number(request.params.id);
//     const product = products.find((product) => product.id === id);
//     if (!product) {
//       response.status(404).send({ message: "product not found" });
//     }
//     response.send({
//       product: product,
//     });
//   } catch (error) {
//     response.status(500).send({ message: error.message });
//   }
// });

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
