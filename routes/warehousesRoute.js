const express = require("express");
const warehousesRoute = express.Router();

const warehousesDelete = require("../controllers/warehousesDelete"); // warehouses DELETE controller module

const warehousesGet = require("../controllers/warehousesGet"); // warehouses GET controller module

// warehouses GET route for getting all warehouse items
warehousesRoute.get("/:id/inventories", warehousesGet.getSingleWarehouseItems);

module.exports = warehousesRoute;
