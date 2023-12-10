const express = require("express");
const Product = require("../models/productsSchema");
const { request } = require("http");

const getAllProcucts = async (req, res) => {
  try {
    const products = await Product.find;
    return res.send({
      message: "return all products",
      products: products,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const createNewProduct = async (req, res) => {
  try {
    const newProduct = {
      title: req.body.title,
      price: req.body.price,
    };

    await Product.save(newProduct);
    return res.send({
      message: "Product create",
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = { getAllProcucts, createNewProduct };
