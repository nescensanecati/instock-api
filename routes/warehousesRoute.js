const express = require("express");
const warehousesRoute = express.Router();

const warehousesDelete = require("../controllers/warehousesDelete"); // warehouses DELETE controller module

const warehousesGet = require("../controllers/warehousesGet"); // warehouses GET controller module

const warehousesPost = require("../controllers/warehousesPost");

// warehouses GET route for getting all warehouse items
warehousesRoute.get(
  "/:id/inventories",
  warehousesGet.getSingleWarehouseInventory
);

warehousesRoute.get("/:id", warehousesGet.getSingleWarehouse);

warehousesRoute.post("/", warehousesPost.add);
// warehousesRoute.route("/").post(warehousesPost.add);

module.exports = warehousesRoute;
