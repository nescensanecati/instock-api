const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));
const fs = require("fs");

const get = (_req, res) => {
    knex("inventories")
        .select('inventories.id', 'warehouses.warehouse_name', 'item_name', 'description', 'category', 'status', 'quantity')
        .innerJoin('warehouses', 'inventories.warehouse_id','warehouses.id')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({ message: "Unable to get the inventory" });
        });
};

module.exports = {
    get,
};
