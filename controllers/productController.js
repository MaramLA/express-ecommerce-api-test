const express = require("express");

const getAllProcucts = async (req, res) => {
  try {
    const products = [
      { id: 1, title: "iphone 11", price: 1100 },
      { id: 2, title: "iphone 12", price: 1200 },
      { id: 3, title: "iphone 13", price: 1300 },
      { id: 4, title: "iphone 14", price: 1400 },
    ];
    return res.send(products);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = { getAllProcucts };
