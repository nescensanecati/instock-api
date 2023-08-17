const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));
const fs = require("fs");

const add = (req, res) => {
  const warehouseId = req.params.id;

  knex("warehouses")
    .where({ id: warehouseId })
    .then((warehouse) => {
      if (warehouse.length === 0) {
        return res.status(404).json({ error: "Warehouse not found" });
      }
      res.json(warehouse);
    })
    .catch(() => {
      res.status(500).json({ message: "Unable to delete the inventory" });
    });
};

module.exports = {
  add,
};
