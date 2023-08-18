const express = require("express");
const warehousesRoute = express.Router();

const warehousesDelete = require("../controllers/warehousesDelete"); // warehouses DELETE controller module

const warehousesGet = require("../controllers/warehousesGet"); // warehouses GET controller module

const warehousesPost = require("../controllers/warehousesPost");

// warehouses GET route for getting all warehouses list
warehousesRoute.get("/", warehousesGet.getAll);

// warehouses GET route for getting all warehouse items
warehousesRoute.get(
  "/:id/inventories",
  warehousesGet.getSingleWarehouseInventory
);

warehousesRoute.get("/:id", warehousesGet.getSingleWarehouse);

// warehouses POST route for post/creating a New Warehouse
warehousesRoute.post("/", warehousesPost.add);

function logMessage(req, res, next) {
  next();
}

module.exports = warehousesRoute;
